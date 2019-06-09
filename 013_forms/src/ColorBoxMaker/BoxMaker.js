import React, {Component} from 'react'

class BoxMaker extends Component {

  state = {
    color: '',
    width: '',
    height: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.add(this.state);
    this.setState({color: '', width: '', height: ''});
  };

  render() {
    const state = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='color'>Color: </label>
        <input
          id='color'
          name='color'
          value={state.color}
          onChange={this.handleChange}
        />

        <label htmlFor='width'>Width: </label>
        <input
          id='width'
          name='width'
          value={state.width}
          onChange={this.handleChange}
        />

        <label htmlFor='height'>Height: </label>
        <input
          id='height'
          name='height'
          value={state.height}
          onChange={this.handleChange}
        />

        <button>Add Box!</button>
      </form>
    );
  }


}

export default BoxMaker;