import React, { useState } from "react";
import { Card, Row, Col, Input, Table, Button } from "antd";

import more from "../../../assets/img/More.svg";
import comment from "../../../assets/img/Comment.svg";
import { SearchOutlined } from "@ant-design/icons";
import avatar2 from "../../../assets/img/Avatar.svg";

const columns = [
  {
    title: "Therapist",
    dataIndex: "name",
    key: "name",
    render: (text, record) => {
      return (
        <div>
          <Row>
            <Col md={10} xs={24}>
              <img src={avatar2} alt="products" className="product-img" />
            </Col>

            <Col md={14} xs={24}>
              <Row>
                <Col md={24} xs={24}>
                  <p className="top-rated-color1"> {record.name}</p>
                </Col>

                <Col md={24} xs={24}>
                  {/* change it from api  */}
                  <p className="p-message"> {record.name}</p>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      );
    },
  },

  {
    title: "Qualification",
    dataIndex: "Qualification",
    key: "Qualification",
  },

  {
    title: "NPA Registration Number",
    dataIndex: "NPA",
    key: "NPA",
  },

  {
    title: "Action",
    key: "action",
    render: (text, record) => (
      <span>
        <Button size="small" type="primary">
          View
        </Button>
      </span>
    ),
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",

    Qualification: "Doctorate (PhD)",
    NPA: "N4PH12BA2334",
  },
  {
    key: "2",
    name: "Jim Green",

    Qualification: "Doctorate (PhD)",
    NPA: "N4PH12BA2334",
  },
  {
    key: "3",
    name: "Joe Black",

    Qualification: "Doctorate (PhD)",
    NPA: "N4PH12BA2334",
  },

  {
    key: "4",
    name: "Joe Black",
    Qualification: "Doctorate (PhD)",
    NPA: "N4PH12BA2334",
  },

  {
    key: "5",
    name: "Joe Black",

    Qualification: "Doctorate (PhD)",
    NPA: "N4PH12BA2334",
  },

  {
    key: "6",
    name: "Joe Black",

    Qualification: "Doctorate (PhD)",
    NPA: "N4PH12BA2334",
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

const WaitingList = () => {
  const [selectionType] = useState("checkbox");

  const cardHeader1 = (
    <div>
      <Row>
        <Col md={3} xs={24}>
          <p className="top-rated-color1">Therapists</p>
        </Col>

        <Col md={19} xs={24}>
          <Input
            placeholder="Search..."
            prefix={<SearchOutlined className="search-navs" />}
            style={{ width: 300 }}
          />
        </Col>

        <Col md={2} xs={24}>
          <img src={more} alt="more" />
          <img src={comment} alt="more" className="pl-2" />
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      {/* <h3 className="dash-heading pb-5 pt-2"> Waiting List </h3> */}

      <Row>
          <Col md={22}  xs={24}  className="pb-5 pt-2">
          <h3 className="dash-heading"> Waiting List </h3>

          </Col>

          <Col md={2}  xs={24} className="pb-5 pt-3" >
            <Button type="primary" size="small"> Add New</Button>
          </Col>
      </Row>

      <Card title={cardHeader1}>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={data}
        />
      </Card>
    </div>
  );
};

export default WaitingList;
