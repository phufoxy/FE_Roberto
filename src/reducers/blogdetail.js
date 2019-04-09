import { REQUEST_UPDATE_BLOG_DETAILS, REQUEST_REJECTED, REQUEST_LOADING, REQUEST_GET_BLOG_DETAILS, REQUEST_DELETE_BLOG_DETAILS, REQUEST_ADD_BLOG_DETAILS } from '../actions/blogdetail';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0,
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
        case REQUEST_GET_BLOG_DETAILS:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_BLOG_DETAILS:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_BLOG_DETAILS:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_BLOG_DETAILS:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        // case REQUEST_GET_HOME_BLOG:
        //     return Object.assign({}, state, {
        //         all: action.payload,
        //         fetching: INITIAL_STATE.fetching,
        //         fetched: true
        //     })
        // case REQUEST_GET_HOME_DETAILS:
        //     return Object.assign({}, state, {
        //         detail: action.payload
        //     })
        default:
            return state;
    }

}