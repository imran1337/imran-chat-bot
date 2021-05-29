import { combineReducers } from "redux";
import messagesList from './reducers';

const rootReducer = combineReducers({
  messagesList,
});

export default rootReducer;