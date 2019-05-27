import React from 'react';
import BigCalendar from 'react-big-calendar';
import moment from 'moment/moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
const localizer = BigCalendar.momentLocalizer(moment); // or globalizeLocalizer
const now = new Date();
const events = [
    {
        id: 8,
        title: 'Computer Science',
        start: new Date(2019, 5, 3, 14, 0, 0, 0),
        end: new Date(2019, 5, 3, 17, 0, 0, 0),
    },
    {
        id: 9,
        title: 'Happy Hour',
        start: new Date(2019, 3, 12, 17, 0, 0, 0),
        end: new Date(2019, 3, 12, 17, 30, 0, 0),
        desc: 'Most important meal of the day',
    },
    {
        id: 10,
        title: 'Dinner',
        start: new Date(2019, 5, 12, 20, 0, 0, 0),
        end: new Date(2019, 5, 12, 21, 0, 0, 0),
    },
    {
        id: 11,
        title: 'Birthday Party',
        start: new Date(2019, 5, 13, 7, 0, 0),
        end: new Date(2019, 5, 13, 10, 30, 0),
    },
    {
        id: 12,
        title: 'Late Night Event',
        start: new Date(2019, 3, 17, 19, 30, 0),
        end: new Date(2019, 3, 18, 2, 0, 0),
    },
    {
        id: 12.5,
        title: 'Late Same Night Event',
        start: new Date(2019, 3, 17, 19, 30, 0),
        end: new Date(2019, 3, 17, 23, 30, 0),
    },
    {
        id: 13,
        title: 'Multi-day Event',
        start: new Date(2019, 3, 20, 19, 30, 0),
        end: new Date(2019, 3, 22, 2, 0, 0),
    },
];
const MyCalendar = props => (
    <div className="container">
        <BigCalendar localizer={localizer} events={events} startAccessor="start" endAccessor="end" />
    </div>
);
export default MyCalendar;
