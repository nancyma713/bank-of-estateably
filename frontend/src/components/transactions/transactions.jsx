import React from 'react';
import TransactionCompose from './transaction_compose';

class Transaction extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchTransactions(this.props.currentUser.id);
    }

    render() {
        const { transactions } = this.props;

        const headers = ["Category", "Description", "Value"].map((header, i) => {
            return (
                <th key={i}>{header}</th>
            )
        });

        let transactionItems = transactions.map((transaction) => {
            const intToFloat = (num, decPlaces) => num.toFixed(decPlaces);
            const value = intToFloat(transaction.value, 2);
            return (
                <tr className="transaction-item" key={transaction.id}>
                    <td>{transaction.category}</td>
                    <td>{transaction.description}</td>
                    <td>${value}</td>
                </tr>
            )
        })

        const table = <table>
            <thead>
                <tr>
                    {headers}
                </tr>
            </thead>
            <tbody>
                {transactionItems}
            </tbody>
        </table>

        return (
            <div>
                <div className="transaction-compose">
                    <TransactionCompose createTransaction={this.props.createTransaction} clearErrors={this.props.clearErrors} />
                </div>
                <div className="transaction-table">
                    {table}
                </div>
            </div>
        )
    }
}

export default Transaction;