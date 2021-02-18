import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            password2: "",
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2
        };

        this.props.signup(user).then(() => {
            if (this.props.errors.length === 0) {
                this.props.login({ email: this.state.email, password: this.state.password })
            }
        });
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

    render() {
        return (
            <div className="session-form">
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            Email
                            <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder='Email'
                            />
                            <div id="session-errors">{this.renderErrors("email")}</div>
                        </label>

                        <br />

                        <label>
                            Password
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder='Password'
                            />
                            <div id="session-errors">{this.renderErrors("password")}</div>
                        </label>

                        <br />

                        <label>
                            Confirm Password
                            <input type="password"
                                value={this.state.password2}
                                onChange={this.update('password2')}
                                placeholder='Confirm Password'
                            />
                            <div id="session-errors">{this.renderErrors("password2")}</div>
                        </label>

                        <br />

                        <div className="submit-buttons">
                            <button type="submit">Sign Up</button>
                        </div>

                        <p>Already have an account? <Link id="redirect" to="/login">Log In</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(SignupForm);