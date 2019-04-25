import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_SLIDER_BANNER = "REQUEST_GET_SLIDER_BANNER";
export const REQUEST_GET_SLIDER = "REQUEST_GET_SLIDER";
export const REQUEST_DELETE_SLIDER = "REQUEST_DELETE_SLIDER";
export const REQUEST_ADD_SLIDER = "REQUEST_ADD_SLIDER";
export const REQUEST_UPDATE_SLIDER = "REQUEST_UPDATE_SLIDER";

const API_URL = "http://127.0.0.1:8000/api/";
function noteDelete(id) {
    toast.warning(`Delete Success ${id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success-delete'
    });
};
function noteAdd(param, data) {
    toast.success(`${param} Success  ${data.id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
function noteError(param, data) {
    toast.error(`${param} Error  ${data} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
export function requestGetSlider() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}slider/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_SLIDER,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
export function requestDeleteSlider(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}slider/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_SLIDER,
                payload: id
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
export function requestAddSlider(data) {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('title', data.title)
    formData.append('images', data.images);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}slider/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_SLIDER,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
export function requestUpdateSlider(data) {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('title', data.title)
    formData.append('images', data.images);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}slider/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_SLIDER,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
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