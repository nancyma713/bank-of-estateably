import axios from 'axios';

export const fetchTransactions = (userId) => {
    return axios.get(`/api/transactions/${userId}`)
};

export const createTransaction = (data) => {
    return axios.post(`/api/transactions/new`, data)
};

export const filterTransactions = (userId, category) => {
    return axios.get(`/api/transactions/filter/${userId}/${category}`)
};

export const searchTransactions = (userId, searchTerm) => {
    return axios.get(`/api/transactions/descsearch/${userId}/${searchTerm}`)
};

export const searchValTransactions = (userId, valueAmt) => {
    return axios.get(`/api/transactions/valuesearch/${userId}/${valueAmt}`)
};