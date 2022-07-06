import React, { useState } from "react";
import { ArrowLeftOutlined, ExclamationCircleTwoTone } from "@ant-design/icons";
import { Card, Row, Col, Button, notification, Modal, Image, List } from "antd";
import background from "../../../assets/img/background.svg";
import profile from "../../../assets/img/profile.svg";
import avatar2 from "../../../assets/img/Avatar.svg";
import { useParams, useHistory } from "react-router-dom";
import useSingleUser from "queries/useSingleUser";
import useUserReviews from "queries/useUserReviews";
import ApiService from "services/ApiService";
import { useMutation, useQueryClient } from "react-query";
import { StarFilled } from "@ant-design/icons";

const UserProfile = () => {
  // const location = useLocation();
  const param = useParams();
  const history = useHistory();

  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const [confirmLoading1, setConfirmLoading1] = useState(false);
  // const [userProfile, setUserProfile] = useState(location.state.page)
  const { data: SingleUser } = useSingleUser(param.id);
  const { data: UserReviews } = useUserReviews(param.id);

  let user = SingleUser?.data.user ?? "";
  let userBooking = SingleUser?.data.bookings ?? "";
  let reviews = UserReviews ? UserReviews.data.reviews : [];

  const queryClient = useQueryClient();

  const suspendUsersMutation = useMutation(ApiService.SuspendUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries("SingleUser");
    },
  });

  const activateUsersMutation = useMutation(ApiService.ActivateUsers, {
    onSuccess: () => {
      queryClient.invalidateQueries("SingleUser");
    },
  });

  const onTab1Change = (key) => {
    setActiveTabKey1(key);
  };

  const tabListe = [
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

          <Col md={16} className="pt-2">
            <p> Dr. Festus King</p>
          </Col>

          <Col md={5} className="pt-2 mb-3 textEnd">
            <li className="sessionBooked"> Session booked</li>
            <li className="sessionTime pt-2"> 30 minutes ago</li>
          </Col>
        
        </Row> */}

        <List
          pagination={{
            pageSize: 7,
          }}
          dataSource={userBooking}
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

  const handleOk = async () => {
    setConfirmLoading(true);
    // await ApiService.SuspendUsers(param.id)
    await suspendUsersMutation.mutateAsync(param.id);

    setConfirmLoading(false);
    setVisible(false);
    openNotificationWithIcon("success");
    // setUserProfile('Suspended')
    // location.state.page = 'Suspended'
  };

  const handleCancel = () => {
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
    // await ApiService.ActivateUsers(param.id)
    await activateUsersMutation.mutateAsync(param.id);

    setConfirmLoading1(false);
    setVisible1(false);
    openNotificationWithIcon1("success");
    // setUserProfile('Active')
    // location.state.page = 'Active'
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

  const cardHeader1 = <div></div>;

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
        <span
          className="pr-2"
          onClick={() => {
            history.goBack();
          }}
        >
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
                    <Image
                      src={
                        !user.profile_img || null ? profile : user.profile_img
                      }
                      width={50}
                      preview={false}
                      alt="products"
                      className="product-img"
                    />
                  </Col>

                  <Col md={15}>
                    <li className="proileName">{user.name}</li>
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
                <Button
                  type="danger"
                  block
                  onClick={() => {
                    setVisible(true);
                  }}
                >
                  Suspend
                </Button>
              </Col>
            )}

            {user.status === 1 && (
              <Col md={24}>
                <Button
                  className="buttonAccept"
                  block
                  onClick={() => {
                    setVisible1(true);
                  }}
                >
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
                    <li className="textEnd">
                      {" "}
                      {user.gender ? user.gender : "Male"}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Phone number:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {" "}
                      {user.phone ? user.phone : "09088656567"}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Relationship status:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {user.relationship_status
                        ? user.relationship_status
                        : "Single"}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Parenthood:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {" "}
                      {user.parental_status
                        ? user.parental_status
                        : "None"}{" "}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>Age group:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {" "}
                      {user.age_range ? user.age_range : "24 - 34"}
                    </li>
                  </Col>

                  <Col md={14}>
                    <li>How often I need to talk:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {" "}
                      {user.need_to_talk ? user.need_to_talk : "Pretty often"}
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
                    <li className="textEnd">User</li>
                  </Col>

                  <Col md={14}>
                    <li>Status:</li>
                  </Col>

                  {user.status === 0 && (
                    <Col md={10} className="pb-4">
                      <li className="textEnd rev-green"> Active</li>
                    </Col>
                  )}

                  {user.status === 1 && (
                    <Col md={10} className="pb-4">
                      <li className="textEnd rev-red"> Suspended</li>
                    </Col>
                  )}

                  <Col md={14}>
                    <li>Approved date:</li>
                  </Col>

                  <Col md={10} className="pb-4">
                    <li className="textEnd">
                      {new Date(user.createdAt).toDateString()}
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
                    <li className="textEnd">{user.device}</li>
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
