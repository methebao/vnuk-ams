import React, { Component } from 'react';
import { registerUser } from 'app/actions/authentication';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

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
        this.props.registerUser(user, this.props.history);
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors,
            });
        }
    }
    componentDidMount() {
        if (this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    render() {
        const { errors } = this.state;
        return (
            <div className="container">
                <form className="box u-margin-small" onSubmit={this.handleSubmit}>
                    <h2 className="title ">Register</h2>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input
                                type="text"
                                placeholder="Full name"
                                className={classnames('input', {
                                    'is-danger': errors.name,
                                })}
                                name="fullName"
                                onChange={this.handleInputChange}
                                value={this.state.fullName}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-user" />
                            </span>

                            {errors.name && <p className="help is-danger">{errors.name}</p>}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input
                                type="email"
                                placeholder="Email"
                                className={classnames('input', {
                                    'is-danger': errors.email,
                                })}
                                name="email"
                                onChange={this.handleInputChange}
                                value={this.state.email}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope" />
                            </span>
                            {errors.email && <p className="help is-danger">{errors.email}</p>}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input
                                type="password"
                                placeholder="Password"
                                className={classnames('input', {
                                    'is-danger': errors.password,
                                })}
                                name="password"
                                onChange={this.handleInputChange}
                                value={this.state.password}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-key" />
                            </span>
                            {errors.password && <p className="help is-danger">{errors.password}</p>}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left ">
                            <input
                                type="password"
                                placeholder="Confirm Password"
                                className={classnames('input', {
                                    'is-danger': errors.password_confirm,
                                })}
                                name="password_confirm"
                                onChange={this.handleInputChange}
                                value={this.state.password_confirm}
                            />
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock" />
                            </span>
                            {errors.password_confirm && <p className="help is-danger">{errors.password_confirm}</p>}
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

const mapStateToProps = state => ({
    errors: state.errors,
    auth: state.auth,
});

export default connect(
    mapStateToProps,
    { registerUser },
)(withRouter(Register));
