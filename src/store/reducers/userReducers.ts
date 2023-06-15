import { Auth, User } from "../../constants/typepage/login";
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
  LOAD_RECORD_REQUEST,
  LOAD_RECORD_SUCCESS,
  LOAD_RECORD_FAIL,
  CLEAR_GET_ALL_URL_STREAMER_FAIL,
} from "../type";

const loadDataUser = (): User | undefined => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("user")) {
      return JSON.parse(localStorage.getItem("user") as string);
    }
    return undefined;
  }
};

const loadDataRecord = (): User | undefined => {
  if (typeof window !== "undefined") {
    if (localStorage.getItem("records")) {
      return JSON.parse(localStorage.getItem("records") as string);
    }
    return undefined;
  }
};

const initialState: any = {
  user: loadDataUser(),
  record: loadDataRecord(),
};

// { user: {} }
export const userReducer = (state = initialState.user, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
    case LOAD_USER_REQUEST:
      return {
        loading: true,
        isAuthenticated: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: true,
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        user: null,
        isAuthenticated: false,
      };
    case LOAD_USER_FAIL:
      return {
        loading: false,
        isAuthenticated: false,
        user: null,
        error: action.payload,
      };

    case LOGOUT_SUCCESS:
      return {
        loading: false,
        user: null,
        isAuthenticated: false,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LOAD_USER_SUCCESS:
      return {
        ...state,
      };
    case CLEAR_LOGIN_SUCCESS:
      return {
        ...state,
        success: null,
      };

    default:
      return {
        ...state,
      };
  }
};

export const recordReducer = (state = initialState.record, action: any) => {
  switch (action.type) {
    case LOAD_RECORD_REQUEST:
      return {
        loading: true,
        record: null,
        error: null,
      };
    case LOAD_RECORD_SUCCESS:
      return {
        ...state,
        loading: false,
        record: action.payload,
        success: true,
        error: null,
      };
    case LOAD_RECORD_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        record: null,
        success: false,
      };
    case CLEAR_GET_ALL_URL_STREAMER_FAIL:
      return {
        ...state,
        error: null,
      };
    default:
      return {
        ...state,
      };
  }
};
