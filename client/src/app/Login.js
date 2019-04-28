import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
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
            email: this.state.email,
            password: this.state.password,
        };
        console.log(user);
    }

    render() {
        return (
            <div className="container">
                <form className="box u-margin-small" onSubmit={this.handleSubmit}>
                    <h2 className="title ">Login</h2>
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
                        <p className="control has-icons-left">
                            <input
                                type="password"
                                placeholder="Password"
                                className="input"
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock" />
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button type="submit" className="button is-primary">
                                Login
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        );
    }
}

export default Login;
