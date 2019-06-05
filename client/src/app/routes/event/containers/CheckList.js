import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { Empty, Row } from 'antd';
import Student from 'app/components/Student';
import { Descriptions } from 'antd';
import withEither from 'app/hoc/withEither';
import Spinner from 'app/components/Spinner';
import withMaybe from 'app/hoc/withMaybe';
import { updateEvent } from 'app/actions/events';
const isLoadingConditionFn = props => props.isLoading;
const nullConditionFn = props => !props.students;
const isEmptyConditionFn = props => !props.students.length;

const withConditionalRenderings = compose(
    withEither(isLoadingConditionFn, Spinner),
    withMaybe(nullConditionFn),
    withEither(isEmptyConditionFn, Empty),
);

const CheckList = ({ students }) => {
    const renderList = () => {
        return students.reverse().map(item => {
            return <Student key={item._id} item={item} />;
        });
    };

    return (
        <Fragment>
            <Descriptions title="Check Attendance" />
            <Row gutter={16}>{renderList()}</Row>
        </Fragment>
    );
};

export default withConditionalRenderings(CheckList);
