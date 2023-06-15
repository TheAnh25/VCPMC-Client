import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
  CLEAR_LOGIN_SUCCESS,
} from "../type";
import axiosClient from "../../apis";
import { Dispatch } from "@reduxjs/toolkit";
import { Login } from "../../constants/typepage/login";

export const login =
  (account_login: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const { data } = await axiosClient.post("/login", {
        account_login,
        password,
      });

      if (data) {
        localStorage.setItem("user", JSON.stringify(data));
      }

      dispatch({ type: LOGIN_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: LOGIN_FAILURE,
        payload: "Could not login",
      });
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  try {
    if (localStorage.getItem("user")) {
      localStorage.removeItem("user");
    }

    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
      payload: "Could not logout",
    });
  }
};

export const loadUser = () => (dispatch: Dispatch) => {
  dispatch({ type: LOAD_USER_SUCCESS });
};

export const clearLoginSuccess = () => (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_LOGIN_SUCCESS });
};
