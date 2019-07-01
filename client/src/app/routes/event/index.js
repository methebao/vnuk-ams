import React, { useEffect } from "react";
import { connect } from "react-redux";
import { compose } from "recompose";
import { fetchEventById, updateEvent } from "../../actions/events";
import { withTarget } from "app/actions/withTarget";
import { targets } from "app/constants";
import EventDetail from "./containers/EventDetail";

const Event = ({ event, fetchEventById, updateEvent, match, isFetching }) => {
  useEffect(() => {
    const { eventId } = match.params;
    fetchEventById(eventId);
  }, {});

  return <EventDetail event={event} />;
};

const mapStateToProps = state => {
  const eventPageStore = state.eventPage;
  return {
    event: eventPageStore.data.events.data,
    isFetching: eventPageStore.data.events.isFetching
  };
};
export default connect(
  mapStateToProps,
  {
    fetchEventById: withTarget(fetchEventById, targets.EVENT_DETAIL_PAGE),
    updateEvent
  }
)(Event);
