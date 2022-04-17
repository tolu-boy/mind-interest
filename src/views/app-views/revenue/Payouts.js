import React, { useState } from "react";
import { Card, Row, Col, Select, Avatar, Button, Table, Tag } from "antd";
import earning from "../../../assets/img/earning.svg";
import payout from "../../../assets/img/payout.svg";

const Payouts = () => {
  const columns = [
    {
      title: "Month",
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
            if (tag === "Paid") {
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
      title: "Method",
      dataIndex: "Method",
      render: (tags, text) => (
        <span>
          {tags.map((tag) => {
            let color;
            let textColor;
            if (tag === "Paystack") {
              color = "#B1E5FC";
              textColor = "#14142B";
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
      title: "Earnings",
      dataIndex: "Earnings",
      key: "Ratings",
    },

    {
      title: "Amount withdrawn",
      dataIndex: "age",
      key: "Ratings",
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: "080123456789",
      address: "New York No. 1 Lake Park",
      tags: ["Paid"],
      Earnings: [89999],
      Ratings: [4.8],
      dateJoined: "23 Jan 2022",
      Method: ["Paystack"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: "080123456789",
      address: "London No. 1 Lake Park",
      tags: ["Paid"],
      Earnings: [89999],
      Ratings: [4.5],
      dateJoined: "23 Jan 2022",
      Method: ["Paystack"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: "080123456789",
      address: "Sidney No. 1 Lake Park",
      tags: ["Paid"],
      Earnings: [89999],
      Ratings: [4.7],
      dateJoined: "23 Jan 2022",
      Method: ["Paystack"],
    },

    {
      key: "4",
      name: "Joe Black",
      age: "080123456789",
      address: "Sidney No. 1 Lake Park",
      tags: ["Paid"],
      Earnings: [89999],
      Ratings: [4.7],
      dateJoined: "23 Jan 2022",
      Method: ["Paystack"],
    },

    {
      key: "5",
      name: "Joe Black",
      age: "080123456789",
      address: "Sidney No. 1 Lake Park",
      tags: ["Paid"],
      Earnings: [89999],
      Ratings: [4.7],
      dateJoined: "23 Jan 2022",
      Method: ["Paystack"],
    },

    {
      key: "6",
      name: "Joe Black",
      age: "080123456789",
      address: "Sidney No. 1 Lake Park",
      tags: ["Paid"],
      Earnings: [89999],
      Ratings: [4.7],
      dateJoined: "23 Jan 2022",
      Method: ["Paystack"],
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
        <Col md={21} xs={24}>
          <p className="top-rated-color1">Payout history</p>
        </Col>

        <Col md={3} xs={24}>
          <Select defaultValue="All time" onChange={handleChange}>
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
      <h3 className="dash-heading top-rated-color1 pb-4 pt-2"> Payouts</h3>

      <Card bordered={false} title="Current balance">
        <Row>
          <Col xs={24} md={8} className="Card-border">
            <Row className="pt-3">
              <Col md={5} className="pt-3">
                <img src={earning} alt="revenue" />
              </Col>

              <Col md={12}>
                <Row>
                  <Col md={24}>
                    <li className="t-rev"> Current account balance</li>
                  </Col>

                  <Col md={24}>
                    <h6 className="rev-amount">₦246k</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>

          <Col xs={24} md={8} className="Card-border pl-3">
            <Row className="pt-3">
              <Col md={5} className="pt-3">
                <img src={payout} alt="revenue" />
              </Col>

              <Col md={12}>
                <Row>
                  <Col md={24}>
                    <li className="t-rev"> Available for withdrawal</li>
                  </Col>

                  <Col md={24}>
                    <h6 className="rev-amount">₦0.00</h6>
                  </Col>
                </Row>
              </Col>
            </Row>
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

export default Payouts;
