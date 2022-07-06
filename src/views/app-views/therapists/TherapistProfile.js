import React, { useState } from "react";
import {
  ArrowLeftOutlined,
  // ArrowUpOutlined,
  ExclamationCircleTwoTone,
} from "@ant-design/icons";
import { Card, Row, Col, Button, notification, Modal, Image, List } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";
import avatar2 from "../../../assets/img/Avatar.svg";
import { useParams, useHistory } from "react-router-dom";
import useSingleTherapist from "queries/useSingleTherapist";
import useTherapistReviews from "queries/useTherapistReview";
import ApiService from "services/ApiService";
import { formatter } from "services/ApiService";
import { StarFilled } from "@ant-design/icons";

// import useRejectTherapist from "mutations/useRejectTherapist";
import { useMutation, useQueryClient } from "react-query";

const TherapistProfile = () => {
  const param = useParams();
  const history = useHistory();

  const { data: SingleTherapist } = useSingleTherapist(param.id);
  const { data: TherapistReviews } = useTherapistReviews(param.id);

  // let Therapist = SingleTherapist?.data.therapist ?? "";
  let Therapist = SingleTherapist ? SingleTherapist.data.therapist : [];
  let booking = SingleTherapist ? SingleTherapist.data.bookings : [];
  let reviews = TherapistReviews ? TherapistReviews.data.reviews : [];

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [confirmLoading1, setConfirmLoading1] = useState(false);
  const [header, setHeader] = useState("");
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const queryClient = useQueryClient();

  const rejectTherapistMutation = useMutation(ApiService.rejectTherapist, {
    onSuccess: () => {
      queryClient.invalidateQueries("SingleTherapist");
    },
  });

  const acceptTherapistMutation = useMutation(ApiService.acceptTherapist, {
    onSuccess: () => {
      queryClient.invalidateQueries("SingleTherapist");
    },
  });

  // console.log(booking);

  const openNotificationWithIcon = (type) => {
    notification[type]({
      message: `${header}`,
      description: `${message}`,
    });
  };

  const handleOk = async () => {
    setConfirmLoading(true);
    // await ApiService.rejectTherapist(param.id);
    // rejectTherapistMutation.mutate(param.id)
    await rejectTherapistMutation.mutateAsync(param.id);

    setConfirmLoading(false);
    setVisible(false);
    openNotificationWithIcon("success");
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const openNotificationWithIcon1 = (type) => {
    notification[type]({
      message: `${header}`,
      description: `${message}`,
    });
  };

  const handleOk1 = async () => {
    setConfirmLoading1(true);
    // await ApiService.acceptTherapist(param.id);
    // await acceptTherapistMutation.mutate(param.id)
    await acceptTherapistMutation.mutateAsync(param.id);
    setConfirmLoading1(false);
    setVisible1(false);
    openNotificationWithIcon1("success");
  };

  const handleCancel1 = () => {
    setVisible1(false);
  };

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const tabList = [
    {
      key: "Booking",
      tab: "Booking",
    },
    {
      key: "Reviews",
      tab: "Reviews",
    },
  ];

  const contentList = {
    Booking: (
      <div>
        {/* <Row>
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


       
        </Row> */}
        <List
          pagination={{
            pageSize: 7,
          }}
          dataSource={booking}
          renderItem={(item) => (
            <List.Item className="border-none">
              <Col md={3}>
                <img
                  src={
                    !item.user_profile_img || null
                      ? avatar2
                      : item.user_profile_img
                  }
                  alt="products"
                  className="product-img"
                />
              </Col>

              <Col md={17} className="pt-2">
                <p> {item.therapist}</p>
              </Col>

              <Col md={4} className="pt-2 mb-3" style={{ padding: 0 }}>
                <li className="sessionBooked"> {item.status}</li>
                <li className="sessionTime pt-2">
                  {" "}
                  {new Date(item.createdAt).toDateString()}
                </li>
              </Col>
            </List.Item>
          )}
        />
      </div>
    ),
    Reviews: (
      <div>
        <List
          pagination={{
            pageSize: 7,
          }}
          dataSource={reviews}
          renderItem={(item) => (
            <List.Item className="border-none">
              <Col md={20} className="pt-2">
                <p> {item.review === null ? "No review yet" : item.review}</p>
              </Col>

              <Col md={4} className="pt-2">
                {item.rating ? (
                  Array(item.rating)
                    .fill()
                    .map((v, i) => <StarFilled className="gold-color " />)
                ) : (
                  <li className="mntp-2">No rating avaliable</li>
                )}
              </Col>
            </List.Item>
          )}
        />
      </div>
    ),
  };

  const [activeTabKey1, setActiveTabKey1] = useState("Booking");
  const deleteTitle = (
    <div>
      <Row>
        <Col span={2}>
          <ExclamationCircleTwoTone twoToneColor="#ffc53d" />
        </Col>
        <Col span={12}>
          <p>{header}</p>
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
          <p>{header}</p>
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
        <p> {text} </p>
      </Modal>

      <Modal
        title={deleteTitle1}
        visible={visible1}
        onOk={handleOk1}
        confirmLoading={confirmLoading1}
        onCancel={handleCancel1}
      >
        <p> {text} </p>
      </Modal>

      <p className="profile-heading">
        <span
          className="pr-2"
          onClick={() => {
            history.goBack();
          }}
        >
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
                    {/* <img alt="example" src={profile} className="profilePic" /> */}
                    <Image
                      src={
                        !Therapist.profile_img || null
                          ? profile
                          : Therapist.profile_img
                      }
                      width={50}
                      height={50}
                      preview={false}
                      alt="products"
                      className="product-img"
                    />
                  </Col>

                  <Col md={15}>
                    <li className="proileName"> {Therapist.name}</li>
                    <li className="proileWork pt-2 "> {Therapist.specialty}</li>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={24}>
              <Card title="Overview">
                <Row>
                  <Col md={16}>
                    <p className="PostponedSessions">Booked session</p>
                    <p className="profileOverviewText">30</p>
                  </Col>

                  <Col md={8}>
                    <p className="PostponedSessions">Postponed sessions</p>
                    <p className="profileOverviewText1">12</p>
                  </Col>

                  <Col md={16}>
                    <p className="PostponedSessions">Cancelled sessions</p>
                    <p className="profileOverviewText rev-red">7</p>
                  </Col>

                  <Col md={8} className="mb-4 pb-4">
                    <p className="PostponedSessions">Income</p>
                    <li className="IncomeText">{Therapist.income}</li>
                    <li className="incomePercent mt-2">
                      {/* <ArrowUpOutlined /> 37.8% */}
                    </li>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={24}>
              <Card
                tabList={tabList}
                activeTabKey={activeTabKey1}
                onTabChange={(key) => {
                  onTab1Change(key);
                }}
              >
                {contentList[activeTabKey1]}
              </Card>
            </Col>
          </Row>
        </Col>

        <Col md={10}>
          <Row gutter={16}>
            {Therapist.approval_status === 1 && (
              <Col md={24}>
                <Button
                  type="danger"
                  block
                  onClick={() => {
                    setVisible(true);
                    setHeader("Suspend Therapist");
                    setText("Are you sure you want to Suspend this Therapist");
                    setMessage("The Therapist has been suspended");
                  }}
                >
                  Suspend
                </Button>
              </Col>
            )}

            {Therapist.approval_status === 2 && (
              <Col md={24}>
                <Button
                  className="buttonAccept"
                  block
                  onClick={() => {
                    setVisible1(true);
                    setHeader("Restore Therapist");
                    setText("Are you sure you want to Restore this Therapist");
                    setMessage("The Therapist has been Restored");
                  }}
                >
                  Restore
                </Button>
              </Col>
            )}

            {Therapist.approval_status === 0 && (
              <>
                <Col md={12}>
                  <Button
                    block
                    className="buttonReject"
                    onClick={() => {
                      setVisible(true);
                      setHeader("Reject Therapist");
                      setText("Are you sure you want to Reject this Therapist");
                      setMessage("The Therapist has been Rejected");
                    }}
                  >
                    Reject
                  </Button>
                </Col>

                <Col md={12}>
                  <Button
                    block
                    className="buttonAccept"
                    onClick={() => {
                      setVisible1(true);
                      setHeader("Accept Therapist");
                      setText("Are you sure you want to Accept this Therapist");
                      setMessage("The Therapist has been Accepted");
                    }}
                  >
                    Accept
                  </Button>
                </Col>
              </>
            )}

            <Col md={24} className="pt-4">
              <Card title="Profile details">
                <Row>
                  <Col md={20}>
                    <li>Rate:</li>
                  </Col>

                  <Col md={4} className="pb-4">
                    <li className="textEnd">
                      {" "}
                      {formatter
                        .format(Therapist.hourly_rate)
                        .replace(".00", " ")}
                    </li>
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
                    <li className="textEnd">
                      {Therapist.educational_qualification}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Date of registration:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {new Date(
                        Therapist.date_of_first_registration
                      ).toDateString()}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Category of membership</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">{Therapist.specialty}</li>
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
                    <li className="textEnd">{Therapist.address}</li>
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

                  {Therapist.approval_status === 0 && (
                    <Col md={10} className="pb-4">
                      <li className="textEnd "> Waiting </li>
                    </Col>
                  )}

                  {Therapist.approval_status === 1 && (
                    <Col md={10} className="pb-4">
                      <li className="textEnd rev-green">Active</li>
                    </Col>
                  )}

                  {Therapist.approval_status === 2 && (
                    <Col md={10} className="pb-4">
                      <li className="textEnd rev-red">Suspended</li>
                    </Col>
                  )}

                  <Col md={14}>
                    <li>Approved date:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {new Date(
                        Therapist.date_of_first_registration
                      ).toDateString()}
                    </li>
                  </Col>

                  <Col md={24} className="pb-4">
                    <hr className="border1" />
                  </Col>

                  <Col md={24} className="pb-4">
                    <h4> Activity and Device</h4>
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
                    <li className="textEnd">{Therapist.device}</li>
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

export default TherapistProfile;
