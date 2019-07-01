import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";
import { ROUTES } from "app/constants";

const withAuthorization = Component => {
  class WithAuthorization extends React.Component {
    componentDidMount() {
      const { isAuthenticated } = this.props;
      if (!isAuthenticated) {
        this.props.history.push(ROUTES.LOGIN);
      }
    }
    render() {
      return <Component {...this.props} />;
    }
  }
  const mapStateToProps = state => {
    const commonStore = state.common;

    return {
      isAuthenticated: commonStore.auth.isAuthenticated
    };
  };

  return compose(
    withRouter,
    connect(
      mapStateToProps,
      null
    )
  )(WithAuthorization);
};

export default withAuthorization;
