import React, { Component } from 'react';
import '../sass/main.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
library.add(faAngleUp);
library.add(faAngleDown);



class Dropdown extends Component {
  constructor(props){
    super(props)

    this.state = {
      listOpen: false,
      headerTitle: this.props.title
    }

    this.close = this.close.bind(this);
  }

  componentDidUpdate() {
    const { listOpen } = this.state
    setTimeout(() => {
      if (listOpen) {
        window.addEventListener('click', this.close)
      }
      else {
        window.removeEventListener('click', this.close)
      }
    }, 0)
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.close)
  }


  close() {
    this.setState({
      listOpen: false
    })
  }

  toggleList() {
    this.setState(prevState => ({
      listOpen: !prevState.listOpen
    }))
  }

  selectItem(lang) {
    this.setState({
      headerTitle: lang,
      listOpen: false
    });
  }


  render() {
    const { list } = this.props;
    const { listOpen, headerTitle } = this.state;

    return(
      <div className="dd">
        <div className="dd__header" onClick={() => this.toggleList()}>
          <div className="dd__header-title">{headerTitle}</div>
          {listOpen
            ? <FontAwesomeIcon icon="angle-up" className="angle-up" size="2x" />
            : <FontAwesomeIcon icon="angle-down" className="angle-down" size="2x" />
          }
        </div>
        {listOpen && <ul className="dd__list" onClick={e => e.stopPropagation()}>
          {list.map((item) => (
            <li className="dd__list-item" key={item.id}
              onClick={() => this.selectItem(item.lang)}
            >
              { item.lang }
            </li>
          ))}
        </ul>}
      </div>
    )
  }
}

export default Dropdown;