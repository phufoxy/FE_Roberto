import { REQUEST_LOGIN, REQUEST_ERROR, REQUEST_REGISTER, REQUEST_LOGOUT, REQUEST_EXISTS_TOKEN, REQUEST_EXISTS_TOKEN_ERROR } from '../actions/login';
const INITIAL_STATE = {
    account: [],
    token: '',
    error: '',
    login: false,
    exists: false
}
export default function (state = INITIAL_STATE, action = {}) {
    switch (action.type) {
        case REQUEST_ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                login: false
            })
        case REQUEST_LOGIN:
            return Object.assign({}, state, {
                token: action.payload,
                login: true
            })
        case REQUEST_REGISTER:
            return Object.assign({}, state, {
                token: action.payload,
                login: true
            })
        case REQUEST_LOGOUT:
            return Object.assign({}, state, {
                token: action.payload,
                login: true,
                exists: false
            })
        case REQUEST_EXISTS_TOKEN:
            return Object.assign({}, state, {
                exists: true
            })
        case REQUEST_EXISTS_TOKEN_ERROR:
            return Object.assign({}, state, {
                exists: false
            })
        default:
            return state;
    }

}