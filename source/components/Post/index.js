import React, { Component } from 'react';
import avatar from 'theme/assets/bob.png';
import moment from 'moment';

export default class Post extends Component {
    render() {
        return (
            <section>
                <img src = { avatar } />
                <a>Spongebob</a>
                <time>{moment().format('MMMM D h:mm')}</time>
                <p>Howby!</p>
            </section>
        );
    }
}
