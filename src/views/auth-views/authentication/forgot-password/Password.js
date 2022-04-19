


import React, { useState } from "react";
import logo from "../../../../assets/img/logo-login.svg";
import key from "../../../../assets/img/key.svg";
import { Row, Col, Button, Form, Input} from "antd";
import { useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'
import { ArrowLeftOutlined } from "@ant-design/icons";


const Password = () => {

    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const history = useHistory();
  
  
    const onFinish = (values) => {
        console.log("Success:", values);
    setLoading(false)
        
  
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

        <Col md={24} className="t-center">
            <img src={key} alt=""  />
          </Col>
          <Col md={24}>
            <h6 className="welcome-back">Forgot password?</h6>
          </Col>

          <Col md={24}>
            <p className="emailPassword">
            No worries, we’ll send you reset instructions.
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
                label= "Email"
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

    
          
              <Form.Item>
                <Button type="primary" htmlType="submit" block loading={loading}>
                Reset password
                </Button>
              </Form.Item>
            </Form>

            <Row> 
            
            <Col md={24} className="t-center">
                <p onClick={()=>{
                 history.push(`${AUTH_PREFIX_PATH}/login` );
                }}>  <ArrowLeftOutlined /> Back to log in</p>
            </Col>
            </Row>
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default Password