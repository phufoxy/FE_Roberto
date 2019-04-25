import axios from 'axios';
import Cookies from 'universal-cookie';
import { toast } from 'react-toastify';
var dateFormat = require('dateformat');
const cookies = new Cookies();
export const REQUEST_LOADING = 'REQUEST_LOADING';
export const REQUEST_REJECTED = 'REQUEST_REJECTED';
export const REQUEST_GET_BOOK_TOUR = "REQUEST_GET_BOOK_TOUR";
export const REQUEST_DELETE_BOOK_TOUR = "REQUEST_DELETE_BOOK_TOUR";
export const REQUEST_ADD_BOOK_TOUR = "REQUEST_ADD_BOOK_TOUR";
export const REQUEST_UPDATE_BOOK_TOUR = "REQUEST_UPDATE_BOOK_TOUR";
export const REQUEST_GET_DETAIL_PLACE = "REQUEST_GET_DETAIL_PLACE";
export const REQUEST_COUNT_PLACE = "REQUEST_COUNT_PLACE";
export const REQUEST_GET_HOME_BLOG = "REQUEST_GET_HOME_BLOG";
export const REQUEST_GET_HOME_DETAILS = "REQUEST_GET_HOME_DETAILS";
export const REQUEST_GET_TOP_DATE_BLOG = "REQUEST_GET_TOP_DATE_BLOG";
export const REQUEST_GET_ACOUNT_COMMENT = "REQUEST_GET_ACOUNT_COMMENT";
// home
export const REQUEST_BOOK_TOUR_HOME = "REQUEST_BOOK_TOUR_HOME";

const API_URL = "https://fotour.herokuapp.com/api";
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
function noteBookSuccess(param, data) {
    toast.success(`${param} Success  ${data.id} !`, {
        position: toast.POSITION.BOTTOM_RIGHT,
        className: 'toast-success'
    });
};
export function requestGetTourBook() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/book/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_BOOK_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
export function requestDeleteBookTour(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/admin/tour/book/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_BOOK_TOUR,
                payload: id
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddBookTour(data, user) {
    let formData = new FormData();
    formData.append('price', data.price);
    formData.append('person', data.person);
    formData.append('date', dateFormat(data.date, "yyyy-mm-dd"));
    formData.append('user', user);
    formData.append('tour', data.tour);

    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/book/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_BOOK_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestUpdateBookTour(data, user) {
    let formData = new FormData();
    formData.append('price', data.price);
    formData.append('person', data.person);
    formData.append('date', dateFormat(data.date, "yyyy-mm-dd"));
    formData.append('tour', data.tour);
    formData.append('user', user);

    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/tour/book/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_BOOK_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestGetBlogAcountComment(id) {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/users/all/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_ACOUNT_COMMENT,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddBookTourHome(data, user, tour, price) {
    let formData = new FormData();
    formData.append('person', data.person);
    formData.append('date', dateFormat(data.date, "yyyy-mm-dd"));
    formData.append('user', user);
    formData.append('tour', tour);
    formData.append('price', price);

    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/book/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteBookSuccess("Add", response.data);
            dispatch({
                type: REQUEST_ADD_BOOK_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
// book tour home
export function requestBookTourHome(data, price, date, tour, total) {
    let formData = new FormData();
    formData.append('name', data.name);
    formData.append('address', data.address);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('description', data.description);
    formData.append('person', data.person);
    formData.append('price', price);
    formData.append('date', date);
    formData.append('tour', tour);


    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/book/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            if (response.data !== null) {
                let sum = total - data.person;
                axios.request({
                    method: 'PUT',
                    url: `${API_URL}/admin/tour/${tour}/`,
                    headers: {
                        "Accept": "application/json",
                        'Content-Type': 'application/json',
                        "Authorization": `token ${cookies.get('token')}`
                    },
                    data: {
                        'total': sum
                    }
                }).then(function (response) {
                }).catch(function (error) {
                    console.log(error);

                })

            }
            dispatch({
                type: REQUEST_BOOK_TOUR_HOME,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// book tour home
export function requestCheckBook(id, tour) {

    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/tour/book/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: {
                "is_book": true,
                "tour": tour
            }
        }).then(function (response) {
         
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
