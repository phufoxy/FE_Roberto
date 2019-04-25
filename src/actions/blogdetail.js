import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { stateToHTML } from 'draft-js-export-html';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_BLOG_DETAILS = "REQUEST_GET_BLOG_DETAILS";
export const REQUEST_DELETE_BLOG_DETAILS = "REQUEST_DELETE_BLOG_DETAILS";
export const REQUEST_ADD_BLOG_DETAILS = "REQUEST_ADD_BLOG_DETAILS";
export const REQUEST_UPDATE_BLOG_DETAILS = "REQUEST_UPDATE_BLOG_DETAILS";
export const REQUEST_GET_DETAIL_PLACE = "REQUEST_GET_DETAIL_PLACE";
export const REQUEST_COUNT_PLACE = "REQUEST_COUNT_PLACE";
export const REQUEST_GET_HOME_BLOG = "REQUEST_GET_HOME_BLOG";
export const REQUEST_GET_HOME_DETAILS = "REQUEST_GET_HOME_DETAILS";
const API_URL = "http://127.0.0.1:8000/api";
function noteDelete(id) {
    toast.warning(`Delete Success ${id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success-delete'
    });
};
function noteAdd(param, data) {
    toast.success(`${param} Success  ${data.title} !`, {
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

export function requestGetBlogDetail() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/blog/details/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_BLOG_DETAILS,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function requestDeleteBlogDetail(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/blog/details/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_BLOG_DETAILS,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddBlogDetails(data) {
    let formData = new FormData();
    formData.append('blog', data.blog);
    formData.append('title', data.title);
    let body = stateToHTML((data.editorState).getCurrentContent());
    formData.append('body', body);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/blog/details/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_BLOG_DETAILS,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestUpdateBlogDetails(data) {
    let formData = new FormData();
    formData.append('blog', data.blog);
    formData.append('title', data.title);
    let body = stateToHTML((data.editorState).getCurrentContent());
    formData.append('body', body);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/blog/details/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_BLOG_DETAILS,
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
                "Authorization": `token ${cookies.get('token')}`
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
                "Authorization": `token ${cookies.get('token')}`
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
export function requestLoading() {
    return { type: REQUEST_LOADING };
}
export function requestRejected(response) {
    return { type: REQUEST_REJECTED, payload: response };
}
