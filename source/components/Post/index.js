// Core
import React, { Component } from 'react';
//import { string } from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import moment from 'moment';
import Styles from './styles.m.css';

export default class Post extends Component {
    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.Post }>
                        <img src = { context.avatar } />
                        <a>{`${context.currentUserFirstName} ${context.currentUserLastName}`}</a>
                        <time>{moment().format('MMMM D h:mm')}</time>
                        <p>Howby!</p>
                    </section>
                )}
            </Consumer>
        );
    }
}
