import React, { Component } from 'react';
import StudentList from './containers/StudentList';
class Class extends Component {
    render() {
        debugger;
        return (
            <div className="class-page">
                <section className="hero is-primary">
                    <div className="hero-body">
                        <div className="container">
                            <h1 className="title">Primary title</h1>
                            <h2 className="subtitle">Primary subtitle</h2>
                        </div>
                    </div>
                </section>
                <StudentList classId={this.props.match.params.classId} />
            </div>
        );
    }
}

export default Class;
