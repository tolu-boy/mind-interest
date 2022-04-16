import React, { useState } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Card, Row, Col, Button, Select } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";
import avatar2 from "../../../assets/img/Avatar.svg";

const UserActiveProfile = () => {
  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const tabList = [
    {
      key: "Booking",
      tab: "Booking",
    },
    {
      key: "Activity",
      tab: "Activity",
    },
  ];

  const contentList = {
    Booking: (
      <div>
        <Row>
          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked rev-red"> Session cancelled</li>
            <li className="sessionTime pt-2"> 12:56 pm</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked gold-color ">Session Postponed</li>
            <li className="sessionTime pt-2"> 12 Feb 2022</li>
          </Col>
        </Row>
      </div>
    ),
    Activity: (
      <div>
        <Row>
          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              failed login attempt, verification code incorrect
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 30 minutes ago</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              failed login attempt, verification code incorrect
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 30 minutes ago</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              failed card payment
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 30 minutes ago</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              received a notification
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 13 Feb 2022</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              received a notification
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 13 Feb 2022</li>
          </Col>
        </Row>
      </div>
    ),
  };

  const [activeTabKey1, setActiveTabKey1] = useState("Booking");

  const cardHeader1 = (
    <div>
      <Row>
        <Col md={24} xs={24}>
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
        User / Profile details
      </p>

      <Row className="pt-4" gutter={24}>
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
                    <li className="proileName"> Emeka Chuks</li>
                  </Col>

                  <Col md={3}>
                    <Button type="primary"> Message</Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={24}>
              <Card
                tabBarExtraContent={cardHeader1}
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={(key) => {
                  onTab1Change(key);
                }}
                actions={[<ArrowLeftOutlined />, <ArrowRightOutlined />]}
              >
                {contentList[activeTabKey1]}
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={10}>
          <Row>
            <Col md={24}>
              <Button type="danger" block>
                Suspend
              </Button>
            </Col>

            <Col md={24} className="pt-4">
              <Card title="Profile details">
                <Row>
            
                  <Col md={20}>
                    <li>Gender:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd"> Male</li>
                  </Col>

                

                  <Col md={14}>
                    <li>Phone number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> 080123456789</li>
                  </Col>

                  <Col md={14}>
                    <li>Relationship status:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Single</li>
                  </Col>

                  <Col md={14}>
                    <li>Parenthood:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">None</li>
                  </Col>

                  <Col md={14}>
                    <li>Age group:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">24 - 34</li>
                  </Col>

                  <Col md={14}>
                    <li>How often I need to talk:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Pretty often</li>
                  </Col>

                 

                  <Col md={24} className="pb-4">
                    <hr className="border1" />
                  </Col>

                  <Col md={24} className="pb-4">
                    <h4> Account details</h4>
                  </Col>

                  <Col md={14}>
                    <li>Membership:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Therapist</li>
                  </Col>

                  <Col md={14}>
                    <li>Status:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd rev-green">Active</li>
                  </Col>

                  <Col md={14}>
                    <li>Approved date:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">13 Jan 2022</li>
                  </Col>

                  <Col md={24} className="pb-4">
                    <hr className="border1" />
                  </Col>

                  <Col md={24} className="pb-4">
                    <h4> Activity and Device</h4>
                  </Col>

                  <Col md={14}>
                    <li>Last seen:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">2 hours ago</li>
                  </Col>

                  <Col md={14}>
                    <li>Sessions:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd rev-green">34</li>
                  </Col>

                  <Col md={14}>
                    <li>Operating system:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Android 11</li>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default UserActiveProfile;
