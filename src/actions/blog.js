import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
var dateFormat = require('dateformat');
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_BLOG = "REQUEST_GET_BLOG";
export const REQUEST_DELETE_BLOG = "REQUEST_DELETE_BLOG";
export const REQUEST_ADD_BLOG = "REQUEST_ADD_BLOG";
export const REQUEST_UPDATE_BLOG = "REQUEST_UPDATE_BLOG";
export const REQUEST_GET_DETAIL_PLACE = "REQUEST_GET_DETAIL_PLACE";
export const REQUEST_COUNT_PLACE = "REQUEST_COUNT_PLACE";
export const REQUEST_GET_HOME_BLOG = "REQUEST_GET_HOME_BLOG";
export const REQUEST_GET_HOME_DETAILS = "REQUEST_GET_HOME_DETAILS";
export const REQUEST_GET_TOP_DATE_BLOG = "REQUEST_GET_TOP_DATE_BLOG"
const API_URL = "http://127.0.0.1:8000/api";
function noteDelete(id) {
    toast.info(`Delete Success ${id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
function noteAdd(param, data) {
    toast.info(`${param} Success  ${data.title} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
export function requestGetBlog() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/blog/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_BLOG,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestDeleteBlog(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/blog/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_BLOG,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddBlog(data) {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('date', dateFormat(data.date, "yyyy-mm-dd"));
    formData.append('images', data.images);
    formData.append('content', data.content);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/blog/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_BLOG,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestUpdateBlog(data) {
    let formData = new FormData();
    formData.append('title', data.title);
    formData.append('date', dateFormat(data.date, "yyyy-mm-dd"));
    formData.append('images', data.images);
    formData.append('content', data.content);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/blog/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_BLOG,
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
// get data home 
export function requestGetBlogHome() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/blog/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_HOME_BLOG,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestGetBlogHomeDetails(id) {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/blog/${id}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_HOME_DETAILS,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestGetBlogTopDate() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/blog/top`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOP_DATE_BLOG,
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
