import React, { useState } from "react";
import { Card, Row, Col,  Input, Table, Tag, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import more from "../../../assets/img/More.svg";
import comment from "../../../assets/img/Comment.svg";
import avatar2 from "../../../assets/img/Avatar.svg";
import { useHistory } from "react-router-dom";

const UsersSuspended = () => {
  const history = useHistory();

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

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Button
          size="small"
          type="primary"
          onClick={() => {
            history.push({
              pathname: "/app/users/UserSuspendedProfile",
            });
          }}
        >
          View
        </Button>
      ),
    },
  ];

  const data = [
    {
      key: "1",
      name: "John Brown",
      age: "080123456789",
      address: "New York No. 1 Lake Park",
      tags: ["Suspended"],
      Earnings: [89999],
      Ratings: [4.8],
      dateJoined: "23 Jan 2022",
    },
    {
      key: "2",
      name: "Jim Green",
      age: "080123456789",
      address: "London No. 1 Lake Park",
      tags: ["Suspended"],
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

  const [selectionType] = useState("checkbox");

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
      <h3 className="dash-heading pt-3  pb-4">Suspended</h3>

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

export default UsersSuspended;
