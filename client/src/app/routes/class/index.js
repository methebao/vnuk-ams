import React, { useEffect } from "react";
import { Row, Col, Descriptions, Card } from "antd";
import { getFormattedTime } from "app/helpers/formatTime";
import StudentList from "./containers/StudentList";
import { connect } from "react-redux";
import { fetchStudents } from "app/actions/students";
import { fetchEventsByClassId } from "app/actions/events";
import { fetchClassById } from "app/actions/classes";
import { getDateFromString } from "app/helpers/formatTime";
// TODO: Change Class to display Calendar with events of specific classCode.
// TODO: Create another route & components to handle class management ( list student with attendance stastitics  )
const Class = ({
  students,
  classItem,
  events,
  fetchClassById,
  fetchStudents,
  fetchEventsByClassId,
  match,
  isFetching
}) => {
  const processAbsentsForStudent = mainStudent => {
    let newStudent = mainStudent;
    let attendance = 0;
    let absent = 0;
    events.forEach(({ end, students }) => {
      let eventEndDate = getDateFromString(end);
      let now = Date.now();

      students.forEach(({ user, isChecked }) => {
        if (newStudent._id === user) {
          if (now > eventEndDate && !isChecked) {
            absent += 1;
          } else if (isChecked) {
            attendance += 1;
          }
        }
      });
    });
    newStudent.attendance = attendance;
    newStudent.absent = absent;
    return newStudent;
  };
  const getFinalStudents = students => {
    return students.map(student => processAbsentsForStudent(student));
  };
  useEffect(() => {
    const { classId } = match.params;
    fetchClassById(classId);
    fetchEventsByClassId(classId, () => {
      fetchStudents(classId);
    });
  }, []);
  let renderStudents = null;
  if (events && events.length > 0 && students && students.length > 0) {
    renderStudents = getFinalStudents(students);
    console.log(renderStudents);
  }
  return (
    <div className="class-page">
      <Row>
        <Col xs={24} sm={24} md={24} lg={24} xl={6}>
          <div className="class-page__description">
            <Card>
              <Descriptions
                title={`Class: ${classItem && classItem.name}`}
                border
                column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
              >
                <Descriptions.Item label="ClassCode">
                  {classItem && classItem.classCode}
                </Descriptions.Item>
                <Descriptions.Item label="Started Time">
                  {classItem && getFormattedTime(classItem.startedTime)}
                </Descriptions.Item>
                <Descriptions.Item label="Ended Time">
                  {classItem && getFormattedTime(classItem.endedTime)}
                </Descriptions.Item>
                <Descriptions.Item label="Number of lessons">
                  {events && events.length}
                </Descriptions.Item>
              </Descriptions>
            </Card>
          </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24} xl={18}>
          {renderStudents && (
            <StudentList
              numberOfEvents={events.length}
              students={renderStudents}
              isLoading={isFetching}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};

const mapStateToProps = state => {
  const classPageStore = state.classPage;
  return {
    classItem: classPageStore.data.class.data,
    students: classPageStore.data.students.data,
    events: classPageStore.data.events.data,
    isFetching: classPageStore.data.students.isFetching
  };
};
export default connect(
  mapStateToProps,
  { fetchClassById, fetchStudents, fetchEventsByClassId }
)(Class);
