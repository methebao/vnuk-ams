import React, { Component } from 'react';
import { loginUser } from 'app/actions/authentication';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { withRouter } from 'react-router-dom';

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
        this.props.loginUser(user, this.props.history);
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
                    <h2 className="title ">Login</h2>
                    <div className="field">
                        <p className="control has-icons-left">
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
                            {errors.email && <span className="help is-danger">{errors.email}</span>}
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
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
                                <i className="fas fa-lock" />
                            </span>
                            {errors.password && <span className="help is-danger">{errors.password}</span>}
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

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors,
});

export default connect(
    mapStateToProps,
    { loginUser },
)(withRouter(Login));
