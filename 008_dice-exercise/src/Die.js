import React from 'react'
import './Die.css'

class Die extends React.Component {

    static defaultProps = {
        face: 1
    };

    render() {
        const props = this.props;
        const classes = `Die fas fa-dice-${Die.nums[props.face]} ${props.shaking && 'shaking'}`;
        return <i className={classes}> </i>;
    }

    static nums = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six'
    };
}

export default Die;