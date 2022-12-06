import React from "react";
import './style.css'
import {Menu} from "antd";
import { MailOutlined } from '@ant-design/icons';


const Header = () =>{
    return(
            <Menu
                className="header"
                mode="horizontal" theme="dark" style={{
                position:'relative',
                display:'flex',
                justifyContent:'flex-end'
            }}>
                <Menu.Item key="mail" icon={<MailOutlined />}>Home</Menu.Item>
                <Menu.Item key="mail" icon={<MailOutlined />}>Dashboard</Menu.Item>
                <Menu.Item key="mail" icon={<MailOutlined />}>Profile</Menu.Item>
            </Menu>
    );
};
export default Header;