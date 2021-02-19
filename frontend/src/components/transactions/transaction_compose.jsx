import React from 'react';

class TransactionCompose extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            transactionId: "",
            category: "",
            description: "",
            value: "",
            errors: {}
        };
        this.renderErrors = this.renderErrors.bind(this);
        this.handleCreateTransaction = this.handleCreateTransaction.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    renderErrors(field) {
        if (this.props.errors) {
            return (
                <>{this.props.errors[field]}</>
            )
        } else {
            return null;
        }
    }

    handleCreateTransaction(e) {
        e.preventDefault();
        let transaction = {
            category: this.state.category,
            description: this.state.description,
            value: this.state.value
        };

        this.props.createTransaction(transaction)
        .then(this.setState({
            transactionId: "",
            category: "",
            description: "",
            value: ""
        }));
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    render() {
        return (
            <div className="transaction-compose-page">
                <h3>Add a new transaction!</h3>
                <form onSubmit={this.handleCreateTransaction}>
                    <div className="transaction-inputs">
                        <label>
                            Type: 
                            <select value={this.state.category} name="category" id="category-input" onChange={this.update('category')}>
                                <option value="" disabled selected>-- Select category --</option>
                                <option value="Salary">Salary</option>
                                <option value="Food">Food</option>
                                <option value="Transport">Transport</option>
                                <option value="House">House</option>
                                <option value="Other">Other</option>
                            </select>
                            <div id="transaction-errors">{this.renderErrors("category")}</div>
                        </label>
                        <label>
                            Description:
                            <input type="text"
                                value={this.state.description}
                                onChange={this.update('description')}
                            />
                            <div id="transaction-errors">{this.renderErrors("description")}</div>
                        </label>
                        <label>
                            Value:
                            <input type="number"
                                id="value-input"
                                value={this.state.value}
                                onChange={this.update('value')}
                                min='0.01'
                                step="0.01"
                            />
                            <div id="transaction-errors">{this.renderErrors("value")}</div>
                        </label>
                        <button className="submit-transaction" type="submit">Add Transaction</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TransactionCompose;