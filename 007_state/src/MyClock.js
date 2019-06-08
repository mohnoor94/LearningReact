import React, {Component} from 'react'

class MyClock extends Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date().toLocaleTimeString()};
        this.makeTimer();
    }

    makeTimer() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleTimeString()
            });
        }, 1000);
    }

    render() {
        return <h1>The Time is: {this.state.time}</h1>;
    }
}

export default MyClock;