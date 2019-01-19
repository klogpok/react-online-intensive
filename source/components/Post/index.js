// Core
import React, { Component } from 'react';

// Instruments
import avatar from 'theme/assets/bob.png';
import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        return (
            <section className = { Styles.Post }>
                <img src = { avatar } />
                <a>Spongebob</a>
                <time>{moment().format('MMMM D h:mm')}</time>
                <p>Howby!</p>
            </section>
        );
    }
}
