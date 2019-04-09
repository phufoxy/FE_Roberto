import { REQUEST_GET_TOP_DATE_BLOG, REQUEST_GET_HOME_DETAILS, REQUEST_GET_HOME_BLOG, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_BLOG, REQUEST_DELETE_BLOG, REQUEST_ADD_BLOG, REQUEST_UPDATE_BLOG } from '../actions/blog';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0,
    blog: []
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
        case REQUEST_GET_BLOG:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_BLOG:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_BLOG:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_BLOG:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_HOME_BLOG:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_HOME_DETAILS:
            return Object.assign({}, state, {
                detail: action.payload
            })
        case REQUEST_GET_TOP_DATE_BLOG:
            return Object.assign({}, state, {
                blog: action.payload
            })
        default:
            return state;
    }

}