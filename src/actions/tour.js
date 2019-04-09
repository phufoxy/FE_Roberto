import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_TOUR = 'REQUEST_GET_TOUR';
export const REQUEST_ADD_TOUR = 'REQUEST_ADD_TOUR';
export const REQUEST_UPDATE_TOUR = 'REQUEST_UPDATE_TOUR';
export const REQUEST_DELETE_TOUR = 'REQUEST_DELETE_TOUR';
export const REQUEST_GET_DETAIL_TOUR = "REQUEST_GET_DETAIL_TOUR";
export const REQUEST_GET_TOUR_HOME = "REQUEST_GET_TOUR_HOME";
// slider
export const REQUEST_GET_SLIDER_BANNER = "REQUEST_GET_SLIDER_BANNER";
export const REQUEST_GET_SLIDER = "REQUEST_GET_SLIDER";
// tour images
export const REQUEST_GET_TOUR_IMAGES = 'REQUEST_GET_TOUR_IMAGES';
export const REQUEST_DELETE_TOUR_IMAGES = 'REQUEST_DELETE_TOUR_IMAGES';
export const REQUEST_ADD_TOUR_IMAGE = 'REQUEST_ADD_TOUR_IMAGE';
export const REQUEST_UPDATE_TOUR_IMAGE = 'REQUEST_UPDATE_TOUR_IMAGE';
// home
export const REQUEST_GET_TOUR__DETAILS_HOME = "REQUEST_GET_TOUR__DETAILS_HOME";


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
export function requestGetTour() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// delete
export function requestDeleteTour(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/tour/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_TOUR,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// add tour 
export function requestAddTour(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name)
    formData.append('price', data.price);
    formData.append('total', data.total);
    formData.append('date', data.date);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);
            dispatch(requestRejected(error));

        })
    }
}
// add tour 
export function requestUpdateTour(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name)
    formData.append('price', data.price);
    formData.append('total', data.total);
    formData.append('date', data.date);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/tour/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_UPDATE_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// Details
export function requestGetTourDetails(id) {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_DETAIL_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function requestGetSliderBanner() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/slider/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_SLIDER_BANNER,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}
export function requestGetSlider() {
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: `${API_URL}/slider/`,
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
            dispatch(requestRejected(error));
        })
    }
}
// tour home
export function requestGetTourHome() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/tour/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_HOME,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));
        })
    }
}

// Tour Images
export function requestGetTourImages() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/images/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_IMAGES,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// delete image tour
export function requestDeleteTourImages(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/tour/images/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_TOUR_IMAGES,
                payload: id
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// add tour images
export function requestAddTourImages(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name)
    formData.append('tour', data.tour);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/images/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_TOUR_IMAGE,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);
            dispatch(requestRejected(error));

        })
    }
}
// add tour 
export function requestUpdateTourImage(data) {
    let formData = new FormData();
    formData.append('images', data.images);
    formData.append('name', data.name)
    formData.append('tour', data.tour);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/tour/images/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_TOUR_IMAGE,
                payload: response.data
            })
        }).catch(function (error) {
            dispatch(requestRejected(error));

        })
    }
}
// Details Home TOur
export function requestGetTourDetailHome(id) {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/tour/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR__DETAILS_HOME,
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
