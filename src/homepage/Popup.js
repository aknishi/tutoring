import React, { Component } from 'react'
import img1 from '../img/beach2.jpg';
import img2 from '../img/fuji.jpg';
import '../sass/main.scss';

export default class Popup extends Component {
  render() {
    return (
      <div className="popup" id="popup">
        <div className="popup__content">
          <div className="popup__graphic">
            <img src={img1} alt="Beach" className="popup__image" />
              <img src={img2} alt="Mt. Fuji" className="popup__image" />
            </div>
              <div className="popup__info">
                <a href="#section-languages" className="popup__close">&times;</a>
                <h2 className="heading-secondary u-margin-bottom-small">Book a session now</h2>
                <h3 className="heading-tertiary u-margin-bottom-small ">Important &ndash; Please read these terms before booking</h3>
                <p className="popup__text">
                  Lorem ipsum dolor sit amet, impetus efficiendi ea pro. Pri choro eligendi constituam in, vel te meliore definitionem, eos
                    mundi necessitatibus ea. Est ne possim persius tacimates. Animal temporibus ei pri, sit omnis timeam
                    ea. Eum ea stet tamquam eligendi, prima fuisset temporibus ei mel, in eum congue inciderint. Ea iuvaret
                    quaeque tincidunt cum, mel iudico doming partiendo ad. Mea at mucius tritani ocurreret, oratio aliquip
                    meliore te his. Tempor conceptam in ius, sed probo laudem inimicus ex. Ius at torquatos reformidans,
                    sea ne assentior philosophia, wisi epicurei at mel. Simul putant delicatissimi cu nec.
                </p>
                <a href="#section-booking" className="btn btn--dark">Book Now</a>

              </div>
        </div>
      </div>
    )
  }
}
