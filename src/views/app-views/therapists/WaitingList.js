import React, { useState } from "react";
import { Card, Row, Col, Input, Table, Button,Image } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import avatar2 from "../../../assets/img/Avatar.svg";
import { useHistory } from "react-router-dom";
import  useWaitingTherapists from 'queries/useWaitingTherapists'

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

  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false);

  
  const [selectionType] = useState("checkbox");
  const history = useHistory();
  const { data: WaitingTherapits } = useWaitingTherapists(search);
  const mapWaitingTherapits = WaitingTherapits? WaitingTherapits.data.therapists.map((row,i)=>({
    key: i,
    name: row.name,
    Qualification: row.educational_qualification,
    NPA: row.NPA_reg_num,
    id:row.id,
    profile_img : row.profile_img

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
          <Button
            size="small"
            type="primary"
            onClick={() => {
              history.push({
                pathname: `/app/therapists/Profile/${record.id}`,
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
              setLoading(true)
              setSearch(e.target.value)
              setTimeout(() => setLoading(false), 1500)
            }}
          />
        </Col>

       
      </Row>
    </div>
  );

  return (
    <div>
      {/* <h3 className="dash-heading pb-5 pt-2"> Waiting List </h3> */}

      <Row>
        <Col md={22} xs={24} className="pb-5 pt-2">
          <h3 className="dash-heading"> Waiting List </h3>
        </Col>

      
      </Row>

      <Card title={cardHeader1}>
        <Table
          rowSelection={{
            type: selectionType,
            ...rowSelection,
          }}
          columns={columns}
          dataSource={mapWaitingTherapits}
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default WaitingList;
