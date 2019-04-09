import { REQUEST_GET_TOUR__DETAILS_HOME, REQUEST_UPDATE_TOUR_IMAGE, REQUEST_ADD_TOUR_IMAGE, REQUEST_DELETE_TOUR_IMAGES, REQUEST_GET_TOUR_IMAGES, REQUEST_GET_TOUR_HOME, REQUEST_GET_SLIDER_BANNER, REQUEST_GET_DETAIL_TOUR, REQUEST_DELETE_TOUR, REQUEST_LOADING, REQUEST_REJECTED, REQUEST_GET_TOUR, REQUEST_ADD_TOUR, REQUEST_UPDATE_TOUR } from '../actions/tour';
const INITIAL_STATE = {
    all: [],
    fetching: false,
    fetched: false,
    error: null,
    detail: [],
    count: 0,
    slider: [],
    tour: [],
    images: []
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
        default:
            return state;
    }

}