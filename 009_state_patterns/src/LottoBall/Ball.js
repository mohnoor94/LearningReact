import React, {Component} from 'react'
import './Ball.css'

class Ball extends Component {

    render() {
        const props = this.props;
        return (
            <div className='Ball'>{props.num}</div>
        );
    }
}

export default Ball;