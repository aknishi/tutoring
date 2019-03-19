import React, { Component } from 'react'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  componentDidMount() {
    this.setState({checked: false})
  }

  toggle() {
    this.setState({
      checked: !this.state.checked
    })
  }

  render() {
    const items = [['About Us', 'about'], ['Features', 'features'], ['Languages', 'lang'], ['Reviews', 'reviews'], ['Book Now', 'booking']];
    const listItems = items.map(([text, link]) => (
      <li className="navigation__item"
           onClick={() => this.toggle()}
      >
        <a href={`#section-${link}`} className="navigation__link">
        <span>01</span>{text}</a>
      </li>
    ));

    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" checked={this.state.checked}/>
        <label htmlFor="navi-toggle" className="navigation__button" onClick={() => this.toggle()}>
        <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            {listItems}
          </ul>
        </nav>
      </div>
    )
  }
}
