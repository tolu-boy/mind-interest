import React from "react";
import { Card, Row, Col, Avatar, Button } from "antd";
import toatalrev from "../../../assets/img/totalrev.png";
import therapypic from "../../../assets/img/therapypic.png";
import activeuserspic from "../../../assets/img/activeuserspic.png";
import ChartWidget from "components/shared-components/ChartWidget";
import refundImg from "../../../assets/img/refund-img.png";
import avatar from "../../../assets/img/Avatar.svg";
import dot from "../../../assets/img/Dot1.svg";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  StarFilled,
} from "@ant-design/icons";
import profileImg from "../../../assets/img/thumb-1.jpg";

export const weeklyRevenueData = {
  series: [
    {
      name: "Earning",
      data: [45, 52, 38, 24, 33, 26, 21],
    },
  ],
  categories: [
    "08 Jul",
    "09 Jul",
    "10 Jul",
    "11 Jul",
    "12 Jul",
    "13 Jul",
    "14 Jul",
  ],
};

const FilterByNameInput = (
  <div>
    <Row>
      <Col md={24} xs={24} sm={24}>
        <h3 className="product-name">Top Rated Therapist</h3>
      </Col>

      <Col md={18} xs={12} sm={12}>
        <p className="t-rev">Therapist</p>
      </Col>

      <Col md={6} xs={12} sm={12}>
        <p className="t-rev">Earning</p>
      </Col>
    </Row>
  </div>
);

const FilterByNameInput1 = (
  <div>
    <Row>
      <Col span={18}>
        <p className="p-message">
          Welcome <span className="top-rated-color1"> 87 users</span> with a
          <br />
          personal message{" "}
        </p>
      </Col>

      <Col span={6}>
        <Button> Send Message </Button>
      </Col>
    </Row>
  </div>
);

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
                      <ArrowUpOutlined /> 37.8%
                      <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col
              xs={24}
              sm={12}
              md={8}
              lg={8}
              xl={8}
              className="Card-border p-left"
            >
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
                      <ArrowDownOutlined /> 37.8%{" "}
                      <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8} className="p-left">
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
                      <ArrowUpOutlined /> 37.8%{" "}
                      <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>

        <Row>
          <Col md={16} xs={24}>
            <Card title="Active therapists" bordered={false}>
              <ChartWidget
                card={false}
                series={weeklyRevenueData.series}
                xAxis={weeklyRevenueData.categories}
                title="Unique Visitors"
                height={250}
                type="bar"
                customOptions={{ colors: "#F6CC8D" }}
                // direction={direction}
              />
            </Card>
          </Col>

          <Col md={8} xs={24} className="p-left2">
            <Card
              title={FilterByNameInput}
              bordered={true}
              className="side-card"
            >
              <Row>
                <Col md={6} xs={6}>
                  <Avatar src={profileImg} />
                </Col>

                <Col md={10} xs={10}>
                  <p className="top-rated-color1">Dr. Festus King</p>
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                </Col>

                <Col md={8} xs={8} className="">
                  <p className="top-rated-color2"> N56,648.60</p>
                </Col>

                <Col md={6} xs={6}>
                  <Avatar src={profileImg} />
                </Col>

                <Col md={10} xs={10}>
                  <p className="top-rated-color1">Dr. Festus King</p>
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                </Col>

                <Col md={8} xs={8} className="">
                  <p className="top-rated-color2"> N 56,648.60</p>
                </Col>

                <Col md={6} xs={6}>
                  <Avatar src={profileImg} />
                </Col>

                <Col md={10} xs={10}>
                  <p className="top-rated-color1">Dr. Festus King</p>
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                  <StarFilled className="gold-color" />
                </Col>

                <Col md={8} xs={8} className="mt-2">
                  <p className="top-rated-color2"> N 56,648.60</p>
                </Col>

                <Col md={24} xs={24} className="mt-3">
                  <Button block> All Therapists</Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={16} xs={24}>
            <Card title={FilterByNameInput1} className="personal-message">
              <Row>
                <Col span={6} className="">
                  <Avatar src={profileImg} />

                  <br />
                  <p className="top-rated-color1 pt-2"> Gladys</p>
                </Col>

                <Col span={6}>
                  <Avatar src={profileImg} />
                  <p className="top-rated-color1 pt-2"> Gladys</p>
                </Col>

                <Col span={6}>
                  <Avatar src={profileImg} />
                  <p className="top-rated-color1 pt-2"> Gladys</p>
                </Col>

                <Col span={6} className="p-left2">
                  <Avatar src={profileImg} />

                  <p className="top-rated-color1 pt-2"> Gladys</p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={8} xs={24} className="p-left2">
            <Card title="Refund requests">
              <Row>
                <Col span={6}>
                  <Avatar src={refundImg} />
                </Col>

                <Col span={18}>
                  <p>
                    You have 52 open refund requests to action. This includes 8
                    new requests. 👀
                  </p>
                </Col>

                <Col span={24} className="pt-2 pb-3">
                  <Button block> Review refund requests </Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={24}>
            <Card title="Recent activities">
              <Row>
                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      {/* <Avatar src={avatar} /> */}
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      {/* <Avatar src={avatar} /> */}
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      {/* <Avatar src={avatar} /> */}
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      {/* <Avatar src={avatar} /> */}
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>

                <Col span={12} className="pb-3">
                  <Row>
                    <Col span={3}>
                      <img src={avatar} alt="" />
                    </Col>

                    <Col span={17}>
                      <p className="top-rated-color1">
                        Demi Wikinson
                        <span className="p-message"> 2 mins ago</span>
                      </p>
                      <p>
                        Is in session with
                        <span className="gold-color"> Dr. Festus King</span>
                      </p>
                    </Col>

                    <Col span={3}>
                      <img src={dot} alt="" />
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default dashboard;
