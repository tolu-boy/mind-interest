import React from "react";
import logo from "../../../../assets/img/logo-login.svg";
import Mailimage from "../../../../assets/img/Mail.svg";
import { Row, Col, Button } from "antd";
import { useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useLocation } from "react-router-dom";

const Mail = () => {
  
  const history = useHistory();
  const location = useLocation();

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
              We sent a password reset link to <br /> 
              {location.state.detail}
            </p>
          </Col>

          <Col md={10} className="centered1">
          <a
                href="https://gmail.com"
                className="youtube social"
              >

<Button type="primary" htmlType="submit" block>
              Open email app
            </Button>
              </a>
           
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
