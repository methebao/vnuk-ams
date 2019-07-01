import React from "react";
import { compose } from "recompose";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { toogleStudent } from "app/actions/events";

import { Avatar, Card, Col, Checkbox } from "antd";

const { Meta } = Card;
const Student = ({ item, toogleStudent, history }) => {
  const { user, isChecked } = item;
  const { fullName, email } = user;
  const eventId = history.location.pathname.replace("/event/", "");
  return (
    <Col span={12} style={{ marginBottom: "1rem" }}>
      <Card
        title={
          <div>
            <Avatar
              style={{ marginRight: "1rem" }}
              shape="square"
              size="large"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
            {fullName}
          </div>
        }
        extra={
          <Checkbox
            onChange={() => {
              toogleStudent(eventId, user._id);
            }}
            checked={isChecked}
          />
        }
      >
        <Meta description={email || "test@gmail.com"} />
      </Card>
    </Col>
  );
};
export default compose(
  connect(
    null,
    {
      toogleStudent
    }
  ),
  withRouter
)(Student);
