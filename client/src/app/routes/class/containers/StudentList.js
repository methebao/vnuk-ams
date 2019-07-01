import React, { Component } from "react";
import { compose } from "recompose";
import { Table, Divider, Tag } from "antd";

import StudentItem from "../components/StudentItem";
import { Empty, Row } from "antd";
import withEither from "../../../hoc/withEither";
import Spinner from "../../../components/Spinner";
import withMaybe from "../../../hoc/withMaybe";

const isLoadingConditionFn = props => props.isLoading;
const nullConditionFn = props => !props.students;
const isEmptyConditionFn = props => !props.students.length;

const withConditionalRenderings = compose(
  withEither(isLoadingConditionFn, Spinner),
  withMaybe(nullConditionFn),
  withEither(isEmptyConditionFn, Empty)
);

const StudentList = ({ numberOfEvents, students }) => {
  const columns = [
    {
      title: "Student Name",
      dataIndex: "studentName",
      key: "studentName"
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email"
    },
    {
      title: "Checked sessions",
      dataIndex: "check",
      key: "check"
    },
    {
      title: "Unchecked sessions",
      dataIndex: "uncheck",
      key: "uncheck"
    },
    {
      title: "Absents ",
      dataIndex: "absent",
      key: "absent"
    }
  ];

  const data = students.map(({ _id, fullName, email, attendance, absent }) => {
    return {
      key: _id,
      studentName: fullName,
      email,
      check: attendance,
      uncheck: numberOfEvents - attendance,
      absent: absent
    };
  });
  const renderList = () => {
    return students.reverse().map(item => {
      return <StudentItem key={item._id} item={item} />;
    });
  };
  return <Table columns={columns} dataSource={data} />;
};

export default withConditionalRenderings(StudentList);
