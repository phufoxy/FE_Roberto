import { REQUEST_GET_PLACE, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_DELETE_PLACE, REQUEST_ADD_PLACE, REQUEST_UPDATE_PLACE, REQUEST_GET_DETAIL_PLACE, REQUEST_COUNT_PLACE } from '../actions/place';
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
        case REQUEST_GET_PLACE:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_PLACE:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_PLACE:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_PLACE:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_DETAIL_PLACE:
            return Object.assign({}, state, {
                detail: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_COUNT_PLACE:
            return Object.assign({}, state, {
                count: action.payload
            })
        default:
            return state;
    }

}