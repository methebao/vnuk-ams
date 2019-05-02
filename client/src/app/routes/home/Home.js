import React from 'react';
import ClassList from './containers/ClassList';

const Home = () => (
    <div className="home-page">
        <section className="hero is-primary">
            <div className="hero-body">
                <div className="container">
                    <h1 className="title">Primary title</h1>
                    <h2 className="subtitle">Primary subtitle</h2>
                </div>
            </div>
        </section>
        <ClassList />
    </div>
);
export default Home;
