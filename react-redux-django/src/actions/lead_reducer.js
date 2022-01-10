import axios from "axios";
import { GET_USERS, DELETE_USER, ADD_USER, UPDATE_USER, GET_SINGLE_USER } from "./types";

// CSRF Token Protection
// const getCookie = (name) => {
//     let cookieValue = null;
//     if (document.cookie && document.cookie !== '') {
//         const cookies = document.cookie.split(';');
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             // Does this cookie string begin with the name we want?
//             if (cookie.substring(0, name.length + 1) === (name + '=')) {
//                 cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//                 break;
//             }
//         }
//     }
//     return cookieValue;
// }
// const csrftoken = getCookie('csrftoken');

export const loadUsers = () => {
    return (dispatch) => {
        axios.get(`http://localhost:3005/posts`).then((resp) => {
            console.log("resp", resp)
            dispatch({
                type: GET_USERS,
                payload: resp.data
            })
        }).catch(error => console.log(error))
    }
}
export const deleteUser = (id) => {
    return (dispatch) => {
        axios.delete(`http://localhost:3005/posts/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch({
                type: DELETE_USER,
            })
            dispatch(loadUsers())
        }).catch(error => console.log(error))
    }
}

export const addUser = (user) => {
    return (dispatch) => {
        axios.post(`http://localhost:3005/posts`, user).then((resp) => {
            console.log("resp", resp)
            dispatch({
                type: ADD_USER,
            })
        }).catch(error => console.log(error))
    }
}

export const getsingleUser = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:3005/posts/${id}`).then((resp) => {
            console.log("resp", resp)
            dispatch({
                type: GET_SINGLE_USER,
                payload: resp.data
            })
        }).catch(error => console.log(error))
    }
}
export const getupdateUser = (user, id) => {
    return (dispatch) => {
        axios.put(`http://localhost:3005/posts/${id}`, user).then((resp) => {
            console.log("resp", resp)
            dispatch({
                type: UPDATE_USER,
                payload: resp
            })
        }).catch(error => console.log(error))
    }
}
