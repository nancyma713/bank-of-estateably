import * as TransactionAPIUtil from '../util/transaction_api_util';

export const RECEIVE_TRANSACTIONS = "RECEIVE_TRANSACTIONS";
export const RECEIVE_TRANSACTION = "RECEIVE_TRANSACTION";
export const RECEIVE_TRANSACTION_ERRORS = 'RECEIVE_TRANSACTION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

const receiveTransactions = (transactions) => ({
    type: RECEIVE_TRANSACTIONS,
    transactions
});

const receiveTransaction = (transaction) => ({
    type: RECEIVE_TRANSACTION,
    transaction
});

export const receiveErrors = (errors) => ({
    type: RECEIVE_TRANSACTION_ERRORS,
    errors
})

export const clearErrors = () => ({
    type: CLEAR_ERRORS
})

export const fetchTransactions = (userId) => dispatch => (
    TransactionAPIUtil.fetchTransactions(userId).then((transactions) => dispatch(receiveTransactions(transactions)))
);

export const createTransaction = (data) => dispatch => (
    TransactionAPIUtil.createTransaction(data).then((transaction) => dispatch(receiveTransaction(transaction)))
        .catch(err => {
            dispatch(receiveErrors(err.response.data));
        })
);