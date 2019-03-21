import React, { Component } from 'react'
import '../sass/main.scss';
import '../css/icon-font.css';

export default class Features extends Component {
  render() {
    return (
      <section className="section-features" id="section-features">
        <div className="row">
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-world"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
              <p className="feature-box__text">
                We want you to explore your destinations to the fullest, so be ready to find that special place that's waiting for you.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-compass"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Be adventurous</h3>
              <p className="feature-box__text">
                Be readu tp jump to your next adventure. Life is short so talk to strangers and learn new things.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-map"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
              <p className="feature-box__text">
                If you know how to ask for directions you will always be able to find your way or new ways to your destination.
              </p>
            </div>
          </div>
          <div className="col-1-of-4">
            <div className="feature-box">
              <i className="feature-box__icon icon-basic-heart"></i>
              <h3 className="heading-tertiary u-margin-bottom-small">Build relationships</h3>
              <p className="feature-box__text">
                The best way to get to know people is speaking their language. Build new friends around the world!
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
