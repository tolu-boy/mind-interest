import React, { useState } from "react";
import { Card } from "antd";
import MessageSide from "./MessageSide";
import InnerAppLayout from "layouts/inner-app-layout";
import MessageBody from "./MessageBody";
import chatdata from "assets/data/chat.data.json";
import therapist2 from "assets/data/therapist.json";

const Message = () => {
  const [users] = useState(chatdata);
  const [therapists] = useState(therapist2);

  const [currentChat, setCurrentChat] = useState();

  return (
    <div>
      <h3 className="dash-heading pb-3"> Message center</h3>

      <Card>
        <InnerAppLayout
          sideContent={
            <MessageSide
              users={users}
              therapists={therapists}
              setCurrentChat={setCurrentChat}
            />
          }
          mainContent={<MessageBody currentChat={currentChat} />}
          sideContentWidth={500}
          sideContentGutter={false}
          border
        />
      </Card>
    </div>
  );
};

export default Message;
