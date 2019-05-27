import React from 'react';
import { compose } from 'recompose';
import withMaybe from 'app/hoc/withMaybe';
import withEither from 'app/hoc/withEither';
import ClassItem from '../components/ClassItem';
import { Empty, Row } from 'antd';
import Spinner from 'app/components/Spinner';
import QueueAnim from 'rc-queue-anim';

const isLoadingConditionFn = props => props.isLoading;
const nullConditionFn = props => !props.classes;
const isEmptyConditionFn = props => !props.classes.length;

const withConditionalRenderings = compose(
    withEither(isLoadingConditionFn, Spinner),
    withMaybe(nullConditionFn),
    withEither(isEmptyConditionFn, Empty),
);

const ClassList = ({ classes }) => {
    const renderList = () => {
        return classes.reverse().map(item => {
            return <ClassItem key={item._id} item={item} />;
        });
    };
    return (
        <Row gutter={16}>
            <QueueAnim>{renderList()}</QueueAnim>
        </Row>
    );
};

export default withConditionalRenderings(ClassList);
