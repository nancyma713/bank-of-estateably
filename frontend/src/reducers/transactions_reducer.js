import { RECEIVE_TRANSACTIONS, RECEIVE_TRANSACTION, RECEIVE_FILTERED_TRANSACTIONS, RECEIVE_SEARCH_TRANSACTIONS } from '../actions/transaction_actions';

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
        case RECEIVE_FILTERED_TRANSACTIONS:
            nextState = action.transactionsFiltered;
            return nextState;
        case RECEIVE_SEARCH_TRANSACTIONS:
            nextState = action.transactionsSearch;
            return nextState;
        default:
            return state;
    }
}

export default transactionReducer;