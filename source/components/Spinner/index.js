// Core
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { bool} from 'prop-types';

// Instruments
import Styles from './styles.m.css';

const portal = document.getElementById('spinner');

export default class Spinner extends Component {
    static propTypes = {
        isPostFetching: bool.isRequired,
    }

    render() {
        const { isPostFetching } = this.props;

        return createPortal(
            isPostFetching ? <div className = { Styles.Spinner }/> : null,
            portal,
        );
    }
}
