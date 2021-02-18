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
                category: action.transaction.data.category,
                description: action.transaction.data.description,
                value: action.transaction.data.value
            };
            nextState.data.push(transaction);
            return nextState;
        default:
            return state;
    }
}

export default transactionReducer;