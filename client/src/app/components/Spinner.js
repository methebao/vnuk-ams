import React from 'react';
import { Spin } from 'antd';

const Spinner = () => {
    return (
        <div style={{ textAlign: 'center' }}>
            <Spin size="large" />
        </div>
    );
};

export default Spinner;
