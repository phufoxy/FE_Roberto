import { REQUEST_UPDATE_USER_ID, REQUEST_GET_USER_ID, REQUEST_GET_USER, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_DELETE_USER, REQUEST_ADD_USER, REQUEST_UPDATE_USER } from '../actions/user';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0,
    slider: [],
    tour: [],
    images: [],
    tourPrice: [],
    filter: [],
    user: {}
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
        case REQUEST_GET_USER:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_USER:
            return Object.assign({}, state, {
                all: state.all.filter(data => data.id !== action.payload)
            })
        case REQUEST_ADD_USER:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_USER:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_USER_ID:
            return Object.assign({}, state, {
                user: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_UPDATE_USER_ID:
            return Object.assign({}, state, {
                user: action.payload
            })
        default:
            return state;
    }

}