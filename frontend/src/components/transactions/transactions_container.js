import { connect } from 'react-redux';
import { fetchTransactions, createTransaction, fetchFilteredTransactions, fetchSearchTransactions, fetchValTransactions, clearErrors } from '../../actions/transaction_actions';
import Transaction from './transactions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    transactions: state.entities.transactions.data,
    errors: state.errors.transaction
});

const mapDispatchToProps = (dispatch) => ({
    fetchTransactions: (userId) => dispatch(fetchTransactions(userId)),
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    fetchFilteredTransactions: (userId, category) => dispatch(fetchFilteredTransactions(userId, category)),
    fetchSearchTransactions: (userId, searchTerm) => dispatch(fetchSearchTransactions(userId, searchTerm)),
    fetchValTransactions: (userId, valueAmt) => dispatch(fetchValTransactions(userId, valueAmt)),
    clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
