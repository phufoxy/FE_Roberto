import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
import { stateToHTML } from 'draft-js-export-html';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_TOUR_DETAIL = 'REQUEST_GET_TOUR_DETAIL';
export const REQUEST_DELETE_TOUR_DETAIL = 'REQUEST_DELETE_TOUR_DETAIL';
export const REQUEST_ADD_TOUR_DETAIL = 'REQUEST_ADD_TOUR_DETAIL';
export const REQUEST_UPDATE_TOUR_DETAIL = 'REQUEST_UPDATE_TOUR_DETAIL';
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
export function requestGetTourDetail() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/details/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_DETAIL,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function requestDeleteTourDetail(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/tour/details/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_TOUR_DETAIL,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddTourDetail(data) {
    let body = stateToHTML((data.editorState).getCurrentContent());
    let formData = new FormData();
    formData.append('tour', data.tour);
    formData.append('title', data.title);
    formData.append('body', body);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/details/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_TOUR_DETAIL,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
export function requestUpdateTourDetail(data) {
    let body = stateToHTML((data.editorState).getCurrentContent());
    let formData = new FormData();
    formData.append('tour', data.tour);
    formData.append('title', data.title);
    formData.append('body', body);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/tour/details/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd('Update', response.data);
            dispatch({
                type: REQUEST_UPDATE_TOUR_DETAIL,
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
