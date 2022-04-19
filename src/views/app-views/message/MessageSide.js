import React, { useState } from "react";
import { Tabs, Row, Col, Input } from "antd";
import avatar2 from "../../../assets/img/Avatar.svg";
import { SearchOutlined } from "@ant-design/icons";


const MessageSide = ({ users, therapists, setCurrentChat }) => {
  const [type, setType] = useState("therapists");

  const { TabPane } = Tabs;

  function callback(key) {
    setType(key);
  }


  

  return (
    <div>


<Row  className="pb-3">


  <Col md={16} className="switchTabs">
  <button className="b-therapy" onClick={()=>{
          setType('therapists');

  }}> Therapists</button>   
  <button className="b-users" onClick={()=>{
          setType('users');

  }}> users</button>
  </Col>
 

</Row>


      <Tabs
        defaultActiveKey={"therapists"}
        activeKey={type}
        type="card"
        onChange={callback}
      

      >
        <TabPane tab="Therapist" key="therapists" id="therapist" >

        {therapists.map((item)=>(
            <Row className="pt-2 message-list"  key={item.id} gutter={16}  onClick={() => {
                  setCurrentChat(item);
                }}
              >
            <Col md={5} className="pl-3">
              <img src={avatar2} alt="" srcset="" />
            </Col>

            <Col md={13}>
              <Row>
                <Col md={24} className="pb-2">
                  <li> {item.name}</li>
                </Col>

                <Col md={24} className="pb-4">
                  <li className="messageList"> Why is my profile Suspended</li>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <li >3.30 pm</li>
            </Col>
          </Row>
        ))}
         
         <Row className="pt-5 mt-5">
             <Col md={22}>
             <Input placeholder="Search message" prefix={<SearchOutlined/>} className="m5-3" />

             </Col>
         </Row>

         
        </TabPane>
        <TabPane tab="Users" key="users">
          <div>
            {/* {users.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setCurrentChat(item);
                }}
              >
                <p>{item.name}</p>
              </div>
            ))} */}


            {users.map((item)=>(
            <Row className="pt-2 message-list"  key={item.id} gutter={16}  onClick={() => {
                  setCurrentChat(item);
                }}
              >
            <Col md={5} className="pl-3">
              <img src={avatar2} alt="" srcset="" />
            </Col>

            <Col md={13}>
              <Row>
                <Col md={24} className="pb-2">
                  <li> {item.name}</li>
                </Col>

                <Col md={24} className="pb-4">
                  <li className="messageList"> Why is my profile Suspended</li>
                </Col>
              </Row>
            </Col>

            <Col md={6}>
              <li >3.30 pm</li>
            </Col>
          </Row>
        ))}

        <Row className="pt-5 mt-5">
             <Col md={22}>
             <Input placeholder="Search users" prefix={<SearchOutlined/>} className="m5-3" />

             </Col>
         </Row>
          </div>
        </TabPane>
      </Tabs>


     
    </div>
  );
};

export default MessageSide;
