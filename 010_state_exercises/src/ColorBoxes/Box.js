import React, {Component} from 'react'

import './css/Box.css'

class Box extends Component {

    state = {
        color: this.props.color
    };

    generate = () => {
        this.setState({
            color: this.props.generator(this.state.color)
        })
    };

    render() {
        const state = this.state;
        return (
            <div onClick={this.generate} style={{backgroundColor: state.color}} className='Box'>
            </div>
        );
    }

}

export default Box;