import React from 'react'

class Clicker extends React.Component {
    state = {
        num: Math.floor(Math.random() * 100)
    };

    handleClick = e => {
        this.setState({
            num: Math.floor(Math.random() * 100)
        });
    };

    render() {
        const elem = this.state.num >= 90
            ? <h2>You Win!!!</h2>
            : <button onClick={this.handleClick}>Randomizzzzze!</button>;

        return (
            <div>
                <h1>You get a {this.state.num}</h1>
                {elem}
            </div>
        );
    }

}

export default Clicker;