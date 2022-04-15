import React from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Card, Row, Col, Button,Select } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";

const ProfileApproved = () => {

    const { Option } = Select;

    function handleChange(value) {
        console.log(`selected ${value}`);
      }

    const cardHeader = (
        <div>
          <Row>
            <Col md={14} xs={24}>
              <p className="top-rated-color1">Sessions</p>
            </Col>
    
            <Col md={10} xs={24}>
              <Select defaultValue="30 days" onChange={handleChange}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="Yiminghe">yiminghe</Option>
              </Select>
            </Col>
          </Row>
        </div>
      );


  return (
    <div>
      <p className="profile-heading">
        <span className="pr-2">
          <ArrowLeftOutlined />
        </span>
        Therapists / Profile details
      </p>

      <Row className="pt-4">
        <Col md={14}>
          <Row gutter={16}>
            <Col md={24}>
              <Card
                // style={{ width: 600 }}
                cover={<img alt="example" src={background} />}
                className="profileCard"
              >
                <Row>
                  <Col md={5}>
                    <img alt="example" src={profile} className="profilePic" />
                  </Col>

                  <Col md={15}>
                    <li className="proileName"> Dr. Festus King</li>
                    <li className="proileWork pt-2 "> Family counselor</li>
                  </Col>

                  <Col md={3}>
                    <Button type="primary"> Message</Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={12}>
              <Card title='Overview'>
              
               </Card>
            </Col>

            <Col md={12}>
              <Card title={cardHeader}>

              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={8}></Col>
      </Row>
    </div>
  );
};

export default ProfileApproved;
