import React, { Component } from 'react'
import '../sass/main.scss';
import img1 from '../img/profile1.jpg';
import img2 from '../img/profile2.jpg';

export default class Reviews extends Component {
  render() {
    return (
      <section className="section-reviews" id="section-reviews">
        <div className="section-reviews__background">
        </div>
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            We will help you have a better experience
            </h2>
        </div>
        <div className="row">
          <div className="review">
            <figure className="review__shape">
              <img src={img1} alt="Person on a tour" className="review__img" />
              <figcaption className="review__caption">Lucy Smith</figcaption>
            </figure>
            <div className="review__text ">
              <h3 className="heading-tertiary u-margin-bottom-small ">I had the best 3 months thanks to this program</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo accusamus quas fugit reprehenderit tempore eum eaque vero dignissimos quis excepturi temporibus adipisicing elit. Maiores explicabo accusamus quod illo non optio iusto, alias totam.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="review">
            <figure className="review__shape">
              <img src={img2} alt="Person on a tour" className="review__img" />
              <figcaption className="review__caption">Jack Johnson</figcaption>
            </figure>
            <div className=" review__text ">
              <h3 className="heading-tertiary u-margin-bottom-small ">I met the love of my life</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo accusamus quas fugit reprehenderit tempore eumum eaque vero dignissimos quis excepturi temporibus adipisicing elit. Maiores explicabo accusamus quod illo non optio iusto, alias totam.
              </p>
            </div>
          </div>
        </div>
        <div className="u-center-text u-margin-top-huge">
          <a href="#section-reviews" className="btn-text">Read all reviews &rarr;</a>
        </div>
      </section>
    )
  }
}
