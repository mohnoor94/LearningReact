import React, {Component} from 'react'
import Ball from './Ball'

import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        title: 'Lotto',
        numBalls: 6,
        maxNum: 40
    };

    state = {
        nums: Array.from({length: this.props.numBalls})
    };

    generate = () => {
        this.setState(currState => ({
            nums: currState.nums.map(() => Math.floor(Math.random() * this.props.maxNum) + 1)
        }));
    };

    render() {
        const props = this.props;
        const state = this.state;
        return (
            <section className='Lottery'>
                <h1>{props.title}</h1>
                <div>
                    {state.nums.map(n => <Ball num={n}/>)}
                </div>
                <button onClick={this.generate}>Generate</button>
            </section>
        );
    }
}

export default Lottery;