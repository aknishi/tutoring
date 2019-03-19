import React, { Component } from 'react'
import '../sass/main.scss';
import photo1 from '../img/mex-1.jpg';
import photo1lrg from '../img/mex-1-large.jpg';
import photo2 from '../img/mex-2.jpg';
import photo2lrg from '../img/mex-2-large.jpg';
import photo3 from '../img/mex-3.jpg';
import photo3lrg from '../img/mex-3-large.jpg';

export default class About extends Component {
  render() {
    return (
      <section className="section-about" id="section-about">
        <div className="u-center-text u-margin-bottom-big">
          <h2 className="heading-secondary">
            Learn the language and prepare to travel
          </h2>
        </div>

        <div className="row">
          <div className="col-1-of-2">
            <h3 className="heading-tertiary u-margin-bottom-small">You will be able to talk with locals</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores explicabo accusamus quod illo non optio iusto, alias totam quas fugit reprehenderit tempore eum, cum eaque vero dignissimos quis excepturi temporibus.
            </p>
            <h3 className="heading-tertiary u-margin-bottom-small">You will be able to read directions and discover new places</h3>
            <p className="paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi distinctio explicabo cupiditate at officia magni praesentium.
            </p>
            <a href="#" className="btn-text">Learn more &rarr;</a>
          </div>
          <div className="col-1-of-2">
            <div className="composition">
              <img srcset={`${photo1} 300w, ${photo1lrg} 1000w`}
                  sizes="(max-width: 56.25em) 20vw (max-width: 37.5em) 30vw, 18.25em"
                  alt="Photo1"
                  className="composition__photo composition__photo--p1"
                  src="img/mex-1-large.jpg" />
              <img srcset={`${photo2} 300w, ${photo2lrg} 1000w`}
                  sizes="(max-width: 56.25em) 20vw (max-width: 37.5em) 30vw, 18.25em"
                  alt="Photo2"
                  className="composition__photo composition__photo--p2"
                  src="img/mex-2-large.jpg" />
              <img srcset={`${photo3} 300w, ${photo3lrg} 1000w`}
                  sizes="(max-width: 56.25em) 20vw (max-width: 37.5em) 30vw, 18.25em"
                  alt="Photo3"
                  className="composition__photo composition__photo--p3"
                  src="img/nat-3-large.jpg" />
            </div>
          </div>
        </div>
      </section>
    )
  }
}
