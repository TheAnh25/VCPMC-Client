import { combineReducers } from "redux";
import { userReducer } from "./userReducers";

import { recordReducer } from "./recordReducer";

const reducers = combineReducers({
  user: userReducer,
  // record: recordReducer,
});

export default reducers;

export type State = ReturnType<typeof reducers>;
