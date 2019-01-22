// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

export default class Composer extends Component {
    static contextTypes = {
        avatar:               string,
        currentUserFirstName: string,
    }

    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.Composer }>
                        <img src = { context.avatar } />
                        <form>
                            <textarea placeholder = { `What\'s on your mind, ${context.currentUserFirstName}?` }></textarea>
                            <input
                                type = 'submit'
                                value = 'Post'
                            />
                        </form>
                    </section>
                )}
            </Consumer>
        );
    }
}
