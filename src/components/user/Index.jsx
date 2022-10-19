import React from "react";
import { Button, Form, Input } from "antd";
import { LockOutlined } from "@ant-design/icons";
import styled from "styled-components";

const User = () => {
  return (
    <UserPage>
      <UserForm
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <label>Current password</label>
        <Form.Item
          name="current password"
          rules={[
            {
              required: true,
              message: "Please input your Current Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <label>New password</label>
        <Form.Item
          name="new password"
          rules={[
            {
              required: true,
              message: "Please input your New Password!",
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <label>Confirm password</label>
        <Form.Item
          name="confirm password"
          rules={[
            {
              required: true,
              message: "Please input your Confirm Password!",
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
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Change Password
          </Button>
        </Form.Item>
      </UserForm>
    </UserPage>
  );
};

const UserPage = styled.div`
  max-width: 500px;
  margin: auto;
  padding: 20px;
`;

const UserForm = styled(Form)`
  .login-form {
    max-width: 300px;
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

export default User;
