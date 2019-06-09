import React, {Component} from 'react'

class ShoppingListForm extends Component {

  state = {
    name: '',
    qty: ''
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const state = this.state;
    if (!state.name || !state.qty) return;

    this.props.addItem(state);
    this.setState({name: '', qty: ''});
  };

  render() {
    const state = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <h3>Add Items:</h3>
        <label htmlFor='name'>Name: </label>
        <input
          id='name'
          name='name'
          value={state.name}
          onChange={this.handleChange}
        />
        <label htmlFor='qty'>Quantity: </label>
        <input
          id='qty'
          name='qty'
          value={state.qty}
          onChange={this.handleChange}
        />
        <button>Add!</button>
      </form>
    );
  }
}

export default ShoppingListForm;