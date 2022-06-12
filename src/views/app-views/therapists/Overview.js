import React, { useState } from "react";
import { Card, Row, Col, Input, Table, Tag,Image } from "antd";
import { SearchOutlined} from "@ant-design/icons";

import over1 from "../../../assets/img/over1.svg";
import over2 from "../../../assets/img/over2.svg";
import over3 from "../../../assets/img/over3.svg";
import snake1 from "../../../assets/img/snake1.svg";
import snake2 from "../../../assets/img/snake2.svg";
import snake3 from "../../../assets/img/snake3.svg";
import avatar2 from "../../../assets/img/Avatar.svg";
import useTransactions from "queries/useTransactions";
import useSearch from   "queries/useSearch";
import usePayouts from "queries/usePayouts";
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

const Overview =  () => {
  


  const [selectionType] = useState("checkbox");
  const [search, setSearch] = useState("")


  const { data: therapists } = useSearch(search);
  const { data: transactions } = useTransactions();
  const { data: payouts } = usePayouts();

  const totalAmount = transactions ? transactions.data.totalAmount : 1200000;
  const totalPayout = payouts ? payouts.data.payoutsTotalAmount: 1200
  let mapTherapist = therapists? therapists.data.therapists.map((row,i)=>({
    key: i,
    name: row.name,
    specialty: row.specialty,
    price:  formatter.format(row.hourly_rate).replace(".00", " "),
    Earnings: [formatter.format(row.balance ).replace(".00", " ") ],
    tags: [row.approval_status],
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
                    <p className="p-message"> {record.specialty}</p>
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
  
    // {
    //   title: "Sessions",
    //   dataIndex: "schedule",
    //   key: "schedule",
    // },
  
    // {
    //   title: "Ratings",
    //   dataIndex: "Ratings",
    //   key: "Ratings",
    //   render: (Ratings, text) => (
    //     <span>
    //       {Ratings.map((tag) => {
    //         let color = "#00BA88";
    //         let textColor = "#ffff";
    //         return (
    //           <div>
    //             <Row>
    //               <Col span={24}>
    //                 <Tag color={color} style={{ color: textColor }} key={tag}>
    //                   <StarFilled /> {tag}
    //                 </Tag>
    //               </Col>
    //             </Row>
    //           </div>
    //         );
    //       })}
    //     </span>
    //   ),
    // },
  
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

  const cardHeader = (
    <div>
      <Row>
        <Col md={20} xs={24}>
          <p className="top-rated-color1">Overview</p>
        </Col>

       
      </Row>
    </div>
  );

  const cardHeader1 = (
    <div>
      <Row>
        <Col md={3} xs={24}>
          <p className="top-rated-color1">Overview</p>
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
                      <p className="rev-amount"> {formatter.format(totalAmount).replace('.00'," ")}</p>
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

                <Col md={16} xs={24} className="pt-2 minus5">
                  <p className="top-rated-color1"> Therapists</p>
                </Col>

                <Col md={8} xs={24} className="d-none1">
                      <img src={snake2} alt="over1" />
                    </Col>

                <Col md={24} xs={24} className="minus13">
                  <Row>
                    <Col md={16}>
                      <p className="rev-amount">65</p>
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

                <Col md={16} xs={24} className="pt-2 minus5">
                  <p className="top-rated-color1"> Payouts</p>
                </Col>

                <Col md={8} xs={24} className="d-none1">
                      <img src={snake3} alt="over1" />
                    </Col>

                <Col md={24} xs={24} className="minus13">
                  <Row>
                    <Col md={16} xs={24}>
                      <p className="rev-amount"> {formatter.format(totalPayout).replace('.00'," ")}</p>
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
          dataSource={mapTherapist}
        />
      </Card>
    </div>
  );
};

export default Overview;
