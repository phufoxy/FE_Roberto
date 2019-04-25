import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_RESTAURANT = 'REQUEST_GET_RESTAURANT';
export const REQUEST_GET_RESTAURANT_DETAIL = 'REQUEST_GET_RESTAURANT_DETAIL';
export const REQUEST_DELETE_RESTAURANT = 'REQUEST_DELETE_RESTAURANT';
export const REQUEST_ADD_RESTAURANT = 'REQUEST_ADD_RESTAURANT';
export const REQUEST_UPDATE_RESTAURANT = 'REQUEST_UPDATE_RESTAURANT';
export const REQUEST_COUNT_RESTAURANT = 'REQUEST_COUNT_RESTAURANT';

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
export function requestCountRestaurant() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/restaurants/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {            
            dispatch({
                type: REQUEST_COUNT_RESTAURANT,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function requestGetRestaurant() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/restaurants/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_RESTAURANT,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// detail
export function requestGetRestaurantDetail(id) {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/restaurants/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_RESTAURANT_DETAIL,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// delete restaurant
export function requestDeleteRestaurant(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/restaurants/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_RESTAURANT,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// add restaurant
export function requestAddRestaurant(data) {
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
            url: `${API_URL}/admin/restaurants/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_RESTAURANT,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// add restaurant
export function requestUpdateRestaurant(data) {
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
            url: `${API_URL}/admin/restaurants/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_RESTAURANT,
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
