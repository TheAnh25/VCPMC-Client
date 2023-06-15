import {
  LOAD_RECORD_REQUEST,
  LOAD_RECORD_SUCCESS,
  LOAD_RECORD_FAIL,
  CLEAR_GET_ALL_URL_STREAMER_FAIL,
} from "../type";

import axiosClient from "../../apis";
import { Dispatch } from "@reduxjs/toolkit";

export const loadAllRecord = () => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: LOAD_RECORD_REQUEST });

    const { data } = await axiosClient.get("/records");

    if (data) {
      localStorage.setItem("records", JSON.stringify(data));
    }

    dispatch({ type: LOAD_RECORD_SUCCESS, payload: data.record });
  } catch (error) {
    dispatch({
      type: LOAD_RECORD_FAIL,
      payload: "error",
    });
  }
};

export const clearErrorsLoadAllRecord = () => async (dispatch: Dispatch) => {
  dispatch({ type: CLEAR_GET_ALL_URL_STREAMER_FAIL });
};
