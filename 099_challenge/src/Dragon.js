import React, {Component} from 'react'
import uuid from 'uuid/v4';


class Dragon extends Component {

  // name, color, favFood, id (uuid())

  // locations, currLocation

  state = {
    newLocation: ''
  };

  handleClick = evt => {
    const props = this.props;
    this.props.move(props.location, evt.target.value, props);
    this.setState({
      newLocation: evt.target.value
    });
  };

  render() {
    const props = this.props;
    const data = props.data;
    return (
      <div>
        <p>Name: {data.name}</p>
        <p>Color: {data.color}</p>
        <p>Fav Food: {data.food}</p>

        <div>
          <h3>Move me!</h3>

          <select onChange={this.handleClick}>
            {props.locations.map(l => <option value={l.name}>{l.name}</option>)}
          </select>
        </div>
      </div>
    );
  }


}

export default Dragon;