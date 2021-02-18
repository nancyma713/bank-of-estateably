import axios from 'axios';

export const fetchTransactions = (userId) => {
    return axios.get(`/api/transactions/${userId}`)
};

export const createTransaction = (data) => {
    return axios.post(`/api/transactions/new`, data)
};