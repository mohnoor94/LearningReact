import React, {Component} from 'react'
import Location from "./Location";
import uuid from 'uuid/v4';


class Zoo extends Component {

  state = {
    locations: [
      {name: 'Forest', dragons: [{name: 'J. Bazz', color: 'REDDD', food: 'Banana', id: uuid()}]},
      {
        name: 'River',
        dragons: [
          {name: 'Zen', color: 'Blue', food: 'Vegetables', id: uuid()},
          {name: 'YuY', color: 'Yellow', food: 'Cats', id: uuid()}
        ]
      },
      {name: 'Earth', dragons: [{name: 'ZaX', color: 'Transparent', food: 'HUMANS', id: uuid()}]}
    ]
  };

  addDragon = (dragon, locName) => {
    this.setState(state => ({
      locations: state.locations.map(loc => loc.name === locName
        ? {name: loc.name, dragons: [...loc.dragons, dragon]}
        : loc)
    }));
  };

  removeDragon = (dragonId, locName) => {
    this.setState(state => ({
      locations: state.locations.map(loc => loc.name === locName
        ? {name: loc.name, dragons: loc.dragons.filter(d => d.id !== dragonId)}
        : loc)
    }));
  };

  moveDragon = (locFrom, locTo, dragon) => {
    this.removeDragon(dragon.id, locFrom);
    this.addDragon(dragon, locTo);
  };

  filterLocations = current => this.state.locations.map(loc => loc.name).filter(loc => loc !== current);

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div>
        <h1>Welcome to {props.name} ZooOO!</h1>
        <hr/>
        {state.locations.map(l =>
          <div>
            <Location key={l.name} name={l.name} dragons={l.dragons} locations={this.filterLocations(l.name)}
                      move={this.moveDragon}/>
            <hr/>
          </div>
        )}
      </div>
    );
  }
}

export default Zoo;