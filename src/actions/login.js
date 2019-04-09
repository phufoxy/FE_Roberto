import axios from 'axios';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
export const REQUEST_LOGIN = "REQUEST_LOGIN";
export const REQUEST_REGISTER = "REQUEST_REGISTER";
export const REQUEST_ERROR = "REQUEST_ERROR";
export const REQUEST_LOADTOKEN = "REQUEST_LOADTOKEN";
export const REQUEST_LOGOUT = "REQUEST_LOGOUT";
export const REQUEST_EXISTS_TOKEN = "REQUEST_EXISTS_TOKEN";
export const REQUEST_EXISTS_TOKEN_ERROR = "REQUEST_EXISTS_TOKEN_ERROR";

const API_URL = "http://127.0.0.1:8000/api/";

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
            dispatch({
                type: REQUEST_LOGIN,
                payload: response.data.auth_token
            })
        }).catch(function (error) {
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
            cookies.remove('token', { path: '/' })
            dispatch({
                type: REQUEST_LOGOUT,
                payload: response
            })
        }).catch(function (error) {
            dispatch({
                type: REQUEST_ERROR,
                payload: error
            })

        })
    }
}