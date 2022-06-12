import React, { useState } from "react";
import { Card, Row, Col, Input, Table, Tag, Button,Image } from "antd";
import {  SearchOutlined} from "@ant-design/icons";

import avatar2 from "../../../assets/img/Avatar.svg";
import { useHistory } from "react-router-dom";
import useSuspendedTherapists from "queries/useSuspendedTherapists";
import { formatter } from "services/ApiService";

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
};

const Suspended = () => {
  const [search, setSearch] = useState("")
  const [selectionType] = useState("checkbox");
  const history = useHistory();
  const { data: SuspendedTherapists } = useSuspendedTherapists(search);

  const mapSuspendedTherapists = SuspendedTherapists? SuspendedTherapists.data.therapists.map((row,i)=>({
    key: i,
    name: row.name,
    price: formatter.format(row.hourly_rate ).replace(".00", " "),
    Earnings: [ formatter.format(row.balance ).replace(".00", " ")],
    tags: [row.approval_status],
    id:row.id,
    profile_img: row.profile_img

  })) : []; 

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
                {/* <img src={avatar2} alt="products" className="product-img" /> */}
                <Image
                 src={(!record.profile_img || null )? avatar2 : record.profile_img} 
                 width={50}   
                 height={50}
                 preview={false}   
                 alt="products" className="product-img" />
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
      title: "Price",
      dataIndex: "price",
      key: "price",
    },

    {
      title: "Earnings",
      dataIndex: "Earnings",
      key: "Earnings",
      render: (Earnings, text) => (
        <span>
          {Earnings.map((tag) => {
            let color = "#EFEFEF";
            let textColor = "#1A1D1F";
            return (
              <div>
                <Row gutter={16}>
                  <Col md={12} xs={24}>
                    <Tag color={color} style={{ color: textColor }} key={tag}>
                      {tag}
                    </Tag>
                  </Col>

                 
                </Row>
              </div>
            );
          })}
        </span>
      ),
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
                pathname: `/app/therapists/ProfileSuspended/${record.id}`,
              });
            }}
          >
            View
          </Button>
        </span>
      ),
    },
  ];



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
            value= {search}
            onChange= {(e)=>{
              setSearch(e.target.value)
            }}
          />
        </Col>

       
      </Row>
    </div>
  );

  return (
    <div>
      <h3 className="dash-heading pb-5 pt-2"> Suspended</h3>

      <Card title={cardHeader1}>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={mapSuspendedTherapists}
        />
      </Card>
    </div>
  );
};

export default Suspended;
