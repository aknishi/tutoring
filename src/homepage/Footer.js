import React, { Component } from 'react'
import '../sass/main.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer class="footer">
        <div class="row">
          <div class="col-1-of-2">
            <div class="footer__navigation">
              <ul class="footer__list">
                <li class="footer__item"><a href="#" class="footer__link">Company</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Contact Us</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Careers</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Privacy Policy</a></li>
                <li class="footer__item"><a href="#" class="footer__link">Terms</a></li>
              </ul>
            </div>
          </div>
          <div class="col-1-of-2">
            <p class="footer__copywright">
              Built by <a href="#" class="footer__link">Adrian Kawanishi</a>. Copywright &copy; by Adrian Kawanishi. A credit to the original designer Jonas Schmedtman from the Advanced CSS Tutorial.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
