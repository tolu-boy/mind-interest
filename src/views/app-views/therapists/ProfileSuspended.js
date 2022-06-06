import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  ArrowUpOutlined,
  ArrowRightOutlined,
  ExclamationCircleTwoTone
} from "@ant-design/icons";
import { Card, Row, Col, Button, Select,notification,Modal,Image } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";
import Chart from "react-apexcharts";
import avatar2 from "../../../assets/img/Avatar.svg";
import useSingleTherapist from "queries/useSingleTherapist";
import { useParams ,useHistory} from "react-router-dom";
import ApiService from "services/ApiService";
const chartState = {
  series: [
    {
      name: "Desktops",
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
    },
  ],
  options: {
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: ["#12B76A"],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
      ],
    },
  },
};

const ProfileSuspended = () => {
  const { Option } = Select;
  const param = useParams();
  const history = useHistory();


  const { data: SingleTherapist } = useSingleTherapist(param.id);
  let Therapist = SingleTherapist?.data.therapist ?? "";

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);

  

  const handleOk = async () => {
  setConfirmLoading(true);
  await ApiService.acceptTherapist(param.id)
  setConfirmLoading(false);
  setVisible(false)
  openNotificationWithIcon("success");
  history.push(`/app/therapists/ProfileApproved/${param.id}`);

  };

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setVisible(false);
  };
  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: "Restore Therapist",
      description: `The Therapist has been Restored`,
    });
  };

  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const tabList = [
    {
      key: "Booking",
      tab: "Booking",
    },
    {
      key: "Activity",
      tab: "Activity",
    },
  ];

  const contentList = {
    Booking: (
      <div>
        <Row>
          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
            
          </Col>

          <Col md={17} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={4} className="pt-2 mb-3">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={17} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={4} className="pt-2 mb-3">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={17} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={4} className="pt-2 mb-3">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={17} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={4} className="pt-2 mb-3">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>
        </Row>
      </div>
    ),
    Activity: <p>content2</p>,
  };

  const [activeTabKey1, setActiveTabKey1] = useState("Booking");

  const cardHeader = (
    <div>
      <Row>
        <Col md={14} xs={24}>
          <p className="top-rated-color1">Sessions</p>
        </Col>

        <Col md={10} xs={24}>
          <Select defaultValue="30 days" onChange={handleChange}>
            <Option value="jack"> 5 days</Option>

          </Select>
        </Col>
      </Row>
    </div>
  );

  const cardHeader1 = (
    <div>
      <Row>
        <Col md={24} xs={24}>
          <Select defaultValue="30 days" onChange={handleChange}>
            <Option value="jack"> 5 days</Option>

          </Select>
        </Col>
      </Row>
    </div>
  );

  const deleteTitle = (
    <div>
      <Row>
        <Col span={2}>
          <ExclamationCircleTwoTone twoToneColor="#ffc53d" />
        </Col>
        <Col span={12}>
          <p>Restore Therapist</p>
        </Col>
      </Row>
    </div>
  );


  return (
    <div>

<Modal
        title={deleteTitle}
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p> Are you sure you want to Restore this Therapist ?</p>
      </Modal>
      <p className="profile-heading">
        <span className="pr-2">
          <ArrowLeftOutlined />
        </span>
        Therapists / Profile details
      </p>

      <Row className="pt-4" gutter={24}>
        <Col md={14}>
          <Row gutter={16}>
            <Col md={24}>
              <Card
                // style={{ width: 600 }}
                cover={<img alt="example" src={background} />}
                className="profileCard"
              >
                <Row>
                  <Col md={5}>
                    <Image
                 src={(!Therapist.profile_img || null )? profile : Therapist.profile_img} 
                 width={50}   
                 height={50}
                 preview={false}   
                 alt="products" className="product-img" />
                  </Col>

                  <Col md={15}>
                    <li className="proileName"> {Therapist.name} </li>
                    <li className="proileWork pt-2 "> {Therapist.specialty}</li>
                  </Col>

                  <Col md={3}>
                    <Button type="primary"> Message</Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={12}>
              <Card title="Overview">
                <Row>
                  <Col md={12}>
                    <p className="PostponedSessions">Postponed sessions</p>
                    <p className="profileOverviewText">30</p>
                  </Col>

                  <Col md={12}>
                    <p className="PostponedSessions">Postponed sessions</p>
                    <p className="profileOverviewText1">12</p>
                  </Col>

                  <Col md={12}>
                    <p className="PostponedSessions">Cancelled sessions</p>
                    <p className="profileOverviewText rev-red">7</p>
                  </Col>

                  <Col md={6} className="mb-4 pb-4">
                    <p className="PostponedSessions">Income</p>
                    <li className="IncomeText">₦460k</li>
                    <li className="incomePercent mt-2">
                      <ArrowUpOutlined /> 37.8%
                    </li>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={12}>
              <Card title={cardHeader}>
                <li className="rev-green">
                  <ArrowUpOutlined /> 100%
                </li>
                <Chart
                  options={chartState.options}
                  series={chartState.series}
                />
              </Card>
            </Col>

            <Col md={24}>
              <Card
                tabBarExtraContent={cardHeader1}
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={(key) => {
                  onTab1Change(key);
                }}
                actions={[<ArrowLeftOutlined />, <ArrowRightOutlined />]}
              >
                {contentList[activeTabKey1]}
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={10}>
          <Row>
            <Col md={24}>
              <Button className="buttonAccept" block onClick={()=>{
               setVisible(true)

              }}>
                Restore
              </Button>
            </Col>



            <Col md={24} className="pt-4">
              <Card title="Profile details">
                <Row>
                  <Col md={20}>
                    <li>Rate:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd"> N{Therapist.hourly_rate}</li>
                  </Col>

                  <Col md={20}>
                    <li>Gender:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd"> {Therapist.gender}</li>
                  </Col>

                  <Col md={14}>
                    <li>Email:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> {Therapist.email}</li>
                  </Col>

                  <Col md={14}>
                    <li>Phone number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> {Therapist.phone}</li>
                  </Col>

                  <Col md={14}>
                    <li>Educational qualification:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">{Therapist.educational_qualification}</li>
                  </Col>

                  <Col md={14}>
                    <li>Date of registration:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">{Therapist.date_of_first_registration}</li>
                  </Col>

                  <Col md={14}>
                    <li>Category of membership</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">{Therapist.date_of_first_registration}</li>
                  </Col>

                  <Col md={14}>
                    <li>NPA registration number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">{Therapist.NPA_reg_num}</li>
                  </Col>

                  <Col md={12}>
                    <li>Full address:</li>
                  </Col>

                  <Col md={12} className="pb-4">
                    <li className="textEnd">
                    {Therapist.address}
                    </li>
                  </Col>

                  <Col md={24} className="pb-4">
                    <hr className="border1" />
                  </Col>

                  <Col md={24} className="pb-4">
                    <h4> Account details</h4>
                  </Col>

                  <Col md={14}>
                    <li>Membership:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Therapist</li>
                  </Col>

                  <Col md={14}>
                    <li>Status:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd rev-green">Active</li>
                  </Col>

                  <Col md={14}>
                    <li>Approved date:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">13 Jan 2022</li>
                  </Col>

                  <Col md={24} className="pb-4">
                    <hr className="border1" />
                  </Col>

                  <Col md={24} className="pb-4">
                    <h4> Activity and Device</h4>
                  </Col>

                  <Col md={14}>
                    <li>Last seen:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">2 hours ago</li>
                  </Col>

                  <Col md={14}>
                    <li>Sessions:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd rev-green">34</li>
                  </Col>

                  <Col md={14}>
                    <li>Operating system:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">Android 11</li>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default ProfileSuspended;
