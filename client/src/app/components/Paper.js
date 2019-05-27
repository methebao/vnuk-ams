import React from 'react';
import { connect } from 'react-redux';

import { Pagination } from 'antd';
import { changePage } from '../actions/uiAction';

const Paper = ({ totalPages, currentPage, onChangePage }) => {
    debugger;
    return <Pagination defaultCurrent={currentPage} total={totalPages} onChange={page => onChangePage(page)} />;
};
const mapStateToProps = state => {
    const commonUIStore = state.commonUI;
    return {
        currentPage: commonUIStore.page,
    };
};

export default connect(
    mapStateToProps,
    { onChangePage: changePage },
)(Paper);
