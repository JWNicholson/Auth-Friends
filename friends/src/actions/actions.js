import { axiosWithAuth } from '../utils/axiosWithAuth';

export const FETCH_FRIENDS_START = "FETCH_FRIENDS_START";
export const FETCH_FRIENDS_SUCCESS = "FETCH_FRIENDS_SUCCESS";
export const FETCH_FRIENDS_FAIL = "FETCH_FRIENDS_FAIL";

export const ADD_FRIENDS_START = "ADD_FRIENDS_START";
export const ADD_FRIENDS_SUCCESS = "ADD_FRIENDS_SUCCESS";
export const ADD_FRIENDS_FAIL = "ADD_FRIENDS_FAIL";

export const getFriends = () => dispatch => {
    dispatch ({ type: FETCH_FRIENDS_START });

    axiosWithAuth()
    .get(`/api/friends`)
    .then(response => {
        console.log(response);
        dispatch({ type: FETCH_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(err => {
        console.log("getFriends error: ",err.message);
        dispatch({ type: FETCH_FRIENDS_FAIL, payload: err });
    });
}

export const addFriend = friend => dispatch => {
    dispatch({ type: ADD_FRIENDS_START });
    axiosWithAuth()
    .post(`/api/friends`, friend)
    .then(response => {
        console.log(response);
        dispatch({ type: ADD_FRIENDS_SUCCESS, payload: response.data });
    })
    .catch(err => {
        console.log("addFriends error",err.message);
        dispatch({ type: ADD_FRIENDS_FAIL, payload: err });
    });
}