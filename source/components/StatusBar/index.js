// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Components
import { withProfile } from '../HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

@withProfile
export default class index extends Component {
    static propTypes = {
        avatar:               string.isRequired,
        currentUserFirstName: string.isRequired,
        currentUserLastName:  string.isRequired,
    }

    render() {
        const { avatar, currentUserFirstName, currentUserLastName} = this.props;

        return (
            <section className = { Styles.StatusBar }>
                <button>
                    <img src = { avatar } />
                    <span>{currentUserFirstName}</span>
                            &nbsp;
                    <span>{currentUserLastName}</span>
                </button>
            </section>

        );
    }
}
