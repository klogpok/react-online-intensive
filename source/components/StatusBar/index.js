// Core
import React, { Component } from 'react';
//import { string } from 'prop-types';

// Components
import { Consumer } from '../HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

export default class index extends Component {
    render() {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.StatusBar }>
                        <button>
                            <img src = { context.avatar } />
                            <span>{context.currentUserFirstName}</span>
                            &nbsp;
                            <span>{context.currentUserLastName}</span>
                        </button>

                    </section>
                )}
            </Consumer>
        );
    }
}
