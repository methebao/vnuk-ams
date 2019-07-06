import React, { useState, useEffect } from "react";
import { Menu, Icon, Layout } from "antd";
import { ROUTES } from "../../constants";
import logo from "../../../resources/images/logo.png";
import { Link, withRouter } from "react-router-dom";
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
        <Menu.Item key={ROUTES.HOMEPAGE}>
          <Link className="nav-text" to={ROUTES.HOMEPAGE}>
            <Icon type="schedule" /> Schedule
          </Link>
        </Menu.Item>
        <Menu.Item key={ROUTES.DASHBOARD}>
          <Link className="nav-text" to={ROUTES.DASHBOARD}>
            <Icon type="dashboard" />
            Dashboard
          </Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default withRouter(Sidebar);
