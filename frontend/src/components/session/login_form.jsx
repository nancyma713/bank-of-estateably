import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            errors: {}
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
        this.demoLogin = this.demoLogin.bind(this);
    }

    componentWillUnmount() {
        this.props.clearErrors();
    }

    update(field) {
        return (e) => this.setState({ [field]: e.currentTarget.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    demoLogin(e) {
        e.preventDefault();
        let user = {
            email: "demo_user@demo.com",
            password: "pw123456"
        };

        this.props.login(user);
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
                <h1>Log In</h1>
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

                        <div className="submit-buttons">
                            <button type="submit">Log In</button>
                            <button type="submit" onClick={this.demoLogin}>Demo User</button>
                        </div>

                        <p>Don't have an account? <Link id="redirect" to="/signup">Sign up</Link></p>
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter(LoginForm);