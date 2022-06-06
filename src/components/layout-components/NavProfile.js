import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { connect } from 'react-redux'
import { EditOutlined, UserOutlined , LogoutOutlined,DollarCircleOutlined } from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';
import { useStore } from '../../zustand';
import logoImg from '../../assets/img/logo-login.svg'


const menuItem = [
	{
		title: "Overview",
		icon: EditOutlined ,
		path: "/therapists/Overview"
    },
    
    {
		title: "Users",
		icon: UserOutlined,
		path: "/UsersOverview"
    },
    {
		title: "Earnings",
		icon: DollarCircleOutlined  ,
		path: "/Earning"
	},
   
]

export const NavProfile = ({signOut}) => {

  const clearToken= useStore((store)=>{
    return store.clearToken
     })

     const setAuth = useStore((store)=>{
      return store.setAuth
       })

  
  // const profileImg = "/img/avatars/thumb-1.jpg";
  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          {/* <Avatar size={45} src={profileImg} /> */}
          <div className="pl-3">
            <h4 className="mb-0"> Quick Navigation </h4>
            {/* <span className="text-muted">Mind interest</span> */}
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <a href={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title} </span>
                </a>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={()=>{
            clearToken()
            setAuth(false)
            localStorage.setItem("auth",  false );
            localStorage.setItem("token",  null );
            localStorage.setItem("ip",  null );
          
          }}>
            <span>
              <LogoutOutlined />
              <span className="font-weight-normal">Signs Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={logoImg} />
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}

export default connect(null, {signOut})(NavProfile)
