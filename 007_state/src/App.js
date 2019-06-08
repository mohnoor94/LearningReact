import React from 'react';
import Rando from './Rando'
import MyClock from './MyClock'
import ClickMe from './ClickMe'
import Clicker from './Clicker'
import './App.css';

function App() {
    return (
        <div className="App">
            <Rando maxNum={50}/>
            <MyClock/>
            <ClickMe/>
            <br/>

            <Clicker/>
        </div>
    );
}

export default App;
