import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_HOUSE = "REQUEST_GET_HOUSE";
export const REQUEST_ADD_HOUSE = "REQUEST_ADD_HOUSE";
export const REQUEST_DELETE_HOUSE = "REQUEST_DELETE_HOUSE";
export const REQUEST_UPDATE_HOUSE = "REQUEST_UPDATE_HOUSE";
export const REQUEST_GET_DETAIL_HOUSE = "REQUEST_GET_DETAIL_HOUSE";
export const REQUEST_COUNT_HOUSE = "REQUEST_COUNT_HOUSE";
const API_URL = "http://127.0.0.1:8000/api";
function noteDelete(id) {
    toast.info(`Delete Success ${id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
function noteAdd(param, data) {
    toast.info(`${param} Success  ${data.name} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
export function requestGetHouse() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/house/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_HOUSE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// add house
export function requestAddHouse(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name)
    formData.append('content', data.content);
    formData.append('city', data.city);
    formData.append('address', data.address);
    formData.append('type', data.type);
    formData.append('price', data.price);
    formData.append('review', data.review);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/house/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_HOUSE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
// add house
export function requestDeleteHouse(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/house/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            }
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_HOUSE,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
// update house
export function requestUpdateHouse(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name)
    formData.append('content', data.content);
    formData.append('city', data.city);
    formData.append('address', data.address);
    formData.append('type', data.type);
    formData.append('price', data.price);
    formData.append('review', data.review);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/house/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_HOUSE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
// details
// Details
export function requestGetHouseDetails(id) {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/house/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_DETAIL_HOUSE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
// get count house
export function requestCountHouse() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/house/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_COUNT_HOUSE,
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
