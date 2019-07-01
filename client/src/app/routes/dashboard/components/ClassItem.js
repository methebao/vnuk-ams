import React from "react";
import { getFormattedTime } from "app/helpers/formatTime";
import { Link } from "react-router-dom";
import { Avatar, Card, Col, Typography } from "antd";
import { ROUTES } from "app/constants";

const { Meta } = Card;
const { Text } = Typography;

const ClassItem = ({ item }) => {
  const {
    _id,
    name,
    description,
    course,
    startedTime,
    endedTime,
    updatedAt
  } = item;
  return (
    <Col span={12} style={{ marginBottom: "1rem" }}>
      <Link to={`${ROUTES.CLASS}/${_id}`}>
        <Card>
          <Meta
            avatar={
              <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
            }
            title={course.name}
            description={description || "VNUK Course"}
          />
          <div>
            <Text code>{getFormattedTime(updatedAt)}</Text>
          </div>
        </Card>
      </Link>
    </Col>
  );
};

export default ClassItem;
