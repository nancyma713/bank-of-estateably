import { connect } from 'react-redux';
import { createTransaction, clearErrors } from '../../actions/transaction_actions';
import TransactionCompose from './transaction_compose';

const mapStateToProps = (state) => ({
    currentUser: state.session.user,
    transactions: state.entities.transactions.data,
    errors: state.errors.transaction
});

const mapDispatchToProps = (dispatch) => ({
    createTransaction: (transaction) => dispatch(createTransaction(transaction)),
    clearErrors: () => dispatch(clearErrors()),
})

export default connect(mapStateToProps, mapDispatchToProps)(TransactionCompose);