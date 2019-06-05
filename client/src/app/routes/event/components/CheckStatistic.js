import React from 'react';
import { Statistic, Row, Col, Icon } from 'antd';

const CheckStatistic = ({ checkedCount, unCheckedCount, total }) => {
    return (
        <Row gutter={16}>
            <Col span={12}>
                <Statistic
                    title="Checked"
                    value={checkedCount}
                    prefix={<Icon type="check-circle" />}
                />
            </Col>
            <Col span={12}>
                <Statistic
                    title="Unchecked"
                    value={unCheckedCount}
                    suffix={`/ ${total}`}
                />
            </Col>
        </Row>
    );
};

export default CheckStatistic;
