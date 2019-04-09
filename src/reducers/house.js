import { REQUEST_COUNT_HOUSE, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_HOUSE, REQUEST_ADD_HOUSE, REQUEST_DELETE_HOUSE, REQUEST_UPDATE_HOUSE, REQUEST_GET_DETAIL_HOUSE } from '../actions/house';
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
        case REQUEST_GET_HOUSE:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_ADD_HOUSE:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_DELETE_HOUSE:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_UPDATE_HOUSE:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_DETAIL_HOUSE:
            return Object.assign({}, state, {
                detail: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_COUNT_HOUSE:
            return Object.assign({}, state, {
                count: action.payload
            })
        default:
            return state;
    }

}