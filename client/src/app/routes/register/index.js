import React, { Component } from 'react';
import { registerUser } from 'app/actions/authentication';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Form } from 'antd';
import RegisterForm from './components/RegisterForm';

const Register = ({ registerUser, history }) => {
    const WrappedRegisterForm = Form.create({ name: 'register' })(RegisterForm);

    return (
        <div className="form-box">
            <WrappedRegisterForm onSubmit={values => registerUser(values, history)} />
        </div>
    );
};

export default connect(
    null,
    { registerUser },
)(withRouter(Register));
