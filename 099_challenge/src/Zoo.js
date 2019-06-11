import React, {Component} from 'react'
import Location from "./Location";
import uuid from 'uuid/v4';

class Zoo extends Component {

  init = () => {
    return [
      {
        name: 'Forest',
        dragons: [
          {name: 'J. Bazz', color: 'RED', food: 'Banana', id: uuid()}]
      },
      {
        name: 'River',
        dragons: [
          {name: 'Zen', color: 'Blue', food: 'Vegetables', id: uuid()},
          {name: 'YuY', color: 'Black', food: 'Fish', id: uuid()}
        ]
      },
      {
        name: 'Earth',
        dragons: [
          {name: 'ZaX', color: 'Grey', food: 'HUMANS', id: uuid()},
          {name: 'Zeos', color: 'darkcyan', food: 'Cats', id: uuid()},
          {name: 'MatriX', color: 'darkmagenta', food: 'Gold', id: uuid()}
        ]
      }
    ];
  };

  state = {
    locations: this.init()
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

  reset = () => this.setState({locations: this.init()});

  render() {
    const props = this.props;
    const state = this.state;

    return (
      <div>
        <h1>Welcome to {props.name} ZooOO!</h1>
        {state.locations.map(l =>
          <Location key={l.name}
                    name={l.name}
                    dragons={l.dragons}
                    locations={this.filterLocations(l.name)}
                    move={this.moveDragon}/>
        )}
        <button onClick={this.reset} className='btn btn-warning btn-lg'>Reset</button>
      </div>
    );
  }
}

export default Zoo;