import React, { useState } from "react";
import logo from "../../../../assets/img/logo-login.svg";
import { Row, Col, Button, Form, Input, Checkbox } from "antd";
import { useStore } from '../../../../zustand';
import { useHistory } from "react-router-dom";
import { APP_PREFIX_PATH } from 'configs/AppConfig'
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'


const Index1 = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const setAuth = useStore((store)=>{
    return store.setAuth
     })

  const onFinish = (values) => {
    setLoading(true)
    console.log("Success:", values);
    setAuth(true)

    setTimeout(() => {
      history.push(`${APP_PREFIX_PATH}/dashboard`);
      setLoading(false);
    }, 2000);
 


  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div>
      <div className="pt-3 pl-4">
        <img src={logo} alt="" />
      </div>
      <section className="login-page">
        <Row>
          <Col md={24}>
            <h6 className="welcome-back">Welcome Back</h6>
          </Col>

          <Col md={24}>
            <p className="emailPassword">
              Please enter your email and password
            </p>
          </Col>

          <Col span={14} className="centered">
            <Form
              form={form}
              name="basic"
              labelCol={{
                span: 24,
              }}
              wrapperCol={{
                span: 24,
              }}
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                name="Email"
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
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input.Password
                  className="login-password"
                  placeholder="Enter your password"
                />
              </Form.Item>

              <Row>
                <Col md={17}>
                  <Form.Item
                    name="remember"
                    // wrapperCol={{
                    //   offset: 8,
                    //   span: 16,
                    // }}
                  >
                    <Checkbox>Remember for 30 days</Checkbox>
                  </Form.Item>
                </Col>

                <Col md={7} className="pt-2">
                  <p className="forgot-password" onClick={()=>{
                    history.push(`${AUTH_PREFIX_PATH}/forgot-password`);

                  }}> Forgot password</p>
                </Col>
              </Row>

              <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                Sign in
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default Index1;
