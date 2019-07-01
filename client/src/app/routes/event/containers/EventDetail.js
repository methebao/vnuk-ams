import React from "react";
import { compose } from "recompose";

import withMaybe from "app/hoc/withMaybe";
import withEither from "app/hoc/withEither";
import Spinner from "app/components/Spinner";
import Description from "../components/Description";
import CheckList from "./CheckList";
import CheckStatistic from "../components/CheckStatistic";

const isLoadingConditionFn = props => props.isFetching;
const nullConditionFn = props => !props.event;

const withConditionalRenderings = compose(
  withEither(isLoadingConditionFn, Spinner),
  withMaybe(nullConditionFn)
);

const EventDetail = ({ event }) => {
  // const handleOnStudentCheckToggle = studentId => {
  //   const updatedStudents = event.students.map(student => {
  //     if (student._id === studentId) {
  //       student = { ...student, isChecked: !student.isChecked };
  //     }
  //     return student;
  //   });
  //   event.students = updatedStudents;

  //   updateEvent(event);
  // };
  debugger;
  const { students } = event;
  const checkedStudents = students.filter(student => student.isChecked);
  const unCheckedStudents = students.filter(student => !student.isChecked);
  return (
    <div className="event-page">
      <div className="event-page__info">
        <div className="event-page__desc">
          <Description event={event} />
        </div>
        <div className="event-page__stats">
          <CheckStatistic
            checkedCount={checkedStudents.length}
            unCheckedCount={unCheckedStudents.length}
            total={students.length}
          />
        </div>
      </div>

      <CheckList
        students={students}
        // onCheckToggle={studentId => handleOnStudentCheckToggle(studentId)}
      />
    </div>
  );
};

export default compose(withConditionalRenderings)(EventDetail);
