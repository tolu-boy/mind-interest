import React, { useState } from "react";
import { Card, Row, Col, Input, Table, Tag,Image,Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import over1 from "../../../assets/img/over1.svg";
import over2 from "../../../assets/img/over2.svg";
import over3 from "../../../assets/img/over3.svg";
import snake1 from "../../../assets/img/snake1.svg";
import snake2 from "../../../assets/img/snake2.svg";
import snake3 from "../../../assets/img/snake3.svg";
import avatar2 from "../../../assets/img/Avatar.svg";
import useUsers from "queries/useUsers";
import useTransactions from "queries/useTransactions";
import useSessions from "queries/useSessions";
import useUsersOverview from "queries/useOverviewUsers";
import { formatter } from "services/ApiService";
import { useHistory } from "react-router-dom";


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
  const [search, setSearch] = useState("")
  const [loading, setLoading] = useState(false);


  const [selectionType] = useState("checkbox");
  const { data: users } = useUsers();
  const { data: overview } = useUsersOverview(search);

  const { data: transactions } = useTransactions();
  const { data: sessions } = useSessions();

  const totalAmount = transactions ? transactions.data.totalAmount : 1200000;
  const totalSessions = sessions ? sessions.data.total : 25;
  const totalUsers = users ? users.data.total : 25;

  const mapUsers = overview? overview.data.users.map((row,i)=>({
    key: i,
    name: row.name,
    phone: row.phone,
    dateJoined: new Date(row.createdAt).toDateString(),
    LatestAcess : new Date(row.updatedAt).toDateString(),
    tags: [row.status],
    profile_img : row.profile_img,
    id : row.id,


  })) : []; 
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
      key: "address",
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
          <Button size="small" type="primary"  onClick={() => {
            history.push({
              pathname: `/app/users/UserProfile/${record.id}`,
              state: { page: "Suspended" },
            });
          }} >
            View
          </Button>
        </span>
      ),
    },
  ];


  const cardHeader = (
    <div>
      <Row>
        <Col md={20} xs={24}>
          <p className="top-rated-color1">Overview </p>
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
            value= {search}
            onChange= {(e)=>{
              setLoading(true)
              setSearch(e.target.value)
              setTimeout(() => setLoading(false), 1500)            }}
          />
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

                <Col md={16} xs={24} className="pt-2 minus5">
                  <p className="top-rated-color1"> Total Revenue</p>
                </Col>

                    <Col md={8} xs={24} className="d-none1">
                      <img src={snake1} alt="over1" />
                    </Col>
                

                <Col md={24} xs={24} className="minus13">
                  <Row>
                    <Col md={16} xs={24}>
                      <p className="rev-amount"> {formatter.format(totalAmount ).replace(".00", " ")} </p>
                    </Col>

                  </Row>
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
          loading={loading}
        />
      </Card>
    </div>
  );
};

export default UsersOverview;
