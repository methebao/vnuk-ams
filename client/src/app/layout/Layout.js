import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Site from './components/Site';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import Router from './components/Router';

const Layout = ({ children }) => (
    <Site>
        <Helmet
            title="VNUK - Atendance Management System"
            meta={[
                { name: 'description', content: ' Atendance Management System made by VNUK Students' },
                { name: 'keywords', content: 'Atendance, Management, project, vnuk' },
            ]}
            script={[{ src: 'https://use.fontawesome.com/releases/v5.0.4/js/all.js' }]}
            link={[
                {
                    rel: 'stylesheet',
                    href: 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
                },
            ]}
        />
        <Header />
        <Content>
            <Router />
        </Content>
        <Footer />
    </Site>
);

Layout.propTypes = {
    children: PropTypes.func,
};

export default Layout;
