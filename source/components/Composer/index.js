import React, { Component } from 'react';
import avatar from 'theme/assets/bob.png';

export default class Feed extends Component {
    render() {
        return (
            <section>
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
