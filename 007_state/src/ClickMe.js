import React, {Component} from 'react'

class ClickMe extends Component {

    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };

        // this.handleClick = this.handleClick.bind(this);
    }

    // handleClick(e) {
    //     this.setState({clicked: !this.state.clicked});
    // }

    handleClick = e => {
        this.setState({clicked: !this.state.clicked});
    }; // auto binding with arrow functions

    render() {
        return (
            <div>
                <h1>{this.state.clicked ? 'Clicked!!' : 'Not Clicked!!'}</h1>
                <button onClick={this.handleClick}> Click Me!</button>
            </div>
        )
    }

}

export default ClickMe;