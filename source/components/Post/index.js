// Core
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Instruments
import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    static propTypes = {
        avatar:               PropTypes.string,
        currentUserFirstName: PropTypes.string,
        currentUserLastName:  PropTypes.string,
    }

    render() {
        const {avatar, currentUserFirstName, currentUserLastName} = this.props;

        return (
            <section className = { Styles.Post }>
                <img src = { avatar } />
                <a>{`${currentUserFirstName} ${currentUserLastName}`}</a>
                <time>{moment().format('MMMM D h:mm')}</time>
                <p>Howby!</p>
            </section>
        );
    }
}
