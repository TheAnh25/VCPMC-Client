import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOAD_USER_REQUEST,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from "../type";
import axiosClient from "../../apis";
import { Dispatch } from "@reduxjs/toolkit";
import { Login } from "../../constants/typepage/login";

export const login =
  (account_login: string, password: string) => async (dispatch: Dispatch) => {
    try {
      dispatch({ type: LOGIN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "access-control-allow-origin": "http://localhost:4444",
        },
        withCredentials: true,
      };

      const { data } = await axiosClient.post(
        "/login",
        {
          account_login,
          password,
        },
        config
      );
      dispatch({ type: LOGIN_SUCCESS, payload: data.user });
    } catch (err) {
      dispatch({
        type: LOGIN_FAILURE,
      });
    }
  };

export const logout = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOGOUT_SUCCESS });
  } catch (error) {
    dispatch({
      type: LOGOUT_FAILURE,
    });
  }
};
