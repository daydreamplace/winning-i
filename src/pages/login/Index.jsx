import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Login = () => {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  const goMain = () => {
    navigate("/");
  };

  return (
    <LoginPage>
      <LoginForm
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={goMain}
          >
            Login
          </Button>
          <p>
            Or <a href="">register now!</a>
          </p>
        </Form.Item>
      </LoginForm>
    </LoginPage>
  );
};

const LoginPage = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  height: 600px;
`;

const LoginForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 100px 20px;
  border: 1px solid #ebebeb;
  border-radius: 5px;

  .login-form {
    max-width: 300px;
  }
  .login-form-forgot {
    float: right;
  }
  .ant-col-rtl .login-form-forgot {
    float: left;
  }
  .login-form-button {
    width: 100%;
  }

  p {
    margin-top: 20px;
    text-align: center;
  }
`;

export default Login;
