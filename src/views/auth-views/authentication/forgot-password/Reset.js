import React from "react";
  import logo from "../../../../assets/img/logo-login.svg";
import Mailimage from "../../../../assets/img/tick2.svg";
import { Row, Col, Button} from "antd";
import { useHistory } from "react-router-dom";
import { AUTH_PREFIX_PATH } from "configs/AppConfig";
import { ArrowLeftOutlined } from "@ant-design/icons";

const Reset = () => {
  
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
            <h6 className="welcome-back">Password reset</h6>
          </Col>

          <Col md={24}>
            <p className="emailPassword">
            Your password has been successfully reset.  <br/> Click below to log in magically.            </p>
          </Col>

          <Col md={10} className="centered1">
            <Button type="primary" htmlType="submit" block onClick={()=>{
                 history.push(`${AUTH_PREFIX_PATH}/login` );
                }}>
            Continue
            </Button>
          </Col>

          


          <Col md={24} className="t-center pt-3">
                <p onClick={()=>{
                 history.push(`${AUTH_PREFIX_PATH}/login` );
                }}>  <ArrowLeftOutlined /> Back to log in</p>
            </Col>
        </Row>
      </section>
    </div>
  );
};

export default Reset;
