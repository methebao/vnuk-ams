import React, { useEffect } from "react";
import { withTarget } from "app/actions/withTarget";
import { targets } from "app/constants";
import { connect } from "react-redux";
import Calendar from "./components/Calendar";
import { fetchEvents } from "../../actions/events";

const Home = ({ events, fetchEvents, isFetching }) => {
  useEffect(() => {
    fetchEvents();
  }, []);

  return <Calendar events={events} isLoading={isFetching} />;
};

const mapStateToProps = state => {
  const homePageStore = state.homePage;

  return {
    events: homePageStore.data.events.data,
    isFetching: homePageStore.data.events.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchEvents: withTarget(fetchEvents, targets.HOMEPAGE) }
)(Home);
