import React, { Component } from 'react'
import '../sass/main.scss';

export default class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item"><a href="#company" className="footer__link">Company</a></li>
                <li className="footer__item"><a href="#contact" className="footer__link">Contact Us</a></li>
                <li className="footer__item"><a href="#careers" className="footer__link">Careers</a></li>
                <li className="footer__item"><a href="#policy" className="footer__link">Privacy Policy</a></li>
                <li className="footer__item"><a href="#terms" className="footer__link">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copywright">
              Built by <a href="#aknishi" className="footer__link">Adrian Kawanishi</a>. Copywright &copy; by Adrian Kawanishi. A credit to the original designer Jonas Schmedtman from the Advanced CSS Tutorial.
            </p>
          </div>
        </div>
      </footer>
    )
  }
}
