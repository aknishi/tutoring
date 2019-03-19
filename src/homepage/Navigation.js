import React, { Component } from 'react'

export default class Navigation extends Component {
  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><a href="#section-about" className="navigation__link"><span>01</span>About Us</a></li>
            <li className="navigation__item"><a href="#section-features" className="navigation__link"><span>02</span>features</a></li>
            <li className="navigation__item"><a href="#section-lang" className="navigation__link"><span>03</span>Languages</a></li>
            <li className="navigation__item"><a href="#section-reviews" className="navigation__link"><span>04</span>reviews</a></li>
            <li className="navigation__item"><a href="#section-booking" className="navigation__link"><span>05</span>Book Now</a></li>
          </ul>
        </nav>
      </div>
    )
  }
}
