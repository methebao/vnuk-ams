import React from 'react';
import { loginUser } from 'app/actions/authentication';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';
import LoginForm from './components/LoginForm';

const Login = ({ loginUser, history }) => {
    const WrappedLoginForm = Form.create({ name: 'login' })(LoginForm);

    return (
        <div className="form-box">
            <WrappedLoginForm onSubmit={values => loginUser(values, history)} />
        </div>
    );
};

export default connect(
    null,
    { loginUser },
)(withRouter(Login));
