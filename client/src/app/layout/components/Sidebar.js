import React, { useState, useEffect } from 'react';
import { Menu, Icon, Layout } from 'antd';
import { ROUTES } from '../../constants';
import logo from '../../../resources/images/logo.png';
import { Link, withRouter } from 'react-router-dom';
const SubMenu = Menu.SubMenu;
const { Sider } = Layout;

const Sidebar = ({ history }) => {
    const [collapsed, setCollapsed] = useState(false);
    const [currentPath, setCurrentPath] = useState(history.location.pathname);

    useEffect(() => {
        setCurrentPath(history.location.pathname);
    });
    return (
        <Sider
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={broken => {
                console.log(broken);
            }}
            collapsed={collapsed}
            onCollapse={collapsed => setCollapsed(collapsed)}
        >
            <div className="logo">
                <Link to={ROUTES.HOMEPAGE} className="logo__link">
                    <img src={logo} alt="VNUK AMS" className="logo__image" />
                    <span className="logo__text"> AMS</span>
                </Link>
            </div>

            <Menu theme="dark" activeKey={currentPath} mode="inline">
                <Menu.Item key={ROUTES.DASHBOARD}>
                    <Link className="nav-text" to={ROUTES.DASHBOARD}>
                        <Icon type="pie-chart" />
                        Dashboard
                    </Link>
                </Menu.Item>
                <Menu.Item key={ROUTES.REGISTER}>
                    <Icon type="desktop" />

                    <span>Classes</span>
                </Menu.Item>
                <Menu.Item key={ROUTES.LOGIN}>
                    <Icon type="desktop" />

                    <span>Classes</span>
                </Menu.Item>
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            <span>User</span>
                        </span>
                    }
                >
                    <Menu.Item key="3">Tom</Menu.Item>
                    <Menu.Item key="4">Bill</Menu.Item>
                    <Menu.Item key="5">Alex</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="team" />
                            <span>Team</span>
                        </span>
                    }
                >
                    <Menu.Item key="6">Team 1</Menu.Item>
                    <Menu.Item key="8">Team 2</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default withRouter(Sidebar);
