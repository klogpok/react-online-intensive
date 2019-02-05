// Core
import React, { Component } from 'react';
import { string, number, func, array } from 'prop-types';

// Components
import { withProfile } from '../HOC/withProfile';
import Like from '../Like';

// Instruments
import moment from 'moment';
import Styles from './styles.m.css';

@withProfile
export default class Post extends Component {
    static propTypes = {
        comment:     string.isRequired,
        created:     number.isRequired,
        id:          string.isRequired,
        _likePost:   func.isRequired,
        likes:       array.isRequired,
        _removePost: func.isRequired,
        avatar:      string.isRequired,
        firstName:   string.isRequired,
        lastName:    string.isRequired,
    }

    constructor() {
        super();

        this._removePost = this._removePost.bind(this);
    }

    _getCross = () => {
        const { firstName, lastName, currentUserFirstName, currentUserLastName} = this.props;

        return `${firstName} ${lastName}` === `${currentUserFirstName} ${currentUserLastName}` ? (
            <span
                className = { Styles.cross }
                onClick = { this._removePost }>
            </span>)
            : null;
    }


    _removePost = () => {
        const { id, _removePost } = this.props;

        _removePost(id);
    }

    render() {
        const {
            comment,
            created,
            id,
            _likePost,
            likes,
            avatar,
            firstName,
            lastName } = this.props;

        const cross = this._getCross();

        return (
            <section className = { Styles.post }>
                { cross }
                <img src = { avatar } />
                <a>{`${firstName} ${lastName}`}</a>
                <time>{moment.unix(created).format('MMMM D H:mm')}</time>
                <p>{comment}</p>
                <Like
                    _likePost = { _likePost }
                    id = { id }
                    likes = { likes }
                />
            </section>
        );
    }
}
