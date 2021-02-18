import { connect } from 'react-redux';
import { fetchTransactions, createTransaction, clearErrors } from '../../actions/transaction_actions';
import Transaction from './transactions';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    transactions: state.entities.transactions.data,
    errors: state.errors.transaction
});

const mapDispatchToProps = (dispatch) => ({
    fetchTransactions: (userId) => dispatch(fetchTransactions(userId)),
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
