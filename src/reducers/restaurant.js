import { REQUEST_COUNT_RESTAURANT, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_RESTAURANT, REQUEST_DELETE_RESTAURANT, REQUEST_ADD_RESTAURANT, REQUEST_UPDATE_RESTAURANT, REQUEST_GET_RESTAURANT_DETAIL } from '../actions/restaurant';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0
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
        case REQUEST_GET_RESTAURANT:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_RESTAURANT:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_RESTAURANT:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_RESTAURANT:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_RESTAURANT_DETAIL:
            return Object.assign({}, state, {
                detail: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: INITIAL_STATE.fetched,
            })
        case REQUEST_COUNT_RESTAURANT:        
            return Object.assign({},state,{
                count:action.payload
            })
        default:
            return state;
    }

}