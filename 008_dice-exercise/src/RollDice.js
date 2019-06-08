import React, {Component} from 'react'
import Die from './Die'

import './RollDice.css'

class RollDice extends Component {

    constructor(props) {
        super(props);
        this.state = {
            die1: this.genNumber(),
            die2: this.genNumber(),
            rolling: false
        };
    }

    genNumber = () => Math.floor(Math.random() * 6 + 1);

    updateDice = () => {
        this.setState({
            die1: this.genNumber(),
            die2: this.genNumber(),
            rolling: true
        });

        setTimeout(() => this.setState({rolling: false}), 1000);
    };

    render() {
        const state = this.state;
        return (
            <div className='RollDice'>
                <div className='RollDice-container'>
                    <Die face={state.die1} shaking={state.rolling}/>
                    <Die face={state.die2} shaking={state.rolling}/>
                </div>
                <button disabled={state.rolling}
                        onClick={this.updateDice}>{state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
            </div>
        );
    }

}

export default RollDice;