import React, { useState } from "react";
import { Card, Row, Col, Select, Button, Table, Tag } from "antd";
import earning from "../../../assets/img/earning.svg";
import payout from "../../../assets/img/payout.svg";
import fees from "../../../assets/img/fees.svg";
import useStatements from "queries/useStatements";

const Statements = () => {
  const { data: statements } = useStatements();
  const item = [];

  statements?.data?.payouts.map((earn) => {
    return item.push(earn);
  });

  statements?.data?.transactions.map((transaction) => {
    return item.push(transaction);
  });

  const mapStatement = item
    ? item.map((row, i) => ({
        key: i,
        date: new Date(row.createdAt).toDateString(),
        tags: [row.status],
        refrence: row.reference,
        amount: row.amount,
        fees: statements.data.fee,
      }))
    : [];

  // console.log(item);
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
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
            if (tag === "Pending") {
              tag = "Debit";
              color = "#F2190D";
              textColor = "#fff";
            }

            if (!tag) {
              tag = "sale";
              color = "#00BA88";

              textColor = "#fff";
            }
            return (
              <Tag color={color} style={{ color: textColor }} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ),
    },

    {
      title: "Reference number",
      dataIndex: "refrence",
      key: "refrence  ",
    },

    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
    },

    {
      title: "Fees",
      dataIndex: "fees",
      key: "fees",
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
                  <h6 className="rev-amount">
                    ₦{statements ? statements.data.payoutsTotalAmount : "45000"}
                  </h6>
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
                  <h6 className="rev-amount">
                    ₦
                    {statements
                      ? statements.data.transactionsTotalAmount
                      : "45000"}
                  </h6>
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
              dataSource={mapStatement}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Statements;
