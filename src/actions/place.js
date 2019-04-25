import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_PLACE = "REQUEST_GET_PLACE";
export const REQUEST_DELETE_PLACE = "REQUEST_DELETE_PLACE";
export const REQUEST_ADD_PLACE = "REQUEST_ADD_PLACE";
export const REQUEST_UPDATE_PLACE = "REQUEST_UPDATE_PLACE";
export const REQUEST_GET_DETAIL_PLACE = "REQUEST_GET_DETAIL_PLACE";
export const REQUEST_COUNT_PLACE = "REQUEST_COUNT_PLACE";

const API_URL = "https://fotour.herokuapp.com/api";
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
export function requestGetPlace() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/place/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_PLACE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestDeletePlace(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/place/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_PLACE,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddPlace(data) {
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
            url: `${API_URL}/admin/place/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_PLACE,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestUpdatePlace(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name);
    formData.append('content', data.content);
    formData.append('city', data.city);
    formData.append('address', data.address);
    formData.append('type', data.type);
    formData.append('price', data.price);
    formData.append('review', data.review);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/place/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_PLACE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// Details
export function requestGetPlaceDetails(id) {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/place/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_DETAIL_PLACE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
// get count
export function requestCountPlace() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/place/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_COUNT_PLACE,
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
