import { REQUEST_FORGOT_PASSWORD, REQUEST_CHECK_IS_STAFF, REQUEST_LOGIN, REQUEST_ERROR, REQUEST_REGISTER, REQUEST_LOGOUT, REQUEST_EXISTS_TOKEN, REQUEST_EXISTS_TOKEN_ERROR } from '../actions/login';
const INITIAL_STATE = {
    account: [],
    token: '',
    error: '',
    login: false,
    exists: false,
    is_staff: false,
    is_superuser: false,
    is_forget: ''
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
                token: action.payload.auth_token,
                account: action.payload.userObject,
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
        case REQUEST_CHECK_IS_STAFF:
            return Object.assign({}, state, {
                is_staff: action.payload.is_staff,
                is_superuser: action.payload.is_superuser
            })
        case REQUEST_FORGOT_PASSWORD:
            return Object.assign({}, state, {
                is_forget: action.payload
            })
        default:
            return state;
    }

}