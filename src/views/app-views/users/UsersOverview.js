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
import useUsers from "queries/useUsers";
import useTransactions from "queries/useTransactions";
import useSessions from "queries/useSessions";


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
  const { data: users } = useUsers();
  const { data: transactions } = useTransactions();
  const { data: sessions } = useSessions();

  const totalAmount = transactions ? transactions.data.totalAmount : 1200000;
  const totalSessions = sessions ? sessions.data.total : 25;
  const totalUsers = users ? users.data.total : 25;

  const mapUsers = users? users.data.users.map((row,i)=>({
    key: i,
    name: row.name,
    phone: row.phone,
    dateJoined: new Date(row.createdAt).toDateString(),
    LatestAcess : new Date(row.updatedAt).toDateString(),
    tags: [row.status]

  })) : []; 
  
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
            if (tag === 0) {
              color = "#DFFFF6";
              textColor = "#00966D";
              tag = "Waiting"
            }
  
            if (tag === 1) {
              color = "#DFFFF6";
              textColor = "#00966D";
              tag = "Active"
            }

            if (tag === 2) {
              color = "#FFED8A";
              textColor = "#AB6C0D";
              tag = "Suspended"

            }
            return (
              <Tag color={color} style={{ color: textColor }} key={tag}>
                {tag  } 
              </Tag>
            );
          })}
        </span>
      ),
    },
    {
      title: "Phone number",
      dataIndex: "phone",
      key: "phone",
    },
  
    {
      title: "Date joined",
      dataIndex: "dateJoined",
      key: "address",
    },
  
    {
      title: "Last access",
      dataIndex: "LatestAcess",
      key: "LatestAcess",
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
                      <p className="rev-amount">₦{totalAmount}</p>
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
                      <p className="rev-amount">{totalUsers}</p>
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
                      <p className="rev-amount">{totalSessions}</p>
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
          dataSource={mapUsers}
        />
      </Card>
    </div>
  );
};

export default UsersOverview;
