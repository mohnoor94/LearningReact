import React, {Component} from 'react'

import './css/ColorFlipper.css'

import Box from './Box'

class ColorFlipper extends Component {

    static defaultProps = {
        colorsNum: 20
    };

    init = () => {
        const arr = Array.from({length: this.props.colorsNum});
        return arr.map(() => <Box generator={ColorFlipper.generateNewColor} color={ColorFlipper.getRandomColor()}/>);
    };

    constructor(props) {
        super(props);
        this.state = {
            boxes: this.init()
        };
    }

    render() {
        const state = this.state;

        return (
            <div className='ColorFlipper'>{state.boxes}
            </div>
        );
    }

    static generateNewColor = (oldColor) => {
        const newColor = ColorFlipper.getRandomColor();
        return (oldColor !== newColor && newColor) || ColorFlipper.generateNewColor(oldColor);
    };

    static getRandomColor = () => {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
}

export default ColorFlipper;