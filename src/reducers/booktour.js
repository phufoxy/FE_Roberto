import { REQUEST_BOOK_TOUR_HOME, REQUEST_UPDATE_BOOK_TOUR, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_BOOK_TOUR, REQUEST_DELETE_BOOK_TOUR, REQUEST_ADD_BOOK_TOUR } from '../actions/booktour';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0,
    blog: [],
    accoutBlog: [],
    booktour: {}
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
        case REQUEST_GET_BOOK_TOUR:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_BOOK_TOUR:
            return Object.assign({}, state, {
                all: state.all.filter(data => data.id !== action.payload)
            })
        case REQUEST_ADD_BOOK_TOUR:
            return Object.assign({}, state, {
                all: [...state.all, action.payload]
            })
        case REQUEST_UPDATE_BOOK_TOUR:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_BOOK_TOUR_HOME:
            return Object.assign({}, state, {
                booktour: action.payload
            })
        default:
            return state;
    }

}