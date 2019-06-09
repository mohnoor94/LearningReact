import React, {Component} from 'react'

class Box extends Component {

  handleRemove = () => {
    this.props.remove(this.props.specs.id);
  };

  render() {
    const specs = this.props.specs;
    return (
      <div style={{backgroundColor: specs.color, width: specs.width, height: specs.height}}
           onClick={this.handleRemove}>
      </div>
    );
  }
}

export default Box;