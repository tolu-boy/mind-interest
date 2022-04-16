import React, { useState } from "react";
import { Card, Row, Col, Select, Input, Table, Tag } from "antd";
import { ArrowUpOutlined, SearchOutlined } from "@ant-design/icons";

import over1 from "../../../assets/img/over1.svg";
import over2 from "../../../assets/img/over2.svg";
import over3 from "../../../assets/img/over3.svg";
import more from "../../../assets/img/More.svg";
import comment from "../../../assets/img/Comment.svg";

import snake1 from "../../../assets/img/snake1.svg";
import snake2 from "../../../assets/img/snake2.svg";
import snake3 from "../../../assets/img/snake3.svg";
import avatar2 from "../../../assets/img/Avatar.svg";

const columns = [
  {
    title: "Users",
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
                <Col md={24} xs={24} className="pt-3">
                  <p className="top-rated-color1"> {record.name}</p>
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
          if (tag === "Active") {
            color = "#DFFFF6";
            textColor = "#00966D";
          }

          if (tag === "Suspended") {
            color = "#FFED8A";
            textColor = "#AB6C0D";
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
    title: "Phone number",
    dataIndex: "age",
    key: "address",
  },

  {
    title: "Date joined",
    dataIndex: "dateJoined",
    key: "address",
  },

  {
    title: "Last access",
    dataIndex: "dateJoined",
    key: "Ratings",
  },

  // {
  //   title: "Action",
  //   key: "action",
  //   render: (text, record) => (
  //     <span>
  //       <Button size="small" type="primary">
  //         View
  //       </Button>
  //     </span>
  //   ),
  // },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: "080123456789",
    address: "New York No. 1 Lake Park",
    tags: ["Active"],
    Earnings: [89999],
    Ratings: [4.8],
    dateJoined: "23 Jan 2022",
  },
  {
    key: "2",
    name: "Jim Green",
    age: "080123456789",
    address: "London No. 1 Lake Park",
    tags: ["Active"],
    Earnings: [89999],
    Ratings: [4.5],
    dateJoined: "23 Jan 2022",
  },
  {
    key: "3",
    name: "Joe Black",
    age: "080123456789",
    address: "Sidney No. 1 Lake Park",
    tags: ["Suspended"],
    Earnings: [89999],
    Ratings: [4.7],
    dateJoined: "23 Jan 2022",
  },

  {
    key: "4",
    name: "Joe Black",
    age: "080123456789",
    address: "Sidney No. 1 Lake Park",
    tags: ["Suspended"],
    Earnings: [89999],
    Ratings: [4.7],
    dateJoined: "23 Jan 2022",
  },

  {
    key: "5",
    name: "Joe Black",
    age: "080123456789",
    address: "Sidney No. 1 Lake Park",
    tags: ["Suspended"],
    Earnings: [89999],
    Ratings: [4.7],
    dateJoined: "23 Jan 2022",
  },

  {
    key: "6",
    name: "Joe Black",
    age: "080123456789",
    address: "Sidney No. 1 Lake Park",
    tags: ["Suspended"],
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

const UsersOverview = () => {
  const [selectionType] = useState("checkbox");

  const { Option } = Select;

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const cardHeader = (
    <div>
      <Row>
        <Col md={20} xs={24}>
          <p className="top-rated-color1">Overview </p>
        </Col>

        <Col md={4} xs={24}>
          <Select defaultValue="This week" onChange={handleChange}>
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
        <Col md={3} xs={24}>
          <p className="top-rated-color1">Users</p>
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
      <h3 className="dash-heading">Overview</h3>

      <Card title={cardHeader}>
        <Row gutter={16}>
          <Col md={8}>
            <Card className="overview-card1">
              <Row>
                <Col md={24} xs={24}>
                  <img src={over1} alt="over1" />
                </Col>

                <Col md={24} xs={24} className="pt-2 minus5">
                  <p className="top-rated-color1"> Total Revenue</p>
                </Col>

                <Col md={24} xs={24} className="minus13">
                  <Row>
                    <Col md={16} xs={24}>
                      <p className="rev-amount">₦1.28m</p>
                    </Col>
                    <Col md={8} xs={24} className="d-none1">
                      <img src={snake1} alt="over1" />
                    </Col>
                  </Row>
                </Col>

                <Col md={10} xs={24}>
                  <p className="rev-green usersTextBackground">
                    <ArrowUpOutlined /> 37.8%
                    <span className="rev-normal"> this week</span>
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="overview-card2">
              <Row>
                <Col md={24} xs={24}>
                  <img src={over2} alt="over2" />
                </Col>

                <Col md={24} xs={24} className="pt-2 minus5">
                  <p className="top-rated-color1"> Users</p>
                </Col>

                <Col md={24} xs={24} className="minus13">
                  <Row>
                    <Col md={16}>
                      <p className="rev-amount">4,000</p>
                    </Col>
                    <Col md={8} className="d-none1">
                      <img src={snake2} alt="over1" />
                    </Col>
                  </Row>
                </Col>

                <Col md={10} xs={24}>
                  <p className="rev-red usersTextBackground">
                    <ArrowUpOutlined /> 37.8%
                    <span className="rev-normal"> this week</span>
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col md={8} className="">
            <Card className="overview-card3">
              <Row>
                <Col md={24} xs={24}>
                  <img src={over3} alt="over3" />
                </Col>

                <Col md={24} xs={24} className="pt-2 minus5">
                  <p className="top-rated-color1"> Therapy sessions</p>
                </Col>

                <Col md={24} xs={24} className="minus13">
                  <Row>
                    <Col md={16} xs={24}>
                      <p className="rev-amount">73</p>
                    </Col>
                    <Col md={8} className="d-none1">
                      <img src={snake3} alt="over3" />
                    </Col>
                  </Row>
                </Col>

                <Col md={10} xs={24}>
                  <p className="rev-green usersTextBackground">
                    <ArrowUpOutlined /> 37.8%
                    <span className="rev-normal"> this week</span>
                  </p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Card>

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

export default UsersOverview;
