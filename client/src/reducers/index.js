import { combineReducers } from "redux";
import nodesReducer from "../reducers/nodesReducer";
import variablesReducer from "../reducers/variablesReducer";

const rootReducer = combineReducers({ nodesReducer, variablesReducer });

export default rootReducer;
