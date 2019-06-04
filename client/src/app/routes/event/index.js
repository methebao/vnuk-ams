import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEventById } from '../../actions/events';
import Description from './components/Description';
const Event = ({ event, fetchEventById, match, isFetching }) => {
    useEffect(() => {
        const { eventId } = match.params;
        fetchEventById(eventId);
    }, {});

    return (
        <div className="event-page">
            <Description event={event} />
        </div>
    );
};

const mapStateToProps = state => {
    const eventPageStore = state.eventPage;
    return {
        event: eventPageStore.data.events.data,
        isFetching: eventPageStore.data.events.isFetching,
    };
};
export default connect(
    mapStateToProps,
    { fetchEventById },
)(Event);
