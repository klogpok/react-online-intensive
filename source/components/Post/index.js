// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        comment: PropTypes.string.isRequired,
        created: PropTypes.number.isRequired,
    }

    render() {
        const {comment, created} = this.props;

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.Post }>
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment.unix(created).format('MMMM D h:mm')}</time>
                        <p>{comment}</p>
                    </section>
                )}
            </Consumer>
        );
    }
}
