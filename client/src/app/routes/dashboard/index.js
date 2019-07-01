import React, { useEffect } from "react";

import ClassList from "./containers/ClassList";
import Calendar from "../home/components/Calendar";
import { connect } from "react-redux";
import { fetchClassesPerPage } from "app/actions/classes";
import { PAGE_TITLE } from "app/constants";
import Paper from "app/components/Paper";
const CLASS_PER_PAGE = 6;

const Dashboard = ({
  classes,
  currentPage,
  pages,
  fetchClassesPerPage,
  isFetching
}) => {
  useEffect(() => {
    fetchClassesPerPage(currentPage, CLASS_PER_PAGE);
  }, [currentPage]);

  return (
    <div className="dashboard">
      <ClassList classes={classes} isLoading={isFetching} />
      <Paper totalPages={pages || 0} />
    </div>
  );
};

const mapStateToProps = state => {
  const homePageStore = state.homePage;
  const commonUIStore = state.commonUI;
  return {
    currentPage: commonUIStore.page,
    classes: homePageStore.data.classes.data,
    pages: homePageStore.data.classes.pages,
    isFetching: homePageStore.data.classes.isFetching
  };
};

export default connect(
  mapStateToProps,
  { fetchClassesPerPage }
)(Dashboard);
