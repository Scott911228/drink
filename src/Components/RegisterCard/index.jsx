import { Link } from "react-router-dom";
import React from 'react';
import './registercard.module.css'
import { Form, Input, Checkbox, Button } from 'antd';
import { useNavigate } from "react-router-dom";
import { createClient } from '@supabase/supabase-js'

const supabase = createClient('https://zekspmqanzmaqnuzqtlt.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpla3NwbXFhbnptYXFudXpxdGx0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTE3OTIsImV4cCI6MjAwMDU2Nzc5Mn0.-sg1Sjw5clKnOAFfqNxZbZ4OeBWKwX2nMzHvSdgvoIM')


const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 24,
      offset: 0,
    },
  },
};

const RegisterCard = () => {
   const [form] = Form.useForm();
   const navigate = useNavigate();

    // 可以根據需求添加其他自訂屬性
   const onFinish = async(values) => {
      console.log('Received values of form: ', values);
      const { name, email, password} = form.getFieldsValue();


      await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: {
            user_name: name
          },
        },
    }).then((response) => {
        response.error ? alert("請重新輸入") : navigate("/")
      });
   };
 
   return (
     <Form
       {...formItemLayout}
       form={form}
       name="register"
       style={{
        width:'70%',
        marginLeft:"120px",
        marginTop:"30px"
       }}
       onFinish={onFinish}
       className="register-form"
       scrollToFirstError
     >
       <Form.Item
         name="name"
         label="帳號名稱"
         rules={[
           {
             required: true,
             message: "請輸入帳號!",
             whitespace: true,
           },
         ]}
       >
         <Input />
       </Form.Item>
       <Form.Item
         name="email"
         label="E-mail"
         rules={[
           {
             type: "email",
             message: "您輸入的email不存在",
           },
           {
             required: true,
             message: "請輸入email!",
           },
         ]}
       >
         <Input />
       </Form.Item>

       <Form.Item
         name="password"
         label="密碼"
         rules={[
           {
             required: true,
             message: "請輸入密碼!",
           },
         ]}
         hasFeedback
       >
         <Input.Password />
       </Form.Item>

       <Form.Item
         name="repassword"
         label="確認密碼"
         dependencies={["password"]}
         hasFeedback
         rules={[
           {
             required: true,
             message: "請重複輸入密碼",
           },
           ({ getFieldValue }) => ({
             validator(_, value) {
               if (!value || getFieldValue("password") === value) {
                 return Promise.resolve();
               }

               return Promise.reject(
                 new Error("重複輸入的密碼錯誤")
               );
             },
           }),
         ]}
       >
         <Input.Password />
       </Form.Item>

       <Form.Item
         name="agreement"
         style={{
          marginLeft:"270px"
         }}
         valuePropName="checked"
         rules={[
           {
             validator: (_, value) =>
               value
                 ? Promise.resolve()
                 : Promise.reject(new Error("應同意隱私政策")),
           },
         ]}
         {...tailFormItemLayout}
       >
         <Checkbox>
           我同意 <Link to="">隱私政策</Link>
         </Checkbox>
       </Form.Item>
       <Form.Item
        style={{
          marginLeft:"270px"
        }}
       {...tailFormItemLayout}>
         <Button
          style={{
            marginRight:"0px",
            marginBottom:"30px",
            height:"40px",
            width:"50%"
          }}
           type="primary"
           className="login-form__button"
           htmlType="submit"
         >
           創建你的帳號
         </Button>
          已經有帳號了?{" "}
         <Link to={"/logIn-page"}>前往登入</Link>
       </Form.Item>
     </Form>
   );
};
export default RegisterCard;
