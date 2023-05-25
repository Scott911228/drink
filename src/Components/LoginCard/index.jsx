import React from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://zekspmqanzmaqnuzqtlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3NwbXFhbnptYXFudXpxdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTE3OTIsImV4cCI6MjAwMDU2Nzc5Mn0.-sg1Sjw5clKnOAFfqNxZbZ4OeBWKwX2nMzHvSdgvoIM')

const LoginCard = () => {
  const [form] = Form.useForm();


  const onFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo.errorFields[0].errors[0])
  };

  const onFinish = (values) => {
    const { email, password } = form.getFieldsValue();
    const { data, error } = supabase.auth.signUp({
      email: email,
      password: password,
    })

    if (error) {
      console.log('fff');
    }

    if (data) {


    }


    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}

    >
      <Form.Item
        name="email"
        rules={[
          {
            type: "email",
            message: "The input is not valid E-mail!",
          },
          {
            required: true,
            message: "Please input your E-mail!",
          },
        ]}
        hasFeedback
      >
        <Input
          prefix={<MailOutlined className="site-form-item-icon" />}
          placeholder="E-Mail"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>記住密碼</Checkbox>
        </Form.Item>

        <Link className="login-form__forgot" to={"/"}>
          忘記密碼
        </Link>
      </Form.Item>

      <Form.Item>
      <Link to={"/shipping-page"}>
        <Button type="primary" htmlType="submit" className="login-form__button">
          登入
        </Button>
        </Link>
             或
          <Link to={"/register-page"}>
          <Button type="primary" htmlType="submit">
            現在註冊!
            </Button>
          </Link>
        

      </Form.Item>
    </Form>
  );
};
export default LoginCard;