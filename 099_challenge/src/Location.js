import React, {Component} from 'react'
import Dragon from "./Dragon";
import './css/Location.css'

class Location extends Component {

  state = {
    dragons: this.props.dragons
  };

  componentWillReceiveProps = nextProps => this.setState({dragons: nextProps.dragons});

  render() {
    const props = this.props;
    const state = this.state;
    const isEmpty = state.dragons.length === 0;

    return (
      <div className='Location'>
        <h2>{props.name}</h2>
        <div className='Location-Placeholder'>
          {state.dragons.map(dragon => <Dragon key={dragon.id}
                                               dragonData={dragon}
                                               locations={props.locations}
                                               currLocation={props.name}
                                               move={props.move}/>)}
        </div>
        {isEmpty && <div className='Location-Empty'>... no one here but you!</div>}
      </div>
    );
  }
}

export default Location;