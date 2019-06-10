import React, {Component} from 'react'

class Dragon extends Component {

  state = {
    location: this.props.currLocation,
    locations: this.props.locations
  };

  move = evt => {
    const props = this.props;
    const newLocation = evt.target.value;
    props.move(props.currLocation, newLocation, props.dragonData);
    this.setState(state => ({
      locations: [state.location, ...state.locations.filter(loc => loc !== newLocation)],
      location: state.location
    }));
  };

  render() {
    const props = this.props;
    const state = this.state;
    const dragon = props.dragonData;
    return (
      <div>
        <h3>Dragon {dragon.name}!</h3>
        <p>looks {dragon.color} - eats {dragon.food}!!</p>

        <div>
          <select defaultValue='none' onChange={this.move}>
            <option disabled value='none'>Move to</option>
            {state.locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
          </select>
        </div>
      </div>
    );
  }


}

export default Dragon;