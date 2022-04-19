import React, { useState } from "react";
import { Card, Row, Col, Select,  Button, Table, Tag } from "antd";
import earning from "../../../assets/img/earning.svg";
import payout from "../../../assets/img/payout.svg";

import fees from "../../../assets/img/fees.svg";


const Statements = () => {
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

    {
        title: "Fees",
        dataIndex: "Ratings",
        key: "Ratings",
        render: (text, record) => {
            return (
              <div>
                <Row>
                  <Col md={14} xs={24}>
                    <Row>
                      <Col md={24} xs={24} className="pt-3">
                        <p className="rev-red"> -{record.Ratings}.20</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            );
          },
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
        <Col md={16} xs={24}>
          <p className="top-rated-color1">Transactions</p>
        </Col>

   
        <Col md={4} xs={24}>
          <Select defaultValue="Last 30 days" onChange={handleChange}>
            <Option value="jack">Jack</Option>
            <Option value="lucy">Lucy</Option>
            <Option value="Yiminghe">yiminghe</Option>
          </Select>
        </Col>

        <Col md={4} xs={24}>
          <Button type="primary"> Download Csv</Button>
        </Col>
      </Row>
    </div>
  );

 
  return (
    <div>
      <h3 className="dash-heading top-rated-color1 pb-4 pt-2"> Statements</h3>

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
                  <h6 className="rev-amount">₦246,889</h6>
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
                  <p className="t-rev">Paid out</p>
                </Col>
                <Col span={24}>
                  <h6 className="rev-amount">₦984,789</h6>
                </Col>
              </Row>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="p-left">
            <div>
              <Row>
                <Col span={24}>
                  <img src={fees} alt="revenue" />
                </Col>

                <Col span={24}>
                  <p className="t-rev">Fees</p>
                </Col>
                <Col span={24}>
                  <h6 className="rev-amount">₦5,338.98</h6>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Card>

      <Row gutter={16}>
       

        <Col md={24}>
          <Card title={cardHeader}>
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
  );
};

export default Statements;
