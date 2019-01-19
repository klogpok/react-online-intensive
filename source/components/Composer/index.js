// Core
import React, { Component } from 'react';
import avatar from 'theme/assets/bob.png';

// Instruments
import Styles from './styles.m.css';

export default class Feed extends Component {
    render() {
        return (
            <section className = { Styles.Composer }>
                <img src = { avatar } />
                <form>
                    <textarea placeholder = { 'What\'s on your mind, Bob?' }></textarea>
                    <input
                        type = 'submit'
                        value = 'Post'
                    />
                </form>
            </section>
        );
    }
}
