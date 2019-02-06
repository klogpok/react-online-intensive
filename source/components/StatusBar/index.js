// Core
import React, { Component } from 'react';
import { string } from 'prop-types';

// Components
import { withProfile } from '../HOC/withProfile';

// Instruments
import Styles from './styles.m.css';
import { socket } from '../../socket/init';
import cx from 'classnames';

class StatusBar extends Component {
    static propTypes = {
        avatar:               string.isRequired,
        currentUserFirstName: string.isRequired,
        currentUserLastName:  string.isRequired,
    }

    state = {
        online: false,
    };

    componentDidMount() {
        socket.on('connect', () => {
            this.setState({
                online: true,
            });
        });

        socket.on('disconnect', () => {
            this.setState({
                online: false,
            });
        });
    }

    componentWillUnmount() {
        socket.removeListener('connect');
        socket.removeListener('disconnect');
    }

    render() {
        const { avatar, currentUserFirstName, currentUserLastName} = this.props;

        const { online } = this.state;

        const statusStyle = cx(Styles.status, {
            [ Styles.online ]:  online,
            [ Styles.offline ]: !online,
        });

        const statusMessage = online ? 'Online' : 'Offline';

        return (
            <section className = { Styles.StatusBar }>
                <div className = { statusStyle }>
                    <div>{ statusMessage }</div>
                    <span />
                </div>

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

export default withProfile(StatusBar);
