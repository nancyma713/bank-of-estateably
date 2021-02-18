import React from 'react';
import TransactionCompose from './transaction_compose';

class Transaction extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <TransactionCompose createTransaction={this.props.createTransaction} clearErrors={this.props.clearErrors}/>
            </div>
        )
    }
}

export default Transaction;