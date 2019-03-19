import React, { Component } from 'react'
import '../sass/main.scss';

export default class Header extends Component {
  render() {
    return (
      <header className="header" id="header">
        <div className="header__text-box">
            <h1 className="heading-primary">
                <span className="heading-primary--main">Tutoring</span>
                <span className="heading-primary--sub">Learning languages</span>
            </h1>
            <a href="#section-lang" className="btn btn--white btn--animated">Book sessions</a>
        </div>
      </header>
    )
  }
}
