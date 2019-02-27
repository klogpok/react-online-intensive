// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';

export default class Login extends Component {
    render() {
        const { onLogin } = this.props;

        return (
            <section className = { Styles.login }>
                <h3>Please, log in</h3>
                <button onClick = { () => onLogin() } >Login</button>
            </section>
        );
    }
}
