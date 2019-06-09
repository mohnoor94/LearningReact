import React, {Component} from 'react'

import Coin from './Coin'

class Flipper extends Component {

    state = {
        coin: null,
        head: 0,
        tail: 0
    };

    flip = () => {
        const face = Math.random() >= 0.5 ? 'head' : 'tail';
        this.setState(currState => ({
            coin: face,
            face: currState[face] += 1
        }));
    };

    render() {
        const state = this.state;

        return (
            <div>
                <h1>Let's flip a Coin!!</h1>
                {!!state.coin && <Coin face={state.coin}/>}
                <button onClick={this.flip}>Flip Meee!</button>
                <h3>Out of {state.head + state.tail}, you got {state.head} heads and {state.tail} tails!</h3>
            </div>
        );
    }

}

export default Flipper;