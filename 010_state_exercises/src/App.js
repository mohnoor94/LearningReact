import React from 'react';
import './App.css';

import Flipper from './CoinFlip/Flipper'
import ColorFlipper from "./ColorBoxes/ColorFlipper";

function App() {
    return (
        <div className="App">
            <Flipper/>
            <hr/>
            <ColorFlipper />
        </div>
    );
}

export default App;
