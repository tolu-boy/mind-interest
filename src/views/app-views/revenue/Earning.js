
import React, { useState } from "react";
import { Card, Row, Col,Select,Avatar,Button,Table,Tag } from "antd";
import earning from "../../../assets/img/earning.svg";
import payout from "../../../assets/img/payout.svg";
import totalrevenue1 from "../../../assets/img/totalrevenue1.svg";
import ChartWidget from "components/shared-components/ChartWidget";
import profileImg from "../../../assets/img/thumb-1.jpg";

import {
  ArrowUpOutlined,
  ArrowDownOutlined,
  StarFilled

} from "@ant-design/icons";


const Earning = () => {

    const columns = [
        {
          title: "Date",
          dataIndex: "dateJoined",
          key: "name",
          render: (text, record) => {
            return (
              <div>
                <Row>
                  
    
                  <Col md={14} xs={24}>
                    <Row>
                      <Col md={24} xs={24} className="pt-3">
                        <p className="top-rated-color1"> {record.dateJoined}</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            );
          },
        },
    
        {
          title: "Status",
          key: "tags",
          dataIndex: "tags",
          render: (tags, text) => (
            <span>
              {tags.map((tag) => {
                let color;
                let textColor;
                if (tag === "Credit") {
                  color = "#00BA88";
                  textColor = "#fff";
                }
    
                if (tag === "Debit") {
                  color = "#F2190D";
                  textColor = "#fff";
                }
                return (
                  <Tag color={color} style={{ color: textColor }} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </span>
          ),
        },
    
        {
          title: "Reference number",
          dataIndex: "age",
          key: "address",
        },
    

    
        {
          title: "Amount",
          dataIndex: "Earnings",
          key: "Ratings",
        },
    
      ];
    
      const data = [
        {
          key: "1",
          name: "John Brown",
          age: "080123456789",
          address: "New York No. 1 Lake Park",
          tags: ["Debit"],
          Earnings: [89999],
          Ratings: [4.8],
          dateJoined: "23 Jan 2022",
        },
        {
          key: "2",
          name: "Jim Green",
          age: "080123456789",
          address: "London No. 1 Lake Park",
          tags: ["Credit"],
          Earnings: [89999],
          Ratings: [4.5],
          dateJoined: "23 Jan 2022",
        },
        {
          key: "3",
          name: "Joe Black",
          age: "080123456789",
          address: "Sidney No. 1 Lake Park",
          tags: ["Debit"],
          Earnings: [89999],
          Ratings: [4.7],
          dateJoined: "23 Jan 2022",
        },
    
        {
          key: "4",
          name: "Joe Black",
          age: "080123456789",
          address: "Sidney No. 1 Lake Park",
          tags: ["Credit"],
          Earnings: [89999],
          Ratings: [4.7],
          dateJoined: "23 Jan 2022",
        },
    
        {
          key: "5",
          name: "Joe Black",
          age: "080123456789",
          address: "Sidney No. 1 Lake Park",
          tags: ["Credit"],
          Earnings: [89999],
          Ratings: [4.7],
          dateJoined: "23 Jan 2022",
        },
    
        {
          key: "6",
          name: "Joe Black",
          age: "080123456789",
          address: "Sidney No. 1 Lake Park",
          tags: ["Debit"],
          Earnings: [89999],
          Ratings: [4.7],
          dateJoined: "23 Jan 2022",
        },
      ];
    
      const rowSelection = {
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(
            `selectedRowKeys: ${selectedRowKeys}`,
            "selectedRows: ",
            selectedRows
          );
        },
      };

      const [selectionType] = useState("checkbox");
  


  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const cardHeader = (
    <div>
      <Row>
        <Col md={12} xs={24}>
          <p className="top-rated-color1">Revenue</p>
        </Col>

        <Col md={4} xs={24}>
          <p >This month</p>
        </Col>


        <Col md={4} xs={24}>
          <p >All time</p>
        </Col>


        <Col md={4} xs={24}>
          <Select defaultValue="Last 7 days" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>
      </Row>
    </div>
  );

  const weeklyRevenueData = {
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
          <h3 className="product-name">Top earning therapists</h3>
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


  return (
    <div>

    <h3 className="dash-heading top-rated-color1 pb-4 pt-2"> Earnings</h3>

    <Card bordered={false}>
          <Row>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} className="Card-border">
              <div>
                <Row>
                  <Col span={24}>
                    <img src={earning} alt="revenue" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Earning</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">₦246k</h6>
                  </Col>

                  <Col span={24}>
                    <p className="earning-green">
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
                    <img src={payout} alt="therapy" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Payout</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">₦984k</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-red">
                      <ArrowDownOutlined /> 37.8%
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
                    <img src={totalrevenue1} alt="revenue" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Total revenue</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">₦1.23m</h6>
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
          </Row>
        </Card>

        <Row gutter={16}>
            <Col md={16}>

            <Card title={cardHeader}>

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

            <Col md={8}>

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


            <Col md={24}>
            <Card >
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </Card>
            

            </Col>
        </Row>


    </div>
  )
}

export default Earning