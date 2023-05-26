import React from "react";
import "./logincard.module.css";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox } from 'antd';
import { MailOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://zekspmqanzmaqnuzqtlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3NwbXFhbnptYXFudXpxdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTE3OTIsImV4cCI6MjAwMDU2Nzc5Mn0.-sg1Sjw5clKnOAFfqNxZbZ4OeBWKwX2nMzHvSdgvoIM')

const LoginCard = () => {
  const [form] = Form.useForm();
  const navigate= useNavigate();

  const onFinishFailed = (errorInfo) => {
    console.log('Failed: ', errorInfo.errorFields[0].errors[0])
  };

  const onFinish = async(values) => {
    const { Email, Password } = form.getFieldsValue();


    await supabase.auth.signInWithPassword({
      email: Email,
      password: Password,
    }).then((response) => {
      response.error ?
        alert("Wrong Data , Please Retype") :
        navigate("/")
    });




    console.log('Received values of form: ', values);
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      style={{
        width: '50%',
        marginLeft: "280px",
        marginTop: "50px"
      }}
      form={form}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}

    >
      <Form.Item
        name="Email"
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
      <Form.Item style={{ marginLeft: "410px" }}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>記住密碼</Checkbox>
        </Form.Item>

        <Link className="login-form__forgot" to={"/"}>
          忘記密碼
        </Link>
      </Form.Item>

      <Form.Item
        style={{
          display: "flex",
          justifyContent: "center"
        }}
      >
        
          <Button style={{ height: "40px" }} type="primary" htmlType="submit" className="login-form__button">
            登入
          </Button>
      
        或
        <Link to={"/register-page"}>
          <Button style={{ height: "40px" }} type="primary" htmlType="submit">
            現在註冊!
          </Button>
        </Link>


      </Form.Item>
    </Form>
  );
};
export default LoginCard;