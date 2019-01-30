// Core
import React, { Component } from 'react';
import { string, func, arrayOf, shape } from 'prop-types';

// Instruments
import Styles from './styles.m.css';
import cx from 'classnames';


class Like extends Component {
  static propTypes = {
      id:        string.isRequired,
      _likePost: func.isRequired,
      likes:     arrayOf(
          shape({
              id:        string.isRequired,
              firstName: string.isRequired,
              lastName:  string.isRequired,
          }),
      ),
      currentUserFirstName: string.isRequired,
      currentUserLastName:  string.isRequired,
  }

  constructor() {
      super();

      this._getLikeByMe = this._getLikeByMe.bind(this);
      this._getLikeStyles = this._getLikeStyles.bind(this);
      this._likePost = this._likePost.bind(this);
      this._showLikers = this._showLikers.bind(this);
      this._hideLikers = this._hideLikers.bind(this);
      this._getLikerList = this._getLikerList.bind(this);
      this._getLikesDescription = this._getLikesDescription.bind(this);
  }

  state = {
      showLikers: false,
  }

  _showLikers () {
      this.setState({ showLikers: true });
  }

  _hideLikers () {
      this.setState({ showLikers: false });
  }

  _likePost() {
      const { id, _likePost } = this.props;

      _likePost(id);
  }

  _getLikeByMe() {
      const { currentUserFirstName, currentUserLastName, likes } = this.props;

      return likes.some((like) => {
          return `${like.firstName} ${like.lastName}` === `${currentUserFirstName} ${currentUserLastName}`;
      });
  }

  _getLikeStyles() {
      const likeByMe = this._getLikeByMe();

      return cx(Styles.icon, {
          [ Styles.liked ]: likeByMe,
      });
  }

  _getLikerList() {
      const { showLikers } = this.state;
      const { likes } = this.props;

      const likesJSX = likes.map(({ firstName, lastName, id}) => (
          <li key = { id }>{`${firstName} ${lastName}`}</li>
      ));

      return likes.length && showLikers ? <ul>{likesJSX}</ul> : null;
  }

  _getLikesDescription() {
      const { likes, currentUserFirstName, currentUserLastName } = this.props;

      const likeByMe = this._getLikeByMe();

      if (likes.length === 1 && likeByMe) {
          return `${currentUserFirstName} ${currentUserLastName}`;
      } else if (likes.length === 2 && likeByMe) {
          return `You and ${likes.length - 1} other`;
      } else if (likeByMe) {
          return `You and ${likes.length - 1} others`;
      }

      return likes.length;
  }

  render() {
      const likeStyles = this._getLikeStyles();
      const likersList = this._getLikerList();
      const getLikesDescription = this._getLikesDescription();

      return (
          <section className = { Styles.like }>
              <span
                  className = { likeStyles }
                  onClick = { this._likePost }>
                Like
              </span>
              <div>
                  {likersList}
                  <span
                      onMouseEnter = { this._showLikers }
                      onMouseLeave = { this._hideLikers }>
                      { getLikesDescription }
                  </span>
              </div>
          </section>
      );
  }
}

export default Like;
