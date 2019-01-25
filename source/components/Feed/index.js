// Core
import React, { Component } from 'react';

// Components
import StatusBar from '../StatusBar';
import Composer from '../Composer';
import Post from '../Post';
import Spinner from '../Spinner';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    state = {
        posts: [
            {id: '123', comment: 'Howdy!', created: 1548437920737},
            {id: '345', comment: 'Awesome!', created: 1548437930737},
        ],
    }

    render() {
        const { posts } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                />
            );
        });

        return (
            <section className = { Styles.Feed }>
                <Spinner isSpinning />
                <StatusBar />
                <Composer />
                {postsJSX}
            </section>
        );
    }
}
