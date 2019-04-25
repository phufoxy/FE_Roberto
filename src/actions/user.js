import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_USER = 'REQUEST_GET_USER';
export const REQUEST_ADD_USER = 'REQUEST_ADD_USER';
export const REQUEST_UPDATE_USER = 'REQUEST_UPDATE_USER';
export const REQUEST_DELETE_USER = 'REQUEST_DELETE_USER';
export const REQUEST_GET_DETAIL_TOUR = "REQUEST_GET_DETAIL_TOUR";
export const REQUEST_GET_TOUR_HOME = "REQUEST_GET_TOUR_HOME";
// request getdata id
export const REQUEST_GET_USER_ID = "REQUEST_GET_USER_ID";
export const REQUEST_UPDATE_USER_ID = "REQUEST_GET_USER_ID";


const API_URL = "https://fotour.herokuapp.com/api";
function noteDelete(id) {
    toast.info(`Delete Success ${id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
function noteAdd(param, data) {
    toast.info(`${param} Success  ${data.id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
export function requestGetUser() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/users/admin/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_USER,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// delete
export function requestDeleteUser(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/users/admin/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_USER,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// add tour 
export function requestAddUsers(data) {
    let formData = new FormData();
    formData.append('password', data.password);
    formData.append('username', data.username)
    formData.append('is_active', data.is_active);
    formData.append('is_superuser', data.is_superuser);
    formData.append('is_staff', data.is_staff);
    formData.append('last_name', data.last_name);
    formData.append('first_name', data.first_name);
    formData.append('email', data.email);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/users/admin/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_USER,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);
            dispatch(requestRejected(error));

        })
    }
}
// add tour 
export function requestUpdateUsers(data) {
    let formData = new FormData();
    // formData.append('password', data.password);
    formData.append('username', data.username)
    formData.append('is_active', data.is_active);
    formData.append('is_superuser', data.is_superuser);
    formData.append('is_staff', data.is_staff);
    formData.append('last_name', data.last_name);
    formData.append('first_name', data.first_name);
    formData.append('email', data.email);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/users/admin/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_USER,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);
            dispatch(requestRejected(error));

        })
    }
}
// get user to id
export function requestGetUserID(id) {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/users/admin/${id}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_USER_ID,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// udapte  avatar 
export function requestUpdateAvatar(data, username,id) {
    let formData = new FormData();
    formData.append('avatar', data);
    formData.append('username', username);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/users/admin/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            toast.success(`Thay đổi Avatar thành công!`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success'
            });
            cookies.set('data', JSON.stringify(response.data), { path: '/' })
            dispatch({
                type: REQUEST_UPDATE_USER_ID,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function requestLoading() {
    return { type: REQUEST_LOADING };
}
export function requestRejected(response) {
    return { type: REQUEST_REJECTED, payload: response };
}
