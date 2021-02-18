import { RECEIVE_TRANSACTION_ERRORS, CLEAR_ERRORS } from '../actions/transaction_actions';

const _nullErrors = [];

const transactionErrorsReducer = (state = _nullErrors, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TRANSACTION_ERRORS:
            return action.errors;
        case CLEAR_ERRORS:
            return _nullErrors;
        default:
            return state;
    }
};

export default transactionErrorsReducer;