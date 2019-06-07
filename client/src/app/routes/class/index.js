import React, { useEffect } from 'react';
import StudentList from './containers/StudentList';
import { connect } from 'react-redux';
import { fetchStudents } from '../../actions/students';

// TODO: Change Class to display Calendar with events of specific classCode.
// TODO: Create another route & components to handle class management ( list student with attendance stastitics  )
const Class = ({ students, fetchStudents, match, isFetching }) => {
    useEffect(() => {
        const { classId } = match.params;
        fetchStudents(classId);
    }, []);

    return (
        <div className="class-page">
            <StudentList students={students} isLoading={isFetching} />
        </div>
    );
};

const mapStateToProps = state => {
    const classPageStore = state.classPage;
    return {
        students: classPageStore.data.students.data,
        isFetching: classPageStore.data.students.isFetching,
    };
};
export default connect(
    mapStateToProps,
    { fetchStudents },
)(Class);