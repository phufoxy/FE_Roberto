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
export const REQUEST_GET_TOUR_COUNT = "REQUEST_GET_TOUR_COUNT";
export const REQUEST_GET_TOUR_BOOK_COUNT = "REQUEST_GET_TOUR_BOOK_COUNT";
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
export const REQUEST_GET_TOUR_TOP_PRICE = "REQUEST_GET_TOUR_TOP_PRICE";
export const REQUEST_GET_TOUR_FILTER = "REQUEST_GET_TOUR_FILTER";
export const REQUEST_GET_TOUR_LIKES = "REQUEST_GET_TOUR_LIKES";
// sale
export const REQUEST_GET_TOUR_SALE = "REQUEST_GET_TOUR_SALE";
export const REQUEST_GET_TOUR_TOP_REVIEWS = "REQUEST_GET_TOUR_TOP_REVIEWS";
// comment
export const REQUEST_ADD_COMMENT_TOUR = "REQUEST_ADD_COMMENT_TOUR";
export const REQUEST_ADD_NEW_TOUR = "REQUEST_ADD_NEW_TOUR";

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
function noteLikes(param, data) {
    toast.success(``, {
        position: toast.POSITION.BOTTOM_LEFT,
        className: 'toast-likes'
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
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
// get count tour 
export function requestGetTourCount() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_COUNT,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// get count tour  book
export function requestGetTourBookCount() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/tour/book/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_BOOK_COUNT,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
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
            noteError(error);
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
    formData.append('type_tour', data.type_tour);
    formData.append('location', data.location);
    formData.append('date_start', data.date_start);
    formData.append('is_sale', data.is_sale);

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
            noteError(error);
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
    formData.append('type_tour', data.type_tour);
    formData.append('location', data.location);
    formData.append('date_start', data.date_start);
    formData.append('is_sale', data.is_sale);

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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// get tour top price
export function requestGetTourSale() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/tour/sale/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_SALE,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// 
// get tour top price
export function requestGetTourTopReviews() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/tour/reviews/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_TOP_REVIEWS,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// get tour  filter
export function requestGetTourTopFilter(data) {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/tour/filter?name=${data.name}`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_FILTER,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
export function requestAddLike(user, tour, like) {
    let formData = new FormData();
    formData.append('likes', like);
    formData.append('username', user);
    formData.append('tour', tour);

    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/admin/tour/likes/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteLikes("Add", response.data);
            dispatch({
                type: REQUEST_GET_TOUR_LIKES,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}

export function requestAddReviews(tour, review) {
    let formData = new FormData();
    formData.append('reviews', review + 1);

    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/tour/${tour}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                // "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_TOUR_LIKES,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
// get comment
// add comment tour
export function requestAddComment(tour, user, comment) {
    let formData = new FormData();
    formData.append('tour', tour);
    formData.append('avatar', user.avatar);
    formData.append('username', user.username);
    formData.append('user', user.id);
    formData.append('comment', comment);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/tour/comments/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                // "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            toast.success(` Bạn đã vừa bình luận  !`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success'
            });
            dispatch({
                type: REQUEST_ADD_COMMENT_TOUR,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
// tour news
// get tour  filter
export function requestGetNewTour() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/tour/new/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json'
            }
        }).then(function (response) {
            dispatch({
                type: REQUEST_ADD_NEW_TOUR,
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
