import React, { Component } from 'react';
import ClassItem from '../components/ClassItem';
import { connect } from 'react-redux';
import { fetchClasses } from 'app/actions/classes';

class ClassList extends Component {
    componentDidMount() {
        this.props.fetchClasses();
    }
    renderList(classes) {
        return classes.map(({ _id, name, description, course, startedTime, endedTime, updatedAt }) => {
            return (
                <ClassItem
                    key={_id}
                    _id={_id}
                    name={name}
                    description={description}
                    course={course}
                    startedTime={startedTime}
                    endedTime={endedTime}
                    updatedAt={updatedAt}
                />
            );
        });
    }
    render() {
        return (
            <section className="section">
                <div className="container">
                    <div className="columns is-multiline is-desktop ">{this.renderList(this.props.classes)}</div>
                </div>
            </section>
        );
    }
}
const mapStateToProps = state => ({
    classes: state.classes,
});
export default connect(
    mapStateToProps,
    { fetchClasses },
)(ClassList);
