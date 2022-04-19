import React from "react";
import { Card, Row, Col, Select, Avatar, Button } from "antd";
import {
  COLOR_1,
  COLOR_TEXT,
  COLOR_2,
  COLOR_4,

  COLOR_4_LIGHT,
} from "constants/ChartConstant";
import Chart from "react-apexcharts";

import { Line, Doughnut } from "react-chartjs-2";
import { ArrowUpOutlined } from "@ant-design/icons";
import profileImg from "../../../assets/img/thumb-1.jpg";
import left1 from "../../../assets/img/left1.svg";
import refundImg from "../../../assets/img/refund-img.png";
import phone1 from "../../../assets/img/phone1.svg";
import phone2 from "../../../assets/img/phone2.svg";
import avatar from "../../../assets/img/Avatar.svg";

const Statistics = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "false",
        data: [70, 59, 80, 50, 70, 55, 100],
        fill: false,
        backgroundColor: "transparent",
        borderColor: COLOR_1,
        pointBackgroundColor: COLOR_1,
        pointHoverBackgroundColor: "#FFD88D",
        pointHoverBorderColor: "#FFD88D",
      },
    ],
  };
  const options = {
    responsive: true,
    hover: {
      mode: "nearest",
      intersect: true,
    },
    tooltips: {
      mode: "index",
    },

    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: [
            {
              display: false,
            },
          ],
          ticks: {
            display: true,
            fontColor: COLOR_TEXT,
            fontSize: 13,
            padding: 10,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            drawTicks: false,
            borderDash: [3, 4],
            zeroLineWidth: 1,
            zeroLineBorderDash: [3, 4],
          },
          ticks: {
            display: true,
            max: 100,
            stepSize: 20,
            fontColor: COLOR_TEXT,
            fontSize: 13,
            padding: 10,
          },
        },
      ],
    },
  };

  const Chartstate = {
    series: [
      {
        name: "Google",
        data: [44, 55, 41, 67, 22, 43],
      },
      {
        name: "Snapchat",
        data: [13, 23, 20, 8, 13, 27],
      },

      {
        name: "Word of mouth",
        data: [11, 17, 15, 15, 21, 14],
      },

      {
        name: "IG or Facebook",
        data: [11, 17, 15, 15, 21, 14],
      },

      {
        name: "Other",
        data: [11, 17, 15, 15, 21, 14],
      },
    ],
    options: {

        dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },

      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
        zoom: {
          enabled: true,
        },
      },
      colors: ["#3F91F5", "#FFBC99", "#B1E5FC", "#CABDFF", "#FFD88D"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: "bottom",
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
        },
      },
      xaxis: {
        categories: [
          "Google",
          "Snapchat",
          "Word of mouth",
          "IG or Facebook",
          "Other",
        ],
      },
      
      fill: {
        opacity: 1,
      },
    },
  };

  const data1 = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Series A",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        backgroundColor: "transparent",
        borderColor: COLOR_1,
        pointBackgroundColor: COLOR_1,
        pointHoverBackgroundColor: COLOR_1,
        pointHoverBorderColor: COLOR_1,
      },
      {
        label: "Series B",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        backgroundColor: "transparent",
        borderColor: COLOR_2,
        pointBackgroundColor: COLOR_2,
        pointHoverBackgroundColor: COLOR_2,
        pointHoverBorderColor: COLOR_2,
      },

      {
        label: "Series c",
        data: [48, 58, 10, 29, 36, 77, 60],
        fill: false,
        backgroundColor: "transparent",
        borderColor: COLOR_4,
        pointBackgroundColor: COLOR_4,
        pointHoverBackgroundColor: COLOR_4,
        pointHoverBorderColor: COLOR_4_LIGHT,
      },
    ],
  };
  const options1 = {
    responsive: true,
    hover: {
      mode: "nearest",
      intersect: true,
    },
    tooltips: {
      mode: "index",
    },

    legend: {
      display: false,
    },
    scales: {
      xAxes: [
        {
          gridLines: [
            {
              display: false,
            },
          ],
          ticks: {
            display: true,
            fontColor: COLOR_TEXT,
            fontSize: 13,
            padding: 10,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            drawBorder: false,
            drawTicks: false,
            borderDash: [3, 4],
            zeroLineWidth: 1,
            zeroLineBorderDash: [3, 4],
          },
          ticks: {
            display: true,
            max: 100,
            stepSize: 20,
            fontColor: COLOR_TEXT,
            fontSize: 13,
            padding: 10,
          },
        },
      ],
    },
  };

  const data2 = {
    labels: ["Download Sales", "In-Store Sales", "Mail Sales"],
    datasets: [
      {
        data: [40, 60],
        backgroundColor: ["#8E59FF", "#F4BF6F"],
        pointBackgroundColor: ["#8E59FF", "#F4BF6F"],
      },
    ],
  };

  const options2 = {
    responsive: true,

    legend: {
      display: false,
    },
  };




  const data3 = {
    labels: ["New User", "Returning user"],

    datasets: [
      {
        data: [30, 70],
        backgroundColor: ["#B5E4CA", "#3F91F5"],
        pointBackgroundColor: ["#8E59FF", "#F4BF6F"],
      },
    ],
  };

  const options3 = {
    responsive: true,

    legend: {
      position: 'bottom',
    },
  };

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const cardHeader = (
    <div>
      <Row>
        <Col md={19} xs={24}>
          <p className="top-rated-color1">Revenue</p>
        </Col>

        <Col md={5} xs={24}>
          <Select defaultValue="Last 28 days" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );

  const Traffic = (
    <div>
      <Row>
        <Col md={19} xs={24}>
          <p className="top-rated-color1">Traffic channel</p>
        </Col>

        <Col md={5} xs={24}>
          <Select defaultValue="Last 7 days" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );

  const ActiveUsers = (
    <div>
      <Row>
        <Col md={19} xs={24}>
          <p className="top-rated-color1">Active users</p>
        </Col>

        <Col md={5} xs={24}>
          <Select defaultValue="Last 7 days" onChange={handleChange}>
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
      <h3 className="dash-heading pt-3 pb-4">Statistics</h3>
      <Row gutter={16}>
        <Col md={16}>
          <Card title={cardHeader}>
            <Row>
              <Col md={24}>
                <h3 className="dash-heading"> 4,079 users</h3>
              </Col>

              <Col span={24}>
                <p className="rev-green">
                  <ArrowUpOutlined /> 37.8%
                  <span className="rev-normal"> vs. Jan 8, 2022</span>
                </p>
              </Col>
            </Row>

            <Line data={data} options={options} />

            <Row className="pt-4" gutter={24}>
              <Col md={19}>
                <p className="">
                  Welcome
                  <span className="top-rated-color1">
                    18 new users <br />
                  </span>
                  with a personal message 😎
                </p>
              </Col>

              <Col span={4} className="pb-5">
                <Button> Send Message</Button>
              </Col>

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
                <Avatar src={left1} />

                <p className="top-rated-color1 pt-2"> View all</p>
              </Col>
            </Row>
          </Card>

          <Card title={Traffic}>
            <Chart
              options={Chartstate.options}
              series={Chartstate.series}
              type="bar"
              height={300}
            />
          </Card>

          <Card title={ActiveUsers}>
            <Line data={data1} options={options1} />
          </Card>
        </Col>

        <Col md={8}>
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

          <Card title="Top device">
            <Doughnut
              data={data2}
              options={options2}
              width={228}
              height={228}
            />

            <Row className="pt-3">
              <Col md={12} className="pl-2">
                <img src={phone1} alt="" />
                <li className="pt-2">ios</li>
                <li className="top-rated-color-1"> 40%</li>
              </Col>

              <Col md={12}>
                <img src={phone2} alt="" />
                <li className="pt-2">Andriod</li>
                <li className="top-rated-color-1"> 60%</li>
              </Col>
            </Row>
          </Card>

          <Card title="Message">
            <Row gutter={16}>
              <Col md={4}>
                <img src={avatar} alt="" />
              </Col>

              <Col md={16} className="pb-5">
                <li> Winnifred</li>

                <li> Message goes here 😊</li>
              </Col>

              <Col md={4} className="pb-3">
                <li> 30 m</li>
              </Col>

              <Col md={4}>
                <img src={avatar} alt="" />
              </Col>

              <Col md={16} className="pb-5">
                <li> Winnifred</li>

                <li> Message goes here 😊</li>
              </Col>

              <Col md={4} className="pb-3">
                <li> 30 m</li>
              </Col>

              <Col md={4}>
                <img src={avatar} alt="" />
              </Col>

              <Col md={16} className="pb-5">
                <li> Winnifred</li>

                <li> Message goes here 😊</li>
              </Col>

              <Col md={4}>
                <li> 30 m</li>
              </Col>

              <Col md={24} className="pb-3">
                <Button block> View all message </Button>
              </Col>
            </Row>
          </Card>


          <Card title='New customer'>

          <Doughnut
              data={data3}
              options={options3}
              width={228}
              height={228}
            />
          
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statistics;