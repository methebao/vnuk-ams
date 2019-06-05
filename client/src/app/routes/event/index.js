import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEventById, updateEvent } from '../../actions/events';
import Description from './components/Description';
import CheckList from './containers/CheckList';
import CheckStatistic from './components/CheckStatistic';
const Event = ({ event, fetchEventById, updateEvent, match, isFetching }) => {
    useEffect(() => {
        const { eventId } = match.params;
        fetchEventById(eventId);
    }, {});
    // const handleOnStudentCheckToggle = student => {
    //     const newStudent = {
    //         ...student,
    //         isChecked: !student.isChecked,
    //     };
    //     const updatedStudents = event.students.map(student => {
    //         if (student._id === newStudent._id) {
    //             student = newStudent;
    //         }
    //         return student;
    //     });
    //     event.students = updatedStudents;

    //     updateEvent(event);
    // };

    const testEvent = {
        eventId: '10129401294012',
        classCode: 'CODE101',
        title: 'Web Development',
        location: 'ROOM:503',
        start: Date.now(),
        end: Date.now(),
        students: [
            {
                _id: 21123421331234124,
                fullName: 'Nguyen The Vinh Bao',
                email: 'thebao.dev@gmail.com',
                isChecked: false,
            },
            {
                _id: 2112342134123124,
                fullName: 'Nguyen Van A',
                email: 'thebao.dev@gmail.com',
                isChecked: true,
            },
            {
                _id: 211234213412123214,
                fullName: 'Nguyen The B',
                email: 'thebao.dev@gmail.com',
                isChecked: false,
            },
            {
                _id: 211234213412212134,
                fullName: 'Nguyen  Vinh V',
                email: 'thebao.dev@gmail.com',
                isChecked: false,
            },
        ],
    };
    const { students } = testEvent;

    const checkedStudents = students.filter(student => student.isChecked);
    const unCheckedStudents = students.filter(student => !student.isChecked);
    return (
        <div className="event-page">
            <div className="event-page__info">
                <div className="event-page__desc">
                    <Description event={testEvent} />
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

            />
        </div>
    );
};

const mapStateToProps = state => {
    const eventPageStore = state.eventPage;
    return {
        event: eventPageStore.data.events.data,
        isFetching: eventPageStore.data.events.isFetching,
    };
};
export default connect(
    mapStateToProps,
    { fetchEventById, updateEvent },
)(Event);
