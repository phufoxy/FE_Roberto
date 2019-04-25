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
export const REQUEST_GET_TOP_DATE_BLOG = "REQUEST_GET_TOP_DATE_BLOG";
export const REQUEST_GET_ACOUNT_COMMENT = "REQUEST_GET_ACOUNT_COMMENT";
// feedback
export const REQUEST_ADD_FEEDBACK_HOME = "REQUEST_ADD_FEEDBACK_HOME";
export const REQUEST_COUNT_FEEDBACK = "REQUEST_COUNT_FEEDBACK";
export const REQUEST_COUNT_BLOG = "REQUEST_COUNT_BLOG";
export const REQUEST_COUNT_BLOG_TOP_VIEWS = "REQUEST_COUNT_BLOG_TOP_VIEWS";
export const REQUEST_GET_FEEDBACK_HOME = "REQUEST_GET_FEEDBACK_HOME";
// feed back admin
export const REQUEST_GET_FEEDBACK = "REQUEST_GET_FEEDBACK";
export const REQUEST_DELETE_FEEDBACK = "REQUEST_DELETE_FEEDBACK";
export const REQUEST_ADD_FEEDBACK = "REQUEST_ADD_FEEDBACK";
export const REQUEST_UPDATE_FEEDBACK = "REQUEST_UPDATE_FEEDBACK";
// views
export const REQUEST_ADD_VIEWS = "REQUEST_ADD_VIEWS";
export const REQUEST_ADD_LIKES = "REQUEST_ADD_LIKES";
export const REQUEST_ADD_COMMENT = "REQUEST_ADD_COMMENT";


const API_URL = "http://127.0.0.1:8000/api";
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
            noteError(error);
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
            noteError(error);
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
            noteError(error);
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
            url: `${API_URL}/blog/top/`,
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

// add feedback
export function requestAddFeedBack(data, user) {
    let formData = new FormData();
    formData.append('email', data.email);
    formData.append('user', user);
    formData.append('body', data.body);
    formData.append('title', data.title);

    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/feedback/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            toast.success(`Add FeedBack Success ${response.data.email}!`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success'
            });
            dispatch({
                type: REQUEST_ADD_FEEDBACK_HOME,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// get count 
export function requestGetBlogCount() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/blog/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_COUNT_BLOG,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// get count  feedback
export function requestGetFeedBackCount() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/admin/blog/count/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_COUNT_FEEDBACK,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// get count  feedback
export function requestGetFeedBackHome() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/feedback/home/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_FEEDBACK_HOME,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
// feedback
export function requestGetFeedBack() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/feedback/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_GET_FEEDBACK,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));
        })
    }
}
export function requestDeleteFeedBack(id) {
    return (dispatch) => {
        return axios.request({
            method: 'DELETE',
            url: `${API_URL}/feedback/${id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
        }).then(function (response) {
            noteDelete(id);
            dispatch({
                type: REQUEST_DELETE_FEEDBACK,
                payload: id
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddFeedBackAdmin(data, user) {
    let formData = new FormData();
    formData.append('email', data.email);
    formData.append('title', data.title);
    formData.append('body', data.body);
    formData.append('is_check', data.is_check);
    formData.append('user', user);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/feedback/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Add", response.data);
            dispatch({
                type: REQUEST_ADD_FEEDBACK,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestUpdateFeedBackAdmin(data, user) {
    let formData = new FormData();
    formData.append('email', data.email);
    formData.append('title', data.title);
    formData.append('body', data.body);
    formData.append('is_check', data.is_check);
    formData.append('user', user);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/feedback/${data.id}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            noteAdd("Update", response.data);
            dispatch({
                type: REQUEST_UPDATE_FEEDBACK,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddViews(blog, reviews) {
    let formData = new FormData();
    formData.append('reviews', reviews + 1);
    return (dispatch) => {
        return axios.request({
            method: 'PUT',
            url: `${API_URL}/admin/blog/${blog}/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            dispatch({
                type: REQUEST_ADD_VIEWS,
                payload: response.data
            })
        }).catch(function (error) {
            console.log(error);

            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
export function requestAddLikes(blog, username) {
    let formData = new FormData();
    formData.append('blog', blog);
    formData.append('username', username);

    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/blog/likes/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
                "Authorization": `token ${cookies.get('token')}`
            },
            data: formData
        }).then(function (response) {
            toast.success(` Bạn đã vừa Thích Bài Viết  !`, {
                position: toast.POSITION.BOTTOM_RIGHT,
                className: 'toast-success'
            });
            dispatch({
                type: REQUEST_ADD_LIKES,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
// add comment blog
export function requestAddComment(blog, user, comment) {
    let formData = new FormData();
    formData.append('blog', blog);
    formData.append('avatar', user.avatar);
    formData.append('username', user.username);
    formData.append('user', user.id);
    formData.append('comment', comment);
    return (dispatch) => {
        return axios.request({
            method: 'POST',
            url: `${API_URL}/blog/comments/`,
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
                type: REQUEST_ADD_COMMENT,
                payload: response.data
            })
        }).catch(function (error) {
            noteError(error);
            dispatch(requestRejected(error));

        })
    }
}
// blog top views
export function requestGetViewTop() {
    return (dispatch) => {
        dispatch(requestLoading());
        return axios.request({
            method: 'GET',
            url: `${API_URL}/blog/top/views/`,
            headers: {
                "Accept": "application/json",
                'Content-Type': 'application/json',
            },
        }).then(function (response) {
            dispatch({
                type: REQUEST_COUNT_BLOG_TOP_VIEWS,
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
