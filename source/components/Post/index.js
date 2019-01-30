// Core
import React, { Component } from 'react';
import { string, number, func, array } from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';
import Like from '../Like';

// Instruments
import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        comment:   string.isRequired,
        created:   number.isRequired,
        id:        string.isRequired,
        _likePost: func.isRequired,
        likes:     array.isRequired,
    }

    render() {
        const {comment, created, id, _likePost, likes} = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.post }>
                        <span className = { Styles.cross }>X</span>
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D H:mm')}</time>
                        <p>{comment}</p>
                        <Like
                            _likePost = { _likePost }
                            id = { id }
                            likes = { likes }
                            { ...context }
                        />
                    </section>
                )}
            </Consumer>
        );
    }
}
