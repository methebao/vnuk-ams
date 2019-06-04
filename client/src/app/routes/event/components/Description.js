import React from 'react';
// import { Descriptions } from 'antd';
import withMaybe from 'app/hoc/withMaybe';
const Description = ({ event }) => {
    const { title, classCode, location, start, end } = event;
    return (
        // <Descriptions title="Description">
        //     <Descriptions.Item label="Course Name">{title}</Descriptions.Item>
        //     <Descriptions.Item label="ClassCode">{classCode}</Descriptions.Item>
        //     <Descriptions.Item label="Location">{location}</Descriptions.Item>
        //     <Descriptions.Item label="Start">{start}</Descriptions.Item>
        //     <Descriptions.Item label="End">{end}</Descriptions.Item>
        // </Descriptions>
        <h1>title</h1>
    );
};

export default withMaybe(Description);
