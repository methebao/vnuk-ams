import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchClassesPerPage } from 'app/actions/classes';
import { setHeaderTitle } from 'app/actions/uiAction';
import { PAGE_TITLE } from 'app/constants';
import Calendar from './components/Calendar';
import { fetchEvents } from '../../actions/events';

const Home = ({ events, fetchEvents, isFetching }) => {
    useEffect(() => {
        fetchEvents();
    }, []);
    useEffect(() => {
        setHeaderTitle(PAGE_TITLE.HOMEPAGE);
    }, []);

    return <Calendar events={events} isLoading={isFetching} />;
};

const mapStateToProps = state => {
    const homePageStore = state.homePage;
    const commonUIStore = state.commonUI;

    return {
        events: homePageStore.data.events.data,
        isFetching: homePageStore.data.events.isFetching,
    };
};

export default connect(
    mapStateToProps,
    { fetchEvents, setHeaderTitle },
)(Home);
