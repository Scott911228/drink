import { Link } from "react-router-dom";
import React from 'react';
import { Form, Input, Checkbox, Button } from 'antd';

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

   const onFinish = (values) => {
     console.log('Received values of form: ', values);
   };
 
   return (
     <Form
       {...formItemLayout}
       form={form}
       name="register"
       onFinish={onFinish}
       className="register-form"
       scrollToFirstError
     >
       <Form.Item
         name="name"
         label="帳號名稱"
         tooltip="希望別人怎麼稱呼你?"
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
         name="密碼"
         label="Password"
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
         name="重複輸入密碼"
         label="Re-enter Password"
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
       <Form.Item {...tailFormItemLayout}>
         <Button
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
