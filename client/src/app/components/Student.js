import React from "react";
import { connect } from "react-redux";
import { withTarget } from "app/actions/withTarget";
import { targets } from "app/constants";
import { toogleStudentTemp } from "app/actions/events";

import { Avatar, Card, Col, Checkbox } from "antd";

const { Meta } = Card;
const Student = ({ item, toogleStudentTemp }) => {
  const { user, isChecked } = item;
  const { fullName, email } = user;

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
              toogleStudentTemp(user._id);
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
export default connect(
  null,
  {
    toogleStudentTemp
  }
)(Student);
