import React, { Component } from "react";

import Helmet from "react-helmet";
import { withRouter } from "react-router-dom";
import Header from "./components/Header";
import Router from "./components/Router";
import SideBar from "./components/Sidebar";
import { ROUTES } from "app/constants";
import { Layout as LayoutBase } from "antd";
const { Content, Footer } = LayoutBase;

class Layout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { pathname } = this.props.location;
    const isRenderSidebar =
      pathname !== ROUTES.LANDING &&
      pathname !== ROUTES.LOGIN &&
      pathname !== ROUTES.REGISTER;
    return (
      <LayoutBase style={{ minHeight: "100vh" }}>
        {isRenderSidebar && <SideBar />}
        <LayoutBase className="layout">
          <Helmet
            title="VNUK - Atendance Management System"
            meta={[
              {
                name: "description",
                content: " Attendance Management System made by VNUK Students"
              },
              {
                name: "keywords",
                content: "Attendance, Management, project, vnuk"
              }
            ]}
            script={[
              {
                src: "https://use.fontawesome.com/releases/v5.0.4/js/all.js"
              }
            ]}
            link={[
              {
                rel: "stylesheet",
                href:
                  "https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
              }
            ]}
          />

          <Content>
            <Header />
            <div className="content-box">
              <Router />
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            VNUK - Attendace Management System ©2019
            <p>Created by thebaoDEV_.</p>
          </Footer>
        </LayoutBase>
      </LayoutBase>
    );
  }
}

export default withRouter(Layout);
