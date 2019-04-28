import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: '',
            email: '',
            password: '',
            password_confirm: '',
            errors: {},
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            fullName: this.state.fullName,
            email: this.state.email,
            password: this.state.password,
            password_confirm: this.state.password_confirm,
        };
        console.log(user);
    }

    render() {
        return (
            <div className="container">
                <form className="box u-margin-small" onSubmit={this.handleSubmit}>
                    <h2 className="title ">Register</h2>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                type="text"
                                placeholder="Full name"
                                className="input"
                                name="fullName"
                                onChange={this.handleInputChange}
                                value={this.state.fullName}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                type="email"
                                placeholder="Email"
                                className="input"
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-key" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className="input"
                                name="password_confirm"
                                onChange={this.handleInputChange}
                                value={this.state.password_confirm}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock" />
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check" />
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button type="submit" className="button is-primary">
                                Register
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Register;
