import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';

const RegisterForm = ({ form, onSubmit }) => {
    const [confirmDirty, setConfirmBlur] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                onSubmit(values);
            }
        });
    };

    const compareToFirstPassword = (rule, value, callback) => {
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    };

    const validateToNextPassword = (rule, value, callback) => {
        if (value && confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    };

    const { getFieldDecorator } = form;

    const formItemLayout = {
        labelCol: {
            xs: { span: 24 },
            sm: { span: 8 },
        },
        wrapperCol: {
            xs: { span: 24 },
            sm: { span: 16 },
        },
    };
    const tailFormItemLayout = {
        wrapperCol: {
            xs: {
                span: 24,
                offset: 0,
            },
            sm: {
                span: 16,
                offset: 8,
            },
        },
    };

    return (
        <Form layout="vertical" {...formItemLayout} onSubmit={e => handleSubmit(e)}>
            <Form.Item label="Full Name">
                {getFieldDecorator('fullName', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your Full Name',
                        },
                    ],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="E-mail">
                {getFieldDecorator('email', {
                    rules: [
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
                        },
                        {
                            required: true,
                            message: 'Please input your E-mail!',
                        },
                    ],
                })(<Input />)}
            </Form.Item>
            <Form.Item label="Password" hasFeedback>
                {getFieldDecorator('password', {
                    rules: [
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                        {
                            validator: validateToNextPassword,
                        },
                    ],
                })(<Input.Password />)}
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback>
                {getFieldDecorator('password_confirm', {
                    rules: [
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        {
                            validator: compareToFirstPassword,
                        },
                    ],
                })(<Input.Password onBlur={e => setConfirmBlur(confirmDirty || !!e.target.value)} />)}
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">
                    Register
                </Button>
            </Form.Item>
        </Form>
    );
};
export default RegisterForm;
