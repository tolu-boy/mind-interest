import React from "react";
import { Card, Row, Col, Image, Button,Avatar } from "antd";
import toatalrev from "../../../assets/img/totalrev.png";
import therapypic from "../../../assets/img/therapypic.png";
import activeuserspic from "../../../assets/img/activeuserspic.png";
import refundImg from "../../../assets/img/refund-img.png";
import avatar from "../../../assets/img/Avatar.svg";
import dot from "../../../assets/img/Dot1.svg";
// import profileImg from "../../../assets/img/thumb-1.jpg";
import useTransactions from "queries/useTransactions";
import useSessions from "queries/useSessions";
import useRefunds from "queries/useRefunds";
import useTherapists from "queries/useTherapists";
import useActiveTherapists from "queries/useActiveTherapists";
import Chart from "react-apexcharts";
import { formatter } from "services/ApiService";
import { useHistory } from "react-router-dom";
import { StarFilled } from "@ant-design/icons";

const FilterByNameInput = (
  <div>
    <Row>
      <Col md={24} xs={24} sm={24}>
        <h3 className="product-name">Most Recent Therapists</h3>
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

const Dashboard = () => {
  // other apis used on the page
  const { data: transactions } = useTransactions();
  const { data: sessions } = useSessions();
  const { data: refunds } = useRefunds();
  //Active therapists
  const { data: ApprovedTherapists } = useActiveTherapists();

  const totalAmount = transactions ? transactions.data.totalAmount : 1200000;
  const totalSessions = sessions ? sessions.data.total : 25;
  const totalRefunds = refunds ? refunds.data.total : 25;
  const totalActiveUsers = ApprovedTherapists
    ? ApprovedTherapists.data.total
    : 25;

  // therapists
  const { data: therapists } = useTherapists();
  const therapistStats = therapists ? therapists.data.therapists : [];

  let therapistsArray = therapistStats.map((item) => {
    return item.createdAt.slice(0, 10);
  });

  var map = therapistsArray.reduce(function (obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});

  let labelsArray = [];
  let valueArray = [];
  const keys = Object.keys(map);
  keys.forEach((key, index) => {
    labelsArray.push(key);
    valueArray.push(map[key]);
  });

  const Chartstate = {
    series: [
      {
        name: "Active Therapists",
        data: valueArray.slice(0,8),
      },
    ],

    options: {
      colors: ["#F6CC8D"],
      xaxis: {
        tickPlacement: "on",
        categories: labelsArray,
      },

      dataLabels: {
        formatter: (val) => {
          return "";
        },
      },
      chart: {
        toolbar: {
          show: true,
        },
      },
    },
  };

  const history = useHistory();
  return (
    <div className="dashboard">
      <h3 className="dash-heading"> Dashboard</h3>

      <div>
        <Card 
        // bordered={false}
         className="pb-3">
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
                    <h6 className="rev-amount">
                 
                      {formatter.format(totalAmount).replace(".00", " ")}
                    </h6>
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
                    <h6 className="rev-amount"> {totalSessions}</h6>
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
                    <h6 className="rev-amount">{totalActiveUsers}</h6>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>

        <Row>
          <Col md={16} xs={24}>
            <Card title="Active therapists">
              <Chart
                options={Chartstate.options}
                series={Chartstate.series}
                type="bar"
                at
                height={300}
                // width= {500}
              />
            </Card>
          </Col>

          <Col md={8} xs={24} className="p-left2">
            <Card
              title={FilterByNameInput}
              // bordered={true}
              className="side-card"
            >
              <Row >
                {therapists ? (
                  <>
                    {therapists.data.therapists
                      .sort((a, b) => (b.income > a.income ? 1 : -1))
                      .map((item,i) => (
                        <Col md={24}  key={i}>
                        <Row >
                          <Col md={6} xs={6} >
                            <Image
                              src={
                                !item.profile_img || null
                                  ? avatar
                                  : item.profile_img
                              }
                              width={50}
                              height={50}
                              preview={false}
                              alt="products"
                              className="product-img"
                            />
                          </Col>

                          <Col md={10} xs={10}>
                            <p className="top-rated-color1">{item.name}</p>
                            {item.rating ? (
                              Array(item.rating)
                                .fill()
                                .map((v, i) => (
                                  <StarFilled className="gold-color " key={i} />
                                ))
                            ) : (
                              <li className="mntp-2" key={i} >No rating avaliable</li>
                            )}
                          </Col>

                          <Col md={8} xs={8} className="pb-4">
                            <p className="top-rated-color2 text-center">
                              {formatter
                                .format(item.income)
                                .replace(".00", " ")}
                            </p>
                          </Col>
                          </Row>
                        </Col>
                      ))
                      .slice(0, 3)
                      }
                  </>
                ) : (
                  <div> No therapist avaliable </div>
                )}

                <Col md={24} xs={24} className="mt-3">
                  <Button
                    block
                    onClick={() => {
                      history.push({
                        pathname: `/app/therapists/Overview`,
                      });
                    }}
                  >
               
                    All Therapists
                  </Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={16}>
            <Card title="Recent activities">
              <Row>
                {sessions ? (
                  <>
                    {sessions?.data.sessions
                      .slice(0, 10)
                      .reverse()
                      .map((item,i) => (
                        <Col span={12} className="pb-3"   key={i}  >
                          <Row>
                            <Col span={4}>
                              <Image
                                src={
                                  !item.user_profile_img || null
                                    ? avatar
                                    : item.user_profile_img
                                }
                                width={50}
                                height={50}
                                preview={false}
                                alt="products"
                                className="product-img"
                              />
                            </Col>

                            <Col span={17}>
                              <p className="top-rated-color1">
                                {item.user}
                                <span className="p-message">
                             
                                  {new Date(item.createdAt).toDateString()}
                                </span>
                              </p>
                              <p>
                                had a session with
                                <span className="gold-color">
                             
                                  Dr. {item.therapist}
                                </span>
                              </p>
                            </Col>

                            <Col span={3}>
                              <img src={dot} alt="" />
                            </Col>
                          </Row>
                        </Col>
                      ))}
                  </>
                ) : (
                  <div> No Recent activity </div>
                )}
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
                    You have {totalRefunds} open refund requests to action. This includes 8
                    new requests. 👀
                  </p>
                </Col>

                <Col span={24} className="pt-2 pb-3">
                  <Button block onClick={()=>{
                    history.push('/app/revenue/Earning')
                  }}> Review refund requests </Button>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
