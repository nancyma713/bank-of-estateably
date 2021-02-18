import { RECEIVE_TRANSACTIONS, RECEIVE_TRANSACTION, } from '../actions/transaction_actions';

const initialState = { data: [] };

const transactionReducer = (state = initialState, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_TRANSACTIONS:
            nextState = action.transactions;
            return nextState;
        case RECEIVE_TRANSACTION:
            let transaction = {
                id: action.transaction.data._id,
                amount: action.transaction.data.amount,
                interest_rate: action.transaction.data.interest_rate,
                loan_length: action.transaction.data.loan_length,
                monthly_payment: action.transaction.data.monthly_payment
            };
            nextState.data.push(transaction);
            return nextState;
        default:
            return state;
    }
}

export default transactionReducer;