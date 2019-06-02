import React, { useEffect } from 'react';
import { compose } from 'recompose';

import toDate from '../helpers/toDate';
import { connect } from 'react-redux';
import { fetchEvents } from 'app/actions/events';
import BigCalendar from 'react-big-calendar';
import moment from 'moment/moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import withEither from '../../../hoc/withEither';
import Spinner from '../../../components/Spinner';
import withMaybe from '../../../hoc/withMaybe';
import { Empty } from 'antd';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer

const isLoadingConditionFn = props => props.isLoading;
const nullConditionFn = props => !props.events;
const isEmptyConditionFn = props => !props.events.length;

const withConditionalRenderings = compose(
    withEither(isLoadingConditionFn, Spinner),
    withMaybe(nullConditionFn),
    withEither(isEmptyConditionFn, Empty),
);

const MyCalendar = ({ events }) => {
    debugger;
    const displayEvents = events.reduce((all, event) => {
        const displayEvent = {
            ...event,
            start: toDate(event.start),
            end: toDate(event.end),
        };
        return [...all, displayEvent];
    }, []);
    debugger;
    return (
        <div className="container">
            <BigCalendar localizer={localizer} events={displayEvents} startAccessor="start" endAccessor="end" />,
        </div>
    );
};

export default withConditionalRenderings(MyCalendar);
