import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './components/Header';
import Router from './components/Router';
import SideBar from './components/Sidebar';
import { Layout as LayoutBase } from 'antd';
const { Content, Footer } = LayoutBase;

const Layout = ({ children }) => (
    <LayoutBase style={{ minHeight: '100vh' }}>
        <SideBar />
        <LayoutBase className="layout">
            <Helmet
                title="VNUK - Atendance Management System"
                meta={[
                    { name: 'description', content: ' Attendance Management System made by VNUK Students' },
                    { name: 'keywords', content: 'Attendance, Management, project, vnuk' },
                ]}
                script={[{ src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js' }]}
                link={[
                    {
                        rel: 'stylesheet',
                        href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                    },
                ]}
            />

            <Content>
                <Header />
                <div className="content-box">
                    <Router />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </LayoutBase>
    </LayoutBase>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;
