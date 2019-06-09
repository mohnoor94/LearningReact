import React, {Component} from 'react'
import uuid from 'uuid/v4';
import BoxMaker from "./BoxMaker";
import Box from "./Box";

class BoxList extends Component {

  state = {
    boxes: []
  };

  addBox = box => {
    this.setState(state => ({
      boxes: [...state.boxes, {...box, id: uuid()}]
    }));
  };

  removeBox = id => {
    this.setState(state => ({
      boxes: state.boxes.filter(b => b.id !== id)
    }));
  };

  render() {
    const state = this.state;

    return (
      <div>
        <h1>The Great Box Maker!</h1>
        <BoxMaker add={this.addBox}/>
        {state.boxes.map(b => <Box key={b.id} specs={b} remove={this.removeBox}/>)}
      </div>
    );
  }
}

export default BoxList;