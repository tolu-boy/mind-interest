import React, { useState } from "react";
import { Card, Row, Col,  Input, Table, Tag, Button,Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import more from "../../../assets/img/More.svg";
import comment from "../../../assets/img/Comment.svg";

import avatar2 from "../../../assets/img/Avatar.svg";
import { useHistory } from "react-router-dom";
import useActiveUsers from "queries/useActiveUsers";
import { APP_PREFIX_PATH } from 'configs/AppConfig'

const UsersActive = () => {
  const [search, setSearch] = useState("")
  const history = useHistory();
  const { data: activeUsers } = useActiveUsers(search);

  const mapActiveUsers = activeUsers ? activeUsers.data.users.map((row,i)=>({
    key: i,
    name: row.name,
    phone: row.phone,
    dateJoined: new Date(row.createdAt).toDateString(),
    LatestAcess : new Date(row.updatedAt).toDateString(),
    tags: [row.status],
    id : row.id,
    profile_img : row.profile_img 

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
                <Image
                 src={(!record.profile_img || null )? avatar2 : record.profile_img} 
                 width={50}   
                 preview={false}   
                 alt="products" className="product-img" />
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
              tag = "Active"
            }
  
      
            if (tag === 1) {
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
      key: "dateJoined",
    },

    {
      title: "Last access",
      dataIndex: "LatestAcess",
      key: "LatestAcess",
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button
            size="small"
            type="primary"
            onClick={() => {
              history.push({
                pathname: `${APP_PREFIX_PATH }/users/UserProfile/${record.id}`,
                state: { page: "Active" },
              });
            }}
          >
            View
          </Button>
        </span>
      ),
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
            value= {search}
            onChange= {(e)=>{
              setSearch(e.target.value)
            }}
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
      <h3 className="dash-heading pt-3 pb-4">Active</h3>

      <Card title={cardHeader1}>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={mapActiveUsers}
        />
      </Card>
    </div>
  );
};

export default UsersActive;
