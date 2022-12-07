import React from "react";
import '../index.css'
import {Divider, Menu} from "antd";
import {Link} from 'react-router-dom'
import {UserOutlined, UserAddOutlined} from '@ant-design/icons'
const Sider = () =>{
    return (
      <Menu mode="inline" theme="dark" className="menu">
        <div className="company_info_wrapper">
          <h2>PTS</h2>
          <p>Patient Tracking System</p>
        </div>
        <div className="user_wrapper">
          <img
            src="https://cdn0.iconfinder.com/data/icons/set-ui-app-android/32/8-512.png"
            alt="user"
          />
          <h2>Admin</h2>
          <p>VP & CEO</p>
        </div>
        <Divider />
        <Menu.Item defaultChecked>
          <Link to={`/dashboard`}>Dashboard</Link>
        </Menu.Item>
        <Menu.SubMenu title="Patient Details">
          <Menu.Item icon={<UserAddOutlined />}>
            <Link to={`/addpatient`}>Add Patient</Link>
          </Menu.Item>
          <Menu.Item icon={<UserAddOutlined />}>
            <Link to={`/viewpatient`}>View Patient</Link>
          </Menu.Item>
          <Menu.Item icon={<UserAddOutlined />}>
            <Link to={`/patient`}>Update Patient</Link>
          </Menu.Item>
        </Menu.SubMenu>
        <Menu.Divider />
        <Menu.Item icon={<UserOutlined />}>
          <Link>Doctor</Link>
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />}>
          <Link>Appointments</Link>
        </Menu.Item>
        <Menu.Item icon={<UserOutlined />}>
          <Link>Covid Status</Link>
        </Menu.Item>
      </Menu>
    );
}

export default Sider;