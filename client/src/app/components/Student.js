import React, { useState } from 'react';
import { Avatar, Card, Col, Checkbox } from 'antd';

const { Meta } = Card;
const Student = ({ item }) => {
    const [value, setValue] = useState(item.isChecked);

    const { fullName, email, isChecked } = item;

    return (
        <Col span={12} style={{ marginBottom: '1rem' }}>
            <Card
                title={
                    <div>
                        <Avatar
                            style={{ marginRight: '1rem' }}
                            shape="square"
                            size="large"
                            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                        />
                        {fullName}
                    </div>
                }
                extra={
                    <Checkbox
                        onChange={() => setValue(!value)}
                        checked={value}
                    />
                }
            >
                <Meta description={email || 'test@gmail.com'} />
            </Card>
        </Col>
    );
};

export default Student;
