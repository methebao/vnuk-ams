import React, { useState, useEffect } from 'react';
import { Button, Menu, PageHeader } from 'antd';
import { ROUTES, PAGE_TITLE } from 'app/constants';
import { Link, NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from 'app/actions/authentication';

const Header = ({ auth, logoutUser, history }) => {
    const { isAuthenticated, user } = auth;
    const [title, setTitle] = useState('Title');
    useEffect(() => {
        switch (history.location.pathname) {
            case ROUTES.HOMEPAGE:
                setTitle(PAGE_TITLE.HOMEPAGE);
                break;
            case ROUTES.DASHBOARD:
                setTitle(PAGE_TITLE.DASHBOARD);
                break;
            case ROUTES.REGISTER:
                setTitle(PAGE_TITLE.REGISTER);
                break;
            case ROUTES.LOGIN:
                setTitle(PAGE_TITLE.LOGIN);
                break;
            case ROUTES.CLASS_BY_ID:
                setTitle(PAGE_TITLE.CLASS_BY_ID);
                break;
            default:
                break;
        }
    });
    return (
        <PageHeader
            title={title}
            subTitle="This is a subtitle"
            extra={
                isAuthenticated
                    ? [
                          <Button
                              key="1"
                              type="primary"
                              onClick={() => {
                                  logoutUser(history);
                              }}
                          >
                              Logout of {user.email}
                          </Button>,
                      ]
                    : [
                          <NavLink key="1" className="ant-btn" to={'/login'} activeClassName={'ant-btn-primary'}>
                              Login
                          </NavLink>,
                          <NavLink key="2" className="ant-btn" to={'/register'} activeClassName={'ant-btn-primary'}>
                              Register
                          </NavLink>,
                      ]
            }
        />
    );
};
const mapStateToProps = state => {
    const commonStore = state.common;

    return {
        auth: commonStore.auth,
    };
};
export default connect(
    mapStateToProps,
    { logoutUser },
)(withRouter(Header));
