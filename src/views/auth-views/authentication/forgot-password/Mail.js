import React from "react";
import logo from "../../../../assets/img/logo-login.svg";
import Mailimage from "../../../../assets/img/Mail.svg";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import { ArrowLeftOutlined } from "@ant-design/icons";
const Mail = () => {
  
  const history = useHistory();


  return (
    <div>
      <div className="pt-3 pl-4">
        <img src={logo} alt="" />
      </div>
      <section className="login-page">
        <Row>
          <Col md={24} className="t-center">
            <img src={Mailimage} alt="" />
          </Col>
          <Col md={24}>
            <h6 className="welcome-back">Check your email</h6>
          </Col>

          <Col md={24}>
            <p className="emailPassword">
              We sent a password reset link to <br /> olivia@untitledui.com
            </p>
          </Col>

          <Col md={10} className="centered1">
            <Button type="primary" htmlType="submit" block>
              Open email app
            </Button>
          </Col>

          <Col md={24} className="centered1 t-center">
              <p> Didn’t receive the email? <span className="forgot-password" onClick={()=>{
              history.push(`${AUTH_PREFIX_PATH}/forgot-password`);

              }}> Click to resend</span></p>
          </Col>


          <Col md={24} className="t-center">
                <p onClick={()=>{
                 history.push(`${AUTH_PREFIX_PATH}/login` );
                }}>  <ArrowLeftOutlined /> Back to log in</p>
            </Col>
        </Row>
      </section>
    </div>
  );
};

export default Mail;
