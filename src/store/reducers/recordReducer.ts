import {
  LOAD_RECORD_REQUEST,
  LOAD_RECORD_SUCCESS,
  LOAD_RECORD_FAIL,
  CLEAR_GET_ALL_URL_STREAMER_FAIL,
} from "../type";

export const recordReducer = (state = { record: {} }, action: any) => {
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
