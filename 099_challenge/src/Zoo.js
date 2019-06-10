import React, {Component} from 'react'
import Location from "./Location";
import uuid from 'uuid/v4';


class Zoo extends Component {

  // list of locations, name

  // brook@codefellows.com

  state = {
    locations: [
      {name: 'Loc A', dragons: [{name: 'Drag X', color: 'REDDD', food: 'Banana', id: uuid()}]},
      {name: 'Loc B', dragons: [{name: 'Drag Y', color: 'Blue', food: 'Banana', id: uuid()}]},
      {name: 'Loc C', dragons: [{name: 'Drag Z', color: 'Transparent', food: 'Banana', id: uuid()}]}
    ]
  };

  addDragon = (dragon, locName) => {
    const currState = this.state;
    for (let i = 0; i < currState.length; i++) {
      if (currState[i].name === locName) {
        currState[i].dragons = [...currState[i].dragons, dragon];
      }
    }

    this.setState(currState);
  };

  // TODO simplify
  removeDragon = (dragonId) => {
    const currState = this.state;
    for (let i = 0; i < currState.length; i++) {
      for (let j = 0; j < currState.dragons.length; j++) {
        if (currState[i].dragons[j].id === dragonId) {
          currState[i].dragons.splice(j, 1);
        }
      }
    }

    this.setState(currState);
  };


  moveDragon = (locFrom, locTo, dragon) => {
    console.log(locFrom);
    console.log(locTo);
    console.log(dragon);
    this.removeDragon(dragon.data.id);
    this.addDragon(dragon, locTo);
  };

  render() {
    const state = this.state;
    return (
      <div>
        {state.locations.map(l => <Location name={l.name} dragons={l.dragons} locations={state.locations} move={this.moveDragon}/>)}

        <hr/>
        <div>
          <h3>Move me!</h3>
        </div>
      </div>
    );
  }


}

export default Zoo;