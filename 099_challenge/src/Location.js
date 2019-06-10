import React, {Component} from 'react'
import Dragon from "./Dragon";

class Location extends Component {

  state = {
    dragons: this.props.dragons
  };

  componentWillReceiveProps = nextProps => this.setState({dragons: nextProps.dragons});

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div>
        <h2>Location: {props.name}</h2>
        <div>
          {state.dragons.map(dragon => <Dragon key={dragon.id}
                                               dragonData={dragon}
                                               locations={props.locations}
                                               currLocation={props.name}
                                               move={props.move}/>)}
        </div>
      </div>
    );
  }
}

export default Location;