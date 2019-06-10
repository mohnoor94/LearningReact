import React, {Component} from 'react'
import Dragon from "./Dragon";

class Location extends Component {

  // name

  state = {
    dragons: this.props.dragons
  };

  //TODO add keys
  addDragon = dragon => {
    this.setState(state => ({
      dragons: [...state.dragons, dragon]
    }));
  };

  removeDragon = dragonId => {
    this.setState(state => ({
      dragons: state.dragons.filter(d => d.id !== dragonId)
    }));
  };



  render() {
    const props = this.props;
    const state = this.state;
    return (
      <div>
        Location: {props.name}

        <div>
          {state.dragons.map(d => <Dragon data={d} locations={props.locations} currLocation={props.name} move={props.move}/>)}
        </div>
      </div>
    );
  }


}

export default Location;