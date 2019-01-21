// Core
import React, { Component } from 'react';

// Instruments
import Styles from './styles.m.css';
import avatar from '../../theme/assets/bob.png';

export default class index extends Component {
    render() {
        return (
            <section className = { Styles.StatusBar }>
                <button>
                    <img src = { avatar } />
                    <span>Bob</span>
                    &nbsp;
                    <span>Sponge</span>
                </button>

            </section>
        );
    }
}
