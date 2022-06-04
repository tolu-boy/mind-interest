
import React, { useState} from "react";
import { ArrowLeftOutlined, ArrowRightOutlined ,ExclamationCircleTwoTone } from "@ant-design/icons";
import { Card, Row, Col, Button, Select,notification,Modal } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";
import avatar2 from "../../../assets/img/Avatar.svg";
import { useLocation  ,useParams} from "react-router-dom";
import useSingleUser from "queries/useSingleUser";
import ApiService from "services/ApiService";



const UserProfile = () => {
  const { Option } = Select;
  const location = useLocation();
  const param = useParams();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [confirmLoading1, setConfirmLoading1] = useState(false);
  const [userProfile, setUserProfile] = useState(location.state.page)

  const { data: SingleUser } = useSingleUser(param.id);
  let user = SingleUser?.data.user ?? "";

 
  function handleChange(value) {
    console.log(`selected ${value}`);
  }


  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const tabListe = [
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

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked rev-red"> Session cancelled</li>
            <li className="sessionTime pt-2"> 12:56 pm</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>

          <Col md={3}>
            <img src={avatar2} alt="products" className="product-img" />
          </Col>

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked gold-color ">Session Postponed</li>
            <li className="sessionTime pt-2"> 12 Feb 2022</li>
          </Col>
        </Row>
      </div>
    ),
    Activity: (
      <div>
        <Row>
          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              failed login attempt, verification code incorrect
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 30 minutes ago</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              failed login attempt, verification code incorrect
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 30 minutes ago</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              failed card payment
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 30 minutes ago</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              received a notification
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 13 Feb 2022</li>
          </Col>

          <Col md={20}>
            <li>
              <span className="sessionTime top-rated-color1"> Emeka</span>{" "}
              received a notification
            </li>
          </Col>

          <Col md={4} className=" mb-5">
            <li className="sessionTime  "> 13 Feb 2022</li>
          </Col>
        </Row>
      </div>
    ),
  };

  const [activeTabKey1, setActiveTabKey1] = useState("Booking");

  const handleOk = async () => {
    setConfirmLoading(true);
    await ApiService.SuspendUsers(param.id)
    setConfirmLoading(false);
    setVisible(false)
    openNotificationWithIcon("success");
    setUserProfile('Suspended')
    location.state.page = 'Suspended'
    };
  
    const handleCancel = () => {
      console.log("Clicked cancel button");
      setVisible(false);
    };
    const openNotificationWithIcon = (type) => {
      notification[type]({
        message: "Suspend User",
        description: `The user has been suspended`,
      });
    };


    const handleOk1 = async () => {
        setConfirmLoading1(true);
        await ApiService.ActivateUsers(param.id)
        setConfirmLoading1(false);
        setVisible1(false)
        openNotificationWithIcon1("success");
        setUserProfile('Active')
        location.state.page = 'Active'

        };
      
        const handleCancel1 = () => {
          console.log("Clicked cancel button");
          setVisible1(false);
        };
        const openNotificationWithIcon1 = (type) => {
          notification[type]({
            message: "Activate User",
            description: `The user has been activated`,
          });
        };

        // useEffect(() => {
        
        // handleOk()
        // }, [])
        

  const cardHeader1 = (
    <div>
      <Row>
        <Col md={24} xs={24}>
          <Select defaultValue="30 days" onChange={handleChange}>
            <Option value="jack">10 days</Option>
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
          <p>Suspend user</p>
        </Col>
      </Row>
    </div>
  );

  const deleteTitle1 = (
    <div>
      <Row>
        <Col span={2}>
          <ExclamationCircleTwoTone twoToneColor="#ffc53d" />
        </Col>
        <Col span={12}>
          <p>Activate user</p>
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
        <p> Are you sure you want to suspend this user ?</p>
      </Modal>

      <Modal
        title={deleteTitle1}
        visible={visible1}
        onOk={handleOk1}
        confirmLoading={confirmLoading1}
        onCancel={handleCancel1}
      >
        <p> Are you sure you want to suspend this user ?</p>
      </Modal>
      <p className="profile-heading">
        <span className="pr-2">
          <ArrowLeftOutlined />
        </span>
        User / Profile details
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
                    <img alt="example" src={profile} className="profilePic" />
                  </Col>

                  <Col md={15}>
                    <li className="proileName">{user.name}</li>
                  </Col>

                  <Col md={3}>
                    <Button type="primary"> Message</Button>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={24}>
              <Card
                tabBarExtraContent={cardHeader1}
                tabList={tabListe}
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
          {user.status === 0 && (
            <Col md={24}>
              <Button type="danger" block onClick={()=>{
               setVisible(true)

              }}>
                Suspend
              </Button>
            </Col>
          )}

          {user.status === 1 && (
            <Col md={24}>
              <Button className="buttonAccept" block onClick={()=>{
                setVisible1(true)
              }}>
                Restore
              </Button>
            </Col>
          )}
            

            <Col md={24} className="pt-4">
              <Card title="Profile details">
                <Row>
            
                  <Col md={20}>
                    <li>Gender:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd"> {user.gender ? user.gender : 'Male'}</li>
                  </Col>

                

                  <Col md={14}>
                    <li>Phone number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> {user.phone ? user.phone : '09088656567'}</li>
                  </Col>

                  <Col md={14}>
                    <li>Relationship status:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                    {user.relationship_status ? user.relationship_status : 'Single'}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Parenthood:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> {user.parental_status ? user.parental_status : 'None'} </li>
                  </Col>

                  <Col md={14}>
                    <li>Age group:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> {user.age_range ? user.age_range : '24 - 34'}</li>
                  </Col>

                  <Col md={14}>
                    <li>How often I need to talk:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd"> {user.need_to_talk? user.need_to_talk : 'Pretty often'}</li>
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
                    <li className="textEnd">User</li>
                  </Col>

                  <Col md={14}>
                    <li>Status:</li>
                  </Col>
                  
                  {user.status === 0 && (
                    <Col md={10} className="pb-4">
                    <li className="textEnd rev-green">{userProfile}</li>
                  </Col>
                  )}
                 

                  {user.status === 1 && (
                    <Col md={10} className="pb-4">
                    <li className="textEnd rev-red">{userProfile}</li>
                  </Col>
                  
                  )}

                  <Col md={14}>
                    <li>Approved date:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">{new Date(user.createdAt).toDateString()}</li>
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
                    <li className="textEnd">{new Date(user.updatedAt).toDateString()}</li>
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

export default UserProfile;
