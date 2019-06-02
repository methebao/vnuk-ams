import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { fetchClassesPerPage } from 'app/actions/classes';
import { setHeaderTitle } from 'app/actions/uiAction';
import { PAGE_TITLE } from 'app/constants';
import MyCalendar from '../dashboard/containers/Calendar';
import { fetchEvents } from '../../actions/events';

const Home = ({ events, fetchEvents, isFetching }) => {
    useEffect(() => {
        fetchEvents();
    }, []);
    useEffect(() => {
        setHeaderTitle(PAGE_TITLE.HOMEPAGE);
    }, []);

    return (
        <div className="calendar">
            <MyCalendar events={events} isLoading={isFetching} />
        </div>
    );
};

const mapStateToProps = state => {
    const homePageStore = state.homePage;
    const commonUIStore = state.commonUI;

    return {
        events: homePageStore.data.events.data,
        isFetching: homePageStore.data.classes.isFetching,
    };
};

export default connect(
    mapStateToProps,
    { fetchEvents, setHeaderTitle },
)(Home);
