import React, { Component } from 'react';
import StudentItem from '../components/StudentItem';
import { connect } from 'react-redux';
import { fetchStudents } from 'app/actions/students';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.fetchStudents(this.props.classId);
    }
    renderList(students) {
        return students.map(({ _id, fullName, email }) => {
            return <StudentItem key={_id} fullName={fullName} email={email} />;
        });
    }
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline is-desktop ">{this.renderList(this.props.students)}</div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    students: state.students,
});
export default connect(
    mapStateToProps,
    { fetchStudents },
)(StudentList);
