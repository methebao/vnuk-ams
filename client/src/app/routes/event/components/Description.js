import React from "react";
import { compose } from "recompose";
import { Descriptions } from "antd";
import { getFormattedTime } from "app/helpers/formatTime";
import withMaybe from "app/hoc/withMaybe";
const Description = ({ event }) => {
  const { title, classCode, location, start, end } = event;
  return (
    <Descriptions title="Description">
      <Descriptions.Item label="Course Name">{title}</Descriptions.Item>
      <Descriptions.Item label="ClassCode">{classCode}</Descriptions.Item>
      <Descriptions.Item label="Location">{location}</Descriptions.Item>
      <Descriptions.Item label="Start">
        {getFormattedTime(start)}
      </Descriptions.Item>
      <Descriptions.Item label="End">{getFormattedTime(end)}</Descriptions.Item>
    </Descriptions>
  );
};
const nullConditionFn = props => !props.event;

export default withMaybe(nullConditionFn)(Description);
