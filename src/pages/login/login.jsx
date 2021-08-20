import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';


import './login.less'
import logo from "./images/logo.jpg"

export default class Login extends Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };
    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    validateMessage = {
        required: 'Please input your ${name} !',
        types:{
            email:"not a validate email",
            number:"not a validate number",
        },
        string: {
            range: 'length of ${name} must be between ${min} and ${max}'
        }
    }

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt="shit" />
                    <h1>REACT admin management</h1>
                </header>
                <section className='login-content'>
                    <h2> log-in </h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                        validateMessages ={this.validateMessage}
                    >
                        <Form.Item
                            name="username"
                            rules={[
                                {
                                    required: true,
                                },
                                {
                                    type: 'string',
                                    min: 6,
                                    max: 15,
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: "username must be letter, number, underscore"
                                }
                            ]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[
                                { required: true },
                                {
                                    type: 'string',
                                    min: 4,
                                    max: 20,
                                },
                                {
                                    pattern: /^[a-zA-Z0-9_]+$/,
                                    message: "username must be letter, number, underscore"
                                },
                            ]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>

                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
