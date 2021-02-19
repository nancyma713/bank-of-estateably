import React from 'react';
import TransactionCompose from './transaction_compose';

class Transaction extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: "",
            searchTerm: "",
            valueAmt: "",
            filteredTransactions: [],
            searchTransactions: []
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleValSearch = this.handleValSearch.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    componentDidMount() {
        this.props.fetchTransactions(this.props.currentUser.id);
    }

    handleFilter(e) {
        e.preventDefault();

        this.props.fetchFilteredTransactions(this.props.currentUser.id, this.state.category).then((list) =>
            this.setState({ filteredTransactions: list })
        );
    }

    handleSearch(e) {
        e.preventDefault();

        this.props.fetchSearchTransactions(this.props.currentUser.id, this.state.searchTerm).then((list) =>
            this.setState({ searchTerm: "", searchTransactions: list })
        );
    }

    handleValSearch(e) {
        e.preventDefault();

        this.props.fetchValTransactions(this.props.currentUser.id, this.state.valueAmt).then((list) =>
            this.setState({ valueAmt: "", searchTransactions: list })
        );
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
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
            <div className="transaction-container">
                <div className="transaction-compose">
                    <TransactionCompose 
                    createTransaction={this.props.createTransaction} 
                    clearErrors={this.props.clearErrors} />
                </div>
                <div className="transaction-filter">
                    <form onSubmit={this.handleSearch}>
                        Search by description: 
                        <input value={this.state.searchTerm} type="text" onChange={this.update('searchTerm')}></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="transaction-filter">
                    <form onSubmit={this.handleValSearch}>
                        Search by value: 
                        <input id="value-search" value={this.state.valueAmt} type="text" onChange={this.update('valueAmt')}></input>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="transaction-filter">
                    <form onSubmit={this.handleFilter}>
                        <label>
                            Filter by:
                            <select name="category" id="category-input" onChange={this.update('category')}>
                                <option value="" disabled selected>-- Select category --</option>
                                <option value="Salary">Salary</option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="House">House</option>
                                <option value="Other">Other</option>
                            </select>
                        </label>
                        <button type="submit">Filter</button>
                    </form>
                </div>
                <div className="transaction-table">
                    {table}
                </div>
            </div>
        )
    }
}

export default Transaction;