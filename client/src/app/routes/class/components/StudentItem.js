import React from 'react';

const StudentItem = ({ fullName, email }) => {
    return (
        <div className="column is-half">
            <div className="box u-hover-effect ">
                <article className="media">
                    <div className="media-content">
                        <div className="content">
                            <p>
                                <span className="tag is-light is-medium">
                                    <strong className="is-white">{fullName}</strong>{' '}
                                </span>
                                <br />

                                <strong>Email: </strong>
                                {email}
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default StudentItem;
