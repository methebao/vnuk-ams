import React from 'react';
import { ROUTES } from 'app/constants';
import { Form, Icon, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

const LoginForm = ({ form, onSubmit }) => {
    const { getFieldDecorator } = form;
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (!err) {
                onSubmit(values);
            }
        });
    };
    return (
        <Form onSubmit={e => handleSubmit(e)}>
            <Form.Item>
                {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }],
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="email" />)}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" style={{ marginRight: '1rem' }}>
                    Log in
                </Button>
                Or <Link to={ROUTES.REGISTER}>register now!</Link>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;
