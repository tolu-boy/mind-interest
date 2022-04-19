import React from "react";
import {  Row, Col,  Input } from "antd";
import avatar2 from "../../../assets/img/Avatar.svg";

const MessageBody = ({ currentChat }) => {
  const { Search } = Input;

  //   const getMessageType = (item) => {
  //     switch (item.msgType) {
  //       case "text":
  //         return <p> {item.text}</p>;

  //       case "date":
  //         return <p> {item.time}</p>;

  //       default:
  //         break;
  //     }
  //   };

  return (
    <div>
      {currentChat ? (
        <div>
          <div className="chat-header">
            <Row>
              <Col md={24}>
                <h4 className="top-rated-color1">{currentChat.name}</h4>
              </Col>

              <Col md={24}>
                <Row>
                  <Col md={6}>
                    <li className=""> Date joined: 13 Feb 2022 |</li>
                  </Col>

                  <Col md={4}>
                    <li className=""> Sessions: 34 |</li>
                  </Col>

                  <Col md={4}>
                    <li className=""> Total earnings</li>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>

          {currentChat.msg.map((item) => (
            <Row gutter={24} className="pl-2 pt-4">
              <Col md={2}>
                <img src={avatar2} alt="" srcset="" />
              </Col>

              <Col md={12} className="pt-2">
                <Row>
                  <Col md={24}>
                    <li>
                      Orval Casper
                      <span className="PostponedSessions"> 11:59AM</span>
                    </li>
                  </Col>
                  <Col md={24}>
                    <li>{item.text}</li>
                  </Col>
                </Row>
              </Col>
            </Row>
          ))}

          <Row>
            <Col md={24} className="pl-5  pt-5">
              <Search
                placeholder="input search text"
                enterButton="Send"
                size="large"
                //   suffix={suffix}
                //   onSearch={onSearch}
              />
            </Col>
          </Row>

          {/* 
          <div>
            {currentChat.msg.map((item) => (
              <div>
              
              {getMessageType(item)}
              </div>
            ))}
          </div> */}
        </div>
      ) : (
        <div>
          <h2 className="pl-5 text-center"> No chat yet</h2>
        </div>
      )}
    </div>
  );
};

export default MessageBody;
