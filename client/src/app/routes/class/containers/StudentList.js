import React, { Component } from 'react';
import { compose } from 'recompose';

import StudentItem from '../components/StudentItem';
import { Empty, Row } from 'antd';
import withEither from '../../../hoc/withEither';
import Spinner from '../../../components/Spinner';
import withMaybe from '../../../hoc/withMaybe';

const isLoadingConditionFn = props => props.isLoading;
const nullConditionFn = props => !props.students;
const isEmptyConditionFn = props => !props.students.length;

const withConditionalRenderings = compose(
    withEither(isLoadingConditionFn, Spinner),
    withMaybe(nullConditionFn),
    withEither(isEmptyConditionFn, Empty),
);

const StudentList = ({ students }) => {
    const renderList = () => {
        return students.reverse().map(item => {
            return <StudentItem key={item._id} item={item} />;
        });
    };

    return <Row gutter={16}>{renderList()}</Row>;
};

export default withConditionalRenderings(StudentList);
