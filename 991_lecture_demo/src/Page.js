import React, {Component} from 'react';
import './css/Page.css'
import toHtml from "./helpers/mappers";

export default class Page extends Component {
  render() {
    const props = this.props;

    return (
      <div className='Page'>
        {toHtml(props.data)}
        <p className='Page-no'>{props.number}</p>
      </div>
    );
  }
}

