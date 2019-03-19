import React, { Component } from 'react'

export default class Languages extends Component {
  render() {
    return (
      <section class="section-lang" id="section-lang">
        <div class="u-center-text u-margin-bottom-big">
          <h2 class="heading-secondary">
            Languages
          </h2>
        </div>

        <div class="row">
          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--1">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--1">Spanish</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>Save $ on group sessions</li>
                    <li>Writing</li>
                    <li>Grammar</li>
                    <li>Conversational</li>
                    <li>Beginner to Advanced</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-1">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">
                      Only
                    </p>
                    <p class="card__price-value">
                      $40
                    </p>
                  </div>
                  <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--2">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--2">Japanese</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>Save $ on group sessions</li>
                    <li>Writing</li>
                    <li>Grammar</li>
                    <li>Conversational</li>
                    <li>Beginner to Intermediate</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-2">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">
                      Only
                    </p>
                    <p class="card__price-value">
                      $35
                    </p>
                  </div>
                  <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-1-of-3">
            <div class="card">
              <div class="card__side card__side--front">
                <div class="card__picture card__picture--3">
                  &nbsp;
                </div>
                <h4 class="card__heading">
                  <span class="card__heading-span card__heading-span--3">English</span>
                </h4>
                <div class="card__details">
                  <ul>
                    <li>Save $ on group sessions</li>
                    <li>Writing</li>
                    <li>Grammar</li>
                    <li>Conversational</li>
                    <li>From Spanish or Japanese</li>
                  </ul>
                </div>
              </div>
              <div class="card__side card__side--back card__side--back-3">
                <div class="card__cta">
                  <div class="card__price-box">
                    <p class="card__price-only">
                      Only
                    </p>
                    <p class="card__price-value">
                      $40
                    </p>
                  </div>
                  <a href="#popup" class="btn btn--white">Book now!</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="u-center-text u-margin-top-huge">
          <a href="#section-lang" class="btn btn--green">Book a session</a>
        </div>
      </section>
    )
  }
}
