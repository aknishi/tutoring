import React, { Component } from 'react'
import img1 from '../img/beach2.jpg';
import img2 from '../img/fuji.jpg';
import '../sass/main.scss';

export default class Popup extends Component {
  render() {
    return (
      <div class="popup" id="popup">
        <div class="popup__content">
          <div class="popup__graphic">
            <img src={img1} alt="Beach" class="popup__image" />
              <img src={img2} alt="Mt. Fuji" class="popup__image" />
            </div>
              <div class="popup__info">
                <a href="#section-languages" class="popup__close">&times;</a>
                <h2 class="heading-secondary u-margin-bottom-small">Book a session now</h2>
                <h3 class="heading-tertiary u-margin-bottom-small ">Important &ndash; Please read these terms before booking</h3>
                <p class="popup__text">
                  Lorem ipsum dolor sit amet, impetus efficiendi ea pro. Pri choro eligendi constituam in, vel te meliore definitionem, eos
                    mundi necessitatibus ea. Est ne possim persius tacimates. Animal temporibus ei pri, sit omnis timeam
                    ea. Eum ea stet tamquam eligendi, prima fuisset temporibus ei mel, in eum congue inciderint. Ea iuvaret
                    quaeque tincidunt cum, mel iudico doming partiendo ad. Mea at mucius tritani ocurreret, oratio aliquip
                    meliore te his. Tempor conceptam in ius, sed probo laudem inimicus ex. Ius at torquatos reformidans,
                    sea ne assentior philosophia, wisi epicurei at mel. Simul putant delicatissimi cu nec.
                </p>
                <a href="#" class="btn btn--green">Book Now</a>

              </div>
        </div>
      </div>
    )
  }
}
