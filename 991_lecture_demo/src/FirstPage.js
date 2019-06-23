import React from 'react';
import Page from "./Page";

import './css/FirstPage.css'
import luminusLogo from './images/luminus.png'

class FirstPage extends Page {
  render() {
    return (
      <div className='FirstPage'>
        <h1>Descriptive Statistical Measures</h1>
        <h2>Measures of Location</h2>
        <h3>AbuKhleif, Mohammad Noor</h3>
        <h3><a href='http://www.abukhleif.com/' target='_blank' rel="noopener noreferrer">www.AbuKhleif.com</a></h3>
        <img src={luminusLogo} alt='Luminus Logo'/>
      </div>
    );
  }
}

export default FirstPage;