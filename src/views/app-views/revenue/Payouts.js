import React, { useState } from "react";
import { Card, Row, Col,  Table, Tag } from "antd";
import earning from "../../../assets/img/earning.svg";
import payout from "../../../assets/img/payout.svg";
import usePayouts from "queries/usePayouts";
import { formatter } from "services/ApiService";

const Payouts = () => {
  const { data: payouts } = usePayouts();
  const mapPayouts = payouts
    ? payouts.data.payoutsHistory.map((row, i) => ({
        key: i,
        date: new Date(row.createdAt).toDateString(),
        tags: ["Debit"],
        method: ["Paystack"],
        amount:  formatter.format(row.amount ).replace(".00"," "),
        id: row.id,
      }))
    : [];

  const columns = [
    {
      title: "Month",
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
      dataIndex: "method",
      render: (tags, text) => (
        <span>
          {tags.map((tag) => {
            let color;
            let textColor;
            if (tag === "Paystack") {
              color = "#B1E5FC";
              textColor = "#14142B";
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
      title: "Amount withdrawn",
      dataIndex: "amount",
      key: "amount",
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


  const cardHeader = (
    <div>
      <Row>
        <Col md={21} xs={24}>
          <p className="top-rated-color1">Payout history</p>
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
                    <h6 className="rev-amount">
                      {formatter.format(payouts ? payouts.data.currentBal : "246k").replace(".00"," ")}
                    </h6>
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
                    <h6 className="rev-amount">
                      {formatter.format(payouts ? payouts.data.available : "100k").replace(".00"," ")}

                    </h6>
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
              dataSource={mapPayouts}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Payouts;
