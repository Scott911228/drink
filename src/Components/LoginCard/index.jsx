import React from "react";
import './logincard.css';
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://zekspmqanzmaqnuzqtlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3NwbXFhbnptYXFudXpxdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTE3OTIsImV4cCI6MjAwMDU2Nzc5Mn0.-sg1Sjw5clKnOAFfqNxZbZ4OeBWKwX2nMzHvSdgvoIM')

const LoginCard = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo.errorFields[0].errors[0])
  };

  const onFinish = async (values) => {
    const { Email, Password } = form.getFieldsValue();


    await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    }).then((response) => {
      response.error ?
        alert("錯誤的帳號或密碼 請重新輸入") :
        navigate("/")
    });




    console.log('Received values of form: ', values);
  };

  return (
    <div className="form">
      <span className="title">會員登入</span>
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
          className="email"
          label="e-mail"
          name="Email"
          style={{
            fontSize:'50px'
          }}
          rules={[
            {
              type: "email",
              message: "輸入的電子信箱錯誤",
            },
            {
              required: true,
              message: "輸入你的email",
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
          label="密碼"
          name="Password"
          rules={[
            {
              required: true,
              message: "輸入密碼!",
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

        <Form.Item
        >

          <Button style={{ height: "40px", width: "100%", marginBottom: "30px", marginTop:"30px" }} type="primary" htmlType="submit" className="login-form__button">
            登入
          </Button>
          <Link to={"/register-page"}>
            現在註冊!

          </Link>


        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginCard;