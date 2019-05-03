import React from 'react';
import getFormatedTime from 'app/helpers/formatTime';
import { withRouter } from 'react-router-dom';

const ClassItem = ({ _id, name, description, course, startedTime, endedTime, updatedAt, history }) => {
    const onClassItemClicked = () => {
        history.push(`class/${_id}`);
    };
    return (
        <div className="column is-one-quarter">
            <div className="box u-hover-effect " onClick={() => onClassItemClicked()}>
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <span className="tag is-light is-medium">
                                    <strong className="is-white">{name}</strong>{' '}
                                </span>
                                <br />

                                {startedTime ? (
                                    <small>
                                        {` Period: ${getFormatedTime(startedTime)} - ${getFormatedTime(endedTime)}`}
                                    </small>
                                ) : null}

                                <br />
                                <strong>Course: </strong>
                                {course.name}
                                <br />
                                <strong>Description: </strong>
                                {description}
                                <br />
                                <small>{getFormatedTime(updatedAt)}</small>
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default withRouter(ClassItem);
