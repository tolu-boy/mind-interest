import React, { useState } from "react";
import { Card, Row, Col,  Avatar, Button, Table, Tag } from "antd";
import earning from "../../../assets/img/earning.svg";
import payout from "../../../assets/img/payout.svg";
import totalrevenue1 from "../../../assets/img/totalrevenue1.svg";
// import ChartWidget from "components/shared-components/ChartWidget";
import profileImg from "../../../assets/img/thumb-1.jpg";
import useEarning from "queries/useEarning";
import useTherapists from "queries/useTherapists";
import Chart from "react-apexcharts";
import { useHistory } from "react-router-dom";
import { formatter } from "services/ApiService";
import { StarFilled } from "@ant-design/icons";

const Earning = () => {
  const history = useHistory();

  const item = [];
  const { data: earnings } = useEarning();
  const { data: therapist } = useTherapists();

  earnings?.data?.payouts.map((earn) => {
    return item.push(earn);
  });

  earnings?.data?.transactions.map((transaction) => {
    return item.push(transaction);
  });

  const mapEarning = item
    ? item.map((row, i) => ({
        key: i,
        date: new Date(row.createdAt).toDateString(),
        tags: [row.status],
        reference: row.reference,
        amount: formatter.format(row.amount).replace(".00"," "),
      }))
    : [];


const transactionStats =  earnings ? earnings.data.transactions : [];

let transactionStatsArray = transactionStats.map((item)=>{
  return item.createdAt.slice(0,10)
   })


 
   let transactionMap = transactionStatsArray.reduce(function(obj, b) {
    obj[b] = ++obj[b] || 1;
    return obj;
  }, {});



  let transactionLabelsArray =[];
  let transactionValueArray = [];
  const transactionkeys = Object.keys(transactionMap);
  transactionkeys.forEach((key, index) => {
    transactionLabelsArray.push(key)
    transactionValueArray.push(transactionMap[key])  
});


  const columns = [
    {
      title: "Date",
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
            if (tag === "Pending") {
              tag = "Credit";
              color = "#00BA88";
              textColor = "#fff";
            }

            if (!tag) {
              tag = "Debit";
              color = "#F2190D";
              textColor = "#fff";
            }
            return (
              <Tag color={color} style={{ color: textColor }} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </span>
      ),
    },

    {
      title: "Reference number",
      dataIndex: "reference",
      key: "reference",
    },

    {
      title: "Amount",
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
        <Col md={12} xs={24}>
          <p className="top-rated-color1">Revenue</p>
        </Col>

        <Col md={4} xs={24}>
          <p>This month</p>
        </Col>

        <Col md={4} xs={24}>
          <p>All time</p>
        </Col>

        
      </Row>
    </div>
  );

  // const weeklyRevenueData = {
  //   series: [
  //     {
  //       name: "Earning",
  //       data: transactionValueArray,
  //     },
  //   ],
  //   categories: [transactionLabelsArray]
  // };

  const Chartstate = {
    series: [
      {
        name: "Active Therapists",
        data: transactionValueArray.slice(0,8),
      },
  
    ],

   
    options :{
      colors:["#F6CC8D"],
      xaxis:{
        tickPlacement: 'on',
        categories:transactionLabelsArray
      },
     
      
      
      dataLabels: {
        formatter:(val)=>{
          return ''
        }
      },
      chart: {
        toolbar: {
          show: true,
        },
      
      },


    }
  
  };

  const FilterByNameInput = (
    <div>
      <Row>
        <Col md={24} xs={24} sm={24}>
          <h3 className="product-name">Top earning therapists</h3>
        </Col>

        <Col md={18} xs={12} sm={12}>
          <p className="t-rev">Therapist</p>
        </Col>

        <Col md={6} xs={12} sm={12}>
          <p className="t-rev">Earning</p>
        </Col>
      </Row>
    </div>
  );

  return (
    <div>
      <h3 className="dash-heading top-rated-color1 pb-4 pt-2"> Earnings</h3>

      <Card bordered={false}>
        <Row>
          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="Card-border">
            <div>
              <Row>
                <Col span={24}>
                  <img src={earning} alt="revenue" />
                </Col>

                <Col span={24}>
                  <p className="t-rev">Earning</p>
                </Col>
                <Col span={24}>
                  <h6 className="rev-amount">
                    {formatter.format(earnings ? earnings.data.earning : "24000").replace(".00"," ")}

                  </h6>
                </Col>

              </Row>
            </div>
          </Col>

          <Col
            xs={24}
            sm={12}
            md={8}
            lg={8}
            xl={8}
            className="Card-border p-left"
          >
            <div>
              <Row>
                <Col span={24}>
                  <img src={payout} alt="therapy" />
                </Col>

                <Col span={24}>
                  <p className="t-rev">Payout</p>
                </Col>
                <Col span={24}>
                  <h6 className="rev-amount">
                  {formatter.format(earnings ? earnings.data.payout : 74000).replace(".00"," ")}
                  </h6>
                </Col>

               
              </Row>
            </div>
          </Col>

          <Col xs={24} sm={12} md={8} lg={8} xl={8} className="p-left">
            <div>
              <Row>
                <Col span={24}>
                  <img src={totalrevenue1} alt="revenue" />
                </Col>

                <Col span={24}>
                  <p className="t-rev">Total revenue</p>
                </Col>
                <Col span={24}>
                  <h6 className="rev-amount">
                    {formatter.format(earnings ? earnings.data.revenue : "1000000").replace(".00"," ")}

                  </h6>
                </Col>

                
              </Row>
            </div>
          </Col>
        </Row>
      </Card>

      <Row gutter={16}>
        <Col md={16}>
          <Card title={cardHeader}>
            {/* <ChartWidget
              card={false}
              series={weeklyRevenueData.series}
              xAxis={weeklyRevenueData.categories}
              title="Unique Visitors"
              height={250}
              type="bar"
              customOptions={{ colors: "#F6CC8D" }}
              direction={direction}
            /> */}

            <Chart
              options={Chartstate.options}
              series={Chartstate.series}
              type="bar"
              height={300}
              // width= {500}
            />
          </Card>
        </Col>

        <Col md={8}>
          <Card title={FilterByNameInput} bordered={true} className="side-card">
            <Row>
              {therapist
                ? therapist.data.therapists
                    .sort((a, b) => (b.income > a.income ? 1 : -1))
                    .map((item) => (
                      <>
                        <Col md={6} xs={6}>
                          <Avatar src={profileImg} />
                        </Col>

                        <Col md={10} xs={10}>
                          <p className="top-rated-color1">{item.name}</p>
                          {item.rating ? (
                              Array(item.rating)
                                .fill()
                                .map((v, i) => (
                                  <StarFilled className="gold-color " />
                                ))
                            ) : (
                              <li className="mntp-2">No rating avaliable</li>
                            )}
                        </Col>

                        <Col md={8} xs={8} className="mb-4">
                          <p className="top-rated-color2 text-center"> 
                          {formatter.format(item.income).replace(".00"," ")}

                          </p>
                        </Col>
                      </>
                    ))
                    .slice(0, 3)
                : []}

              <Col md={24} xs={24} className="mt-3">
              <Button block onClick={()=>{
                    history.push({
                    pathname: `/app/therapists/Overview`,
                  });
                  }}> All Therapists</Button>              </Col>
            </Row>
          </Card>
        </Col>

        <Col md={24}>
          <Card>
            <Table
              rowSelection={{
                type: selectionType,
                ...rowSelection,
              }}
              columns={columns}
              dataSource={mapEarning}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Earning;
