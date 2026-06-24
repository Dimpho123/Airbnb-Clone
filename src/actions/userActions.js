import axios from 'axios';
import { 
    USER_LOGIN_FAIL, 
    USER_LOGIN_REQUEST, 
    USER_LOGIN_SUCCESS, 
    USER_LOGOUT 
} from '../types/userTypes';
import {
    USER_REGISTER_REQUEST,
    USER_REGISTER_SUCCESS,
    USER_REGISTER_FAIL,
} from "../types/userTypes";



export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({
            type: USER_REGISTER_REQUEST,
        });

        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
  "http://localhost:5000/register",
  {
    name,
    email,
    password,
  },
  config
);

        dispatch({
  type: USER_REGISTER_SUCCESS,
  payload: data,
});

        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data,
        });

       
    } catch (error) {
        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response &&
                error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
export const login = (email, password) => async(dispatch) => {
    try {
        dispatch({
            type: USER_LOGIN_REQUEST
        });
const config = {
    headers: {
        "Content-Type": "application/json",
    },
};

const { data } = await axios.post(
    "http://localhost:5000/login",
    { email, password },
    config
);
 localStorage.setItem("userInfo", JSON.stringify(data));

 dispatch({ type: USER_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({type: USER_LOGIN_FAIL, payload: error.response && error.response.data.message?
            error.response.data.message: error.message,
        });
    }
    };

    export const logout = () => (dispatch) => {
    localStorage.removeItem("userInfo");

    dispatch({
        type: USER_LOGOUT,
    });
};
