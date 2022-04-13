import React from "react";
import { Card, Row, Col } from "antd";
import toatalrev from "../../../assets/img/totalrev.png";
import therapypic from "../../../assets/img/therapypic.png";
import activeuserspic from "../../../assets/img/activeuserspic.png";


import { 
    ArrowUpOutlined,
    ArrowDownOutlined 
  } from '@ant-design/icons';
const dashboard = () => {
  return (
    <div className="dashboard">
      <h3 className="dash-heading"> Dashboard</h3>

      <div>
        <Card bordered={false}>
          <Row>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} className="Card-border">
              <div>
                <Row>
                  <Col span={24}>
                    <img src={toatalrev} alt="revenue" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Total Revenue</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">₦1.28m</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-green">
                    <ArrowUpOutlined />  37.8% <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col  xs={24} sm={12} md={8} lg={8} xl={8}  className="Card-border p-left">
              <div>
                <Row>
                  <Col span={24}>
                    <img src={therapypic} alt="therapy" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Therapy sessions</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">73</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-red">
                    <ArrowDownOutlined />  37.8% <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>



            <Col  xs={24} sm={12} md={8} lg={8} xl={8}  className="p-left">
              <div>
                <Row>
                  <Col span={24}>
                    <img src={activeuserspic} alt="revenue" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Active users</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">645</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-green">
                    <ArrowUpOutlined />  37.8% <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>


          </Row>
        </Card>
      </div>
    </div>
  );
};

export default dashboard;
