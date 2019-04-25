import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';

const cookies = new Cookies();
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const REQUEST_LOADTOKEN = "REQUEST_LOADTOKEN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const REQUEST_EXISTS_TOKEN = "REQUEST_EXISTS_TOKEN";
export const REQUEST_EXISTS_TOKEN_ERROR = "REQUEST_EXISTS_TOKEN_ERROR";
export const REQUEST_CHECK_IS_STAFF = "REQUEST_CHECK_IS_STAFF";
export const REQUEST_FORGOT_PASSWORD = "REQUEST_FORGOT_PASSWORD";
export const REQUEST_LOGIN_FACEBOOK = "REQUEST_LOGIN_FACEBOOK";

const API_URL = "http://127.0.0.1:8000/api/";
function LoginError(user) {
    toast.info(`Login Faile ${user} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
// function LoginSucces(user) {
//     toast.info(`Login Success ${user} !`, {
//         position: toast.POSITION.BOTTOM_RIGHT,
//         className: 'toast-success'
//     });
// };

function LogoutSucces(user) {
    toast.info(`Logout Success ${user} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
export function requestLogin(username, password) {
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}users/login/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            data: {
                'username': username,
                'password': password
            }
        }).then(function (response) {
            cookies.set('token', response.data.auth_token, { path: '/' });
            cookies.set('data', JSON.stringify(response.data.userObject[0]), { path: '/' })
            dispatch({
                type: REQUEST_LOGIN,
                payload: response.data
            })

        }).catch(function (error) {
            LoginError(username);
            dispatch({
                type: REQUEST_ERROR,
                payload: error
            })

        })
    }
}
export function requestRegister(data) {
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}users/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
            data: {
                'username': data.username,
                'password': data.password,
                'confirm_password': data.confirm_password
            }
        }).then(function (response) {
            cookies.set('token', response.data.token, { path: '/' });
            cookies.set('data', response.data, { path: '/' })
            cookies.set('is_staff', response.data.is_staff, { path: '/' });
            cookies.set('is_superuser', response.data.is_superuser, { path: '/' });
            dispatch({
                type: REQUEST_REGISTER,
                payload: response.data.auth_token
            })
        }).catch(function (error) {
            // dispatch({
            //     type: REQUEST_ERROR,
            //     payload: error
            // })
        })
    }
}
export function requestExistToken() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}users/current`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': `token ${cookies.get('token')}`
            }
        }).then(function (response) {
            dispatch({
                type: REQUEST_EXISTS_TOKEN,
                payload: response.data.auth_token
            })
        }).catch(function (error) {
            cookies.remove('token', { path: '/' });
            dispatch({
                type: REQUEST_EXISTS_TOKEN_ERROR,
                payload: error
            })
        })
    }
}
export function requestLogout() {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}users/delete/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': `token ${cookies.get('token')}`
            }
        }).then(function (response) {
            LogoutSucces('Success');
            dispatch({
                type: REQUEST_LOGOUT,
                payload: response
            })
            cookies.remove('token', { path: '/' })
            cookies.remove('data', { path: '/' })
            cookies.remove('is_staff', { path: '/' })
            cookies.remove('is_superuser', { path: '/' })
        }).catch(function (error) {
            dispatch({
                type: REQUEST_ERROR,
                payload: error
            })

        })
    }
}
export function requestCheckStaff(id) {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}users/admin/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                'Authorization': `token ${cookies.get('token')}`
            }
        }).then(function (response) {
            if (response.data) {
                cookies.set('is_staff', response.data.is_staff, { path: '/' });
                cookies.set('is_superuser', response.data.is_superuser, { path: '/' });
                dispatch({
                    type: REQUEST_CHECK_IS_STAFF,
                    payload: response.data
                })
            }

        }).catch(function (error) {
            // cookies.remove('token', { path: '/' });
            dispatch({
                type: REQUEST_EXISTS_TOKEN_ERROR,
                payload: error
            })
        })
    }
}
export function requestFogotPassword(username, password) {
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}users/admin/forgot/${username}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
            data: {
                'username': username,
                'password': password
            }
        }).then(function (response) {
            dispatch({
                type: REQUEST_FORGOT_PASSWORD,
                payload: response.data
            })
        }).catch(function (error) {
            if (error.response) {
                console.log(error.response);

            } else if (error.request) {
                console.log(error.request);

            } else {
                console.log('Error', error.message);
            }
        })
    }
}
