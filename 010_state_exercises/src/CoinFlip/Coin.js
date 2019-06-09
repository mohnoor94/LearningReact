import React, {Component} from 'react'

import './css/Coin.css'

class Coin extends Component {

    render() {
        const face = this.props.face === 'head' ? 'head' : 'tail';
        const imgSrc = `https://tinyurl.com/react-coin-${face}s-jpg`;

        return (
            <div className='Coin'>
                <img className='Coin-img' src={imgSrc} alt=''/>
            </div>
        );
    }
}

export default Coin;