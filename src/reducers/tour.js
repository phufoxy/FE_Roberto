import { REQUEST_ADD_NEW_TOUR, REQUEST_GET_TOUR_TOP_REVIEWS, REQUEST_GET_TOUR_SALE, REQUEST_GET_TOUR_LIKES, REQUEST_GET_TOUR_BOOK_COUNT, REQUEST_GET_TOUR_COUNT, REQUEST_GET_TOUR_FILTER, REQUEST_GET_TOUR_TOP_PRICE, REQUEST_GET_TOUR__DETAILS_HOME, REQUEST_UPDATE_TOUR_IMAGE, REQUEST_ADD_TOUR_IMAGE, REQUEST_DELETE_TOUR_IMAGES, REQUEST_GET_TOUR_IMAGES, REQUEST_GET_TOUR_HOME, REQUEST_GET_SLIDER_BANNER, REQUEST_GET_DETAIL_TOUR, REQUEST_DELETE_TOUR, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_TOUR, REQUEST_ADD_TOUR, REQUEST_UPDATE_TOUR } from '../actions/tour';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0,
    countBook: 0,
    slider: [],
    tour: [],
    images: [],
    tourPrice: [],
    filter: [],
    likes: [],
    sale: [],
    reviews: [],
    tournew: []
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
        case REQUEST_GET_TOUR:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_TOUR:
            return Object.assign({}, state, {
                all: state.all.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_TOUR:
            return Object.assign({}, state, {
                all: [...state.all, action.payload],
            })
        case REQUEST_UPDATE_TOUR:
            return Object.assign({}, state, {
                all: state.all.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_DETAIL_TOUR:
            return Object.assign({}, state, {
                detail: action.payload
            })
        case REQUEST_GET_SLIDER_BANNER:
            return Object.assign({}, state, {
                slider: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_HOME:
            return Object.assign({}, state, {
                all: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_IMAGES:
            return Object.assign({}, state, {
                images: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_DELETE_TOUR_IMAGES:
            return Object.assign({}, state, {
                images: state.images.filter(item => item.id !== action.payload)
            })
        case REQUEST_ADD_TOUR_IMAGE:
            return Object.assign({}, state, {
                images: [...state.images, action.payload],
            })
        case REQUEST_UPDATE_TOUR_IMAGE:
            return Object.assign({}, state, {
                images: state.images.map(data => data.id === action.payload.id ? action.payload : data)
            })
        case REQUEST_GET_TOUR__DETAILS_HOME:
            return Object.assign({}, state, {
                tour: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_TOP_PRICE:
            return Object.assign({}, state, {
                tourPrice: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_FILTER:
            return Object.assign({}, state, {
                filter: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_COUNT:
            return Object.assign({}, state, {
                count: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_BOOK_COUNT:
            return Object.assign({}, state, {
                countBook: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_LIKES:
            return Object.assign({}, state, {
                likes: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_SALE:
            return Object.assign({}, state, {
                sale: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_GET_TOUR_TOP_REVIEWS:
            return Object.assign({}, state, {
                reviews: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        case REQUEST_ADD_NEW_TOUR:
            return Object.assign({}, state, {
                tournew: action.payload,
                fetching: INITIAL_STATE.fetching,
                fetched: true
            })
        default:
            return state;
    }

}