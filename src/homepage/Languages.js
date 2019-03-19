import React, { Component } from 'react'

export default class Languages extends Component {
  render() {
    return (
      <section className="section-lang" id="section-lang">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Languages
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">Spanish</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Save $ on group sessions</li>
                    <li>Writing</li>
                    <li>Grammar</li>
                    <li>Conversational</li>
                    <li>Beginner to Advanced</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-1">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">
                      Only
                    </p>
                    <p className="card__price-value">
                      $40
                    </p>
                  </div>
                  <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--2">Japanese</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Save $ on group sessions</li>
                    <li>Writing</li>
                    <li>Grammar</li>
                    <li>Conversational</li>
                    <li>Beginner to Intermediate</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-2">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">
                      Only
                    </p>
                    <p className="card__price-value">
                      $35
                    </p>
                  </div>
                  <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1-of-3">
            <div className="card">
              <div className="card__side card__side--front">
                <div className="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--3">English</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Save $ on group sessions</li>
                    <li>Writing</li>
                    <li>Grammar</li>
                    <li>Conversational</li>
                    <li>From Spanish or Japanese</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back card__side--back-3">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">
                      Only
                    </p>
                    <p className="card__price-value">
                      $40
                    </p>
                  </div>
                  <a href="#popup" className="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-top-huge">
          <a href="#section-lang" className="btn btn--green">Book a session</a>
        </div>
      </section>
    )
  }
}
