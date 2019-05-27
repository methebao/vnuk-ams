import React from 'react';
import { Avatar, Card, Col } from 'antd';
const { Meta } = Card;
const StudentItem = ({ item }) => {
    const { fullName, email } = item;
    return (
        <Col span={12} style={{ marginBottom: '1rem' }}>
            <Card>
                <Meta
                    avatar={
                        <Avatar
                            shape="square"
                            size="large"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                    }
                    title={fullName}
                    description={email || 'test@gmail.com'}
                />
            </Card>
        </Col>
    );
};

export default StudentItem;
