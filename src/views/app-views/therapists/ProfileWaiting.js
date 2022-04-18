import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowUpOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Card, Row, Col, Button, Select } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";
import Chart from "react-apexcharts";
import avatar2 from "../../../assets/img/Avatar.svg";

const chartState = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },


  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
      
    },

    
    colors: ["#12B76A"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

const ProfileWaiting = () => {
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
      <div className="booking">
        <p>No activity on this profile</p>

        <li> Accept the application, let’s get to saving the world</li>
      </div>
    ),
    Activity: <p>content2</p>,
  };

  const [activeTabKey1, setActiveTabKey1] = useState("Booking");

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
        Therapists / Profile details
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
              <Card title="Overview">
                <Row>
                  <Col md={12}>
                    <p className="PostponedSessions">Postponed sessions</p>
                    <p className="profileOverviewText">0</p>
                  </Col>

                  <Col md={12}>
                    <p className="PostponedSessions">Postponed sessions</p>
                    <p className="profileOverviewText1">0</p>
                  </Col>

                  <Col md={12}>
                    <p className="PostponedSessions">Cancelled sessions</p>
                    <p className="profileOverviewText rev-red">0</p>
                  </Col>

                  <Col md={6} className="mb-4 pb-4">
                    <p className="PostponedSessions">Income</p>
                    <li className="IncomeText">0</li>
                    <li className="incomePercent mt-2">
                      <ArrowUpOutlined /> 37.8%
                    </li>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={12}>
              <Card title={cardHeader}>
                <li className="rev-green">
                  <ArrowUpOutlined /> 100%
                </li>
                <Chart
                  options={chartState.options}
                  series={chartState.series}
                />
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
          <Row gutter={16}>
            <Col md={12}>
              <Button block className="buttonReject">
                Reject
              </Button>
            </Col>

            <Col md={12}>
              <Button block className="buttonAccept">
                Accept
              </Button>
            </Col>

            <Col md={24} className="pt-4">
              <Card title="Profile details">
                <Row>
                  <Col md={20}>
                    <li>Rate:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd"> N20,000</li>
                  </Col>

                  <Col md={20}>
                    <li>Gender:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd"> Male</li>
                  </Col>

                  <Col md={14}>
                    <li>Email:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> festuskingdr@email.com</li>
                  </Col>

                  <Col md={14}>
                    <li>Phone number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> 080123456789</li>
                  </Col>

                  <Col md={14}>
                    <li>Educational qualification:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Doctorate (PhD)</li>
                  </Col>

                  <Col md={14}>
                    <li>Date of registration:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">18/03/2004</li>
                  </Col>

                  <Col md={14}>
                    <li>Category of membership</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Psychology</li>
                  </Col>

                  <Col md={14}>
                    <li>NPA registration number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">H78NA12MP009</li>
                  </Col>

                  <Col md={12}>
                    <li>Full address:</li>
                  </Col>

                  <Col md={12} className="pb-4">
                    <li className="textEnd">
                      23, Lanre Balon Drive, Lekki phase 1. Lagos state. Nigeria
                    </li>
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

export default ProfileWaiting;
