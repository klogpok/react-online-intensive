// Core
import React, { Component } from 'react';


// Instruments
import { object } from 'prop-types';
import Styles from './styles.m.css';

export default class Catcher extends Component {
  static propTypes = {
      children: object.isRequired,
  }

  state = {
      error: false,
  }

  componentDidCatch(error, stack) {
      console.log('ERROR: ', error);
      console.log('STACKTRACE: ', stack.componentStack);

      this.setState({
          error: true,
      });
  }

  render() {
      //console.log('-> catcher');

      if (this.state.error) {
          return (
              <section className = { Styles.catcher }>
                  <span>A unknown error occured. </span>
                  <p>
                    We work hard to correct this error...
                  </p>
              </section>
          );
      }

      return this.props.children;
  }
}
