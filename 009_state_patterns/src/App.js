import React from 'react';
import './App.css';

import ScoreKeeper from './ScoreKeeper'
import IconList from './IconList'
import Lottery from './LottoBall/Lottery'

function App() {
    return (
        <div className="App">
            <ScoreKeeper/>

            <hr/>

            <IconList/>

            <hr/>

            <h1>Lotto Ball Game</h1>
            <Lottery/>
            <Lottery title='Mini Daily' maxNum={10} numBalls={4}/>
        </div>
    );
}

export default App;
