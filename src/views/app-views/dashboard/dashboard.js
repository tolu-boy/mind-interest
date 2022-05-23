import React from "react";
import { Card, Row, Col, Avatar, Button } from "antd";
import toatalrev from "../../../assets/img/totalrev.png";
import therapypic from "../../../assets/img/therapypic.png";
import activeuserspic from "../../../assets/img/activeuserspic.png";
import refundImg from "../../../assets/img/refund-img.png";
import avatar from "../../../assets/img/Avatar.svg";
import dot from "../../../assets/img/Dot1.svg";
import {
  ArrowUpOutlined,
  ArrowDownOutlined,

} from "@ant-design/icons";
import profileImg from "../../../assets/img/thumb-1.jpg";
import useTransactions from "queries/useTransactions";
import useSessions from "queries/useSessions";
import useRefunds from "queries/useRefunds";
import useTherapists from "queries/useTherapists";
import useApprovedTherapists from "queries/useApprovedTherapits";
import Chart from "react-apexcharts";




const FilterByNameInput = (
  <div>
    <Row>
      <Col md={24} xs={24} sm={24}>
        <h3 className="product-name">Most Recent Therapists</h3>
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



const Dashboard = () => {
  const { data: transactions } = useTransactions();
  const { data: sessions } = useSessions();
  const { data: refunds } = useRefunds();
  const { data: therapists } = useTherapists();
  const { data: ApprovedTherapists } = useApprovedTherapists();
 
  const totalAmount = transactions ? transactions.data.totalAmount : 1200000;
  const totalSessions = sessions ? sessions.data.total : 25;
  const totalRefunds = refunds ? refunds.data.total : 25;
  const totalActiveUsers = ApprovedTherapists ? ApprovedTherapists.data.total : 25;  
  var  months = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



  const Chartstate = {
    series: [
      {
        name: "Active Therapists",
        data: therapists ? therapists.data.therapists.map(x=> new Date(x.createdAt).getMonth()) :[],
      },
  
    ],

   
    options :{
      colors:["#F6CC8D"],
      xaxis:{
        tickPlacement: 'on',
        categories:therapists ? therapists.data.therapists.map(x=>x.name) :[]
      },
      yaxis: {
        labels: {
          formatter: function(value) {
            return months[value]
          
          }
        }
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

  return (
    <div className="dashboard">
      <h3 className="dash-heading"> Dashboard</h3>

      <div>
        <Card bordered={false}>
          <Row>
            <Col xs={24} sm={12} md={8} lg={8} xl={8} className="Card-border">
              <div>
                <Row>
                  <Col span={24}>
                    <img src={toatalrev} alt="revenue" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Total Revenue</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">₦ {totalAmount}</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-green">
                      <ArrowUpOutlined /> 37.8%
                      <span className="rev-normal"> this week</span>
                    </p>
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
                    <img src={therapypic} alt="therapy" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Therapy sessions</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount"> {totalSessions}</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-red">
                      <ArrowDownOutlined /> 37.8%
                      <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>

            <Col xs={24} sm={12} md={8} lg={8} xl={8} className="p-left">
              <div>
                <Row>
                  <Col span={24}>
                    <img src={activeuserspic} alt="revenue" />
                  </Col>

                  <Col span={24}>
                    <p className="t-rev">Active users</p>
                  </Col>
                  <Col span={24}>
                    <h6 className="rev-amount">{totalActiveUsers}</h6>
                  </Col>

                  <Col span={24}>
                    <p className="rev-green">
                      <ArrowUpOutlined /> 37.8%
                      <span className="rev-normal"> this week</span>
                    </p>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card>

        <Row>
          <Col md={16} xs={24}>
       

            <Card title='Active therapists'>
            <Chart
              options={Chartstate.options}
              series={Chartstate.series}
              type="bar"
              height={300}
              // width= {500}
            />
          </Card>
          </Col>

          <Col md={8} xs={24} className="p-left2">
            <Card
              title={FilterByNameInput}
              bordered={true}
              className="side-card"
            >
              <Row>
              {(therapists) ? <>
               {therapists.data.therapists.slice(0,3).map((item)=>(
                 < >
                <Col md={6} xs={6}>
                  <Avatar src={profileImg} />
                </Col>

                <Col md={10} xs={10}>
                  <p className="top-rated-color1">{item.name}</p>
                 
                </Col>

                <Col md={8} xs={8} className="pb-2">
                  <p className="top-rated-color2"> N{item.last_dues}</p>
                </Col>
                </>

               ))}
               </> : <div> No therapist avaliable </div>}

              
               

                <Col md={24} xs={24} className="mt-3">
                  <Button block> All Therapists</Button>
                </Col>
              </Row>
            </Card>
          </Col>

          <Col span={16}>
            <Card title="Recent activities">
              <Row>
              {(sessions) ? <>
                { sessions?.data.sessions.map(() => (
                  <Col span={12}  className="pb-3">
                    <Row>
                      <Col span={4}>
                        <img src={avatar} alt="" />
                      </Col>

                      <Col span={17}>
                        <p className="top-rated-color1">
                          Demi Wikinson
                          <span className="p-message"> 2 mins ago</span>
                        </p>
                        <p>
                          Is in session with
                          <span className="gold-color"> Dr. Festus King</span>
                        </p>
                      </Col>

                      <Col span={3}>
                        <img src={dot} alt="" />
                      </Col>
                    </Row>
                  </Col>
                ))}
              </> :
               <div> No Recent activity </div>}
             
              </Row>
            </Card>
          </Col> 



          <Col md={8} xs={24} className="p-left2">
            <Card title="Refund requests">
              <Row>
                <Col span={6}>
                  <Avatar src={refundImg} />
                </Col>

                <Col span={18}>
                  <p>
                    You have {totalRefunds} open refund requests to action. This includes 8
                    new requests. 👀
                  </p>
                </Col>

                <Col span={24} className="pt-2 pb-3">
                  <Button block> Review refund requests </Button>
                </Col>
              </Row>
            </Card>
          </Col>


          
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;
