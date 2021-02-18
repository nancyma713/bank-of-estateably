import { combineReducers } from "redux";
import transactionsReducer from './transactions_reducer';
import usersReducer from "./users_reducer";

export default combineReducers({
    transactions: transactionsReducer,
    users: usersReducer,
});