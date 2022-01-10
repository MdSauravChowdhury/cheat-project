import { combineReducers } from "redux";
import usersReducers from "./reducer";
import supplierReducers from './supplier_reducer'

const rootReducer = combineReducers({
  users_data: usersReducers,
  supplier_data: supplierReducers
});

export default rootReducer;
