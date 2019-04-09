import { REQUEST_UPDATE_TOUR_DETAIL, REQUEST_ADD_TOUR_DETAIL, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_TOUR_DETAIL, REQUEST_DELETE_TOUR_DETAIL } from '../actions/tourdetail';
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
        case REQUEST_GET_TOUR_DETAIL:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_TOUR_DETAIL:
            return Object.assign({}, state, {
                all: state.all.filter(data => data.id !== action.payload)
            })
        case REQUEST_ADD_TOUR_DETAIL:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_TOUR_DETAIL:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        default:
            return state;
    }

}