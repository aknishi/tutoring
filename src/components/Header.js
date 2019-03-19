import React, { Component } from 'react'
import '../sass/main.scss';

export default class Header extends Component {
  render() {
    return (
      <div class="header">
        <div class="header__text-box">
            <h1 class="heading-primary">
                <span class="heading-primary--main">Tutoring</span>
                <span class="heading-primary--sub">Learning languages</span>
            </h1>
            <a href="#section-tours" class="btn btn--white btn--animated">Book sessions</a>
        </div>
      </div>
    )
  }
}
