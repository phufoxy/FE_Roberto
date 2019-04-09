import { REQUEST_UPDATE_RESTAURANT_DETAIL, REQUEST_ADD_RESTAURANT_DETAIL, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_RESTAURANT_DETAIL, REQUEST_DELETE_RESTAURANT_DETAIL } from '../actions/restaurantdetail';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: []
}
export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case REQUEST_LOADING:
            return Object.assign({}, state, {
                fetching: true,
                fetched: INITIAL_STATE.fetched
            });
        case REQUEST_REJECTED:
            return Object.assign({}, state, {
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
                error: action.payload.data
            });
        case REQUEST_GET_RESTAURANT_DETAIL:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_RESTAURANT_DETAIL:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_RESTAURANT_DETAIL:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_RESTAURANT_DETAIL:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        default:
            return state;
    }

}