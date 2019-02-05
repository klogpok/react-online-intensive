// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Components
import { withProfile } from '../HOC/withProfile';
import Catcher from '../Catcher';
import StatusBar from '../StatusBar';
import Composer from '../Composer';
import Post from '../Post';
import Spinner from '../Spinner';

// Instruments
import Styles from './styles.m.css';
import { api, TOKEN } from '../../config/api';

@withProfile
export default class Feed extends Component {
    static propTypes = {
        currentUserFirstName: string.isRequired,
        currentUserLastName:  string.isRequired,
    }

    state = {
        posts:          [],
        isPostFetching: false,
    }

    componentDidMount() {
        this._fetchPosts();
        this.refetch = setInterval(this._fetchPosts, 10000);
    }

    componentWillUnmount() {
        clearInterval(this.refetch);
    }

    _setPostFetchingState = (state) => {
        this.setState({
            isPostFetching: state,
        });
    }

    _fetchPosts = async () => {
        this._setPostFetchingState(true);

        const response = await fetch(api, {
            method: 'GET',
        });

        const { data: posts } = await response.json();

        this.setState({
            posts,
            isPostFetching: false,
        });
    }

    _createPost = async (comment) => {
        this._setPostFetchingState(true);

        const response = await fetch(api, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  TOKEN,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: post } = await response.json();

        this.setState(({posts}) => ({
            posts:          [ post, ...posts ],
            isPostFetching: false,
        }));
    }

    _likePost = async (id) => {
        this._setPostFetchingState(true);

        const response = await fetch(`${api}/${id}`, {
            method:  'PUT',
            headers: {
                Authorization: TOKEN,
            },
        });

        const { data: likedPost } = await response.json();

        this.setState(({ posts }) => ({
            posts:          posts.map((post) => post.id === likedPost.id ? likedPost : post),
            isPostFetching: false,
        }));
    }

    _removePost =  async (id) => {
        this._setPostFetchingState(true);

        await fetch(`${api}/${id}`, {
            method:  'DELETE',
            headers: {
                Authorization: TOKEN,
            },
        });

        this.setState(({ posts }) => ({
            posts:          posts.filter((post) => post.id !== id),
            isPostFetching: false,
        }));
    }

    render() {
        const { posts, isPostFetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Catcher key = { post.id }>
                    <Post
                        { ...post }
                        _likePost = { this._likePost }
                        _removePost = { this._removePost }
                    />
                </Catcher>
            );
        });

        return (
            <section className = { Styles.Feed }>
                <Spinner isPostFetching = { isPostFetching } />
                <StatusBar />
                <Composer _createPost = { this._createPost }/>
                {postsJSX}
            </section>
        );
    }
}
