import React, {Component} from 'react'
import uuid from 'uuid/v4';

import ShoppingListForm from "./ShoppingListForm";

class ShoppingList extends Component {

  state = {
    items: [
      {name: "Milk", qty: "2 gallons", id: uuid()},
      {name: "Bread", qty: "2 loaves", id: uuid()}
    ]
  };

  addItem = item => {
    this.setState(state => ({
      items: [...state.items, {...item, id: uuid()}]
    }));
  };

  renderItems = () => {
    const state = this.state;
    return (
      <ul>
        {state.items.map(item => (
          <li key={item.id}>
            {item.name}: {item.qty}
          </li>
        ))}
      </ul>
    );
  };

  render() {
    return (
      <div style={{textAlign: 'left'}}>
        <h1>Shopping List</h1>
        {this.renderItems()}
        <ShoppingListForm addItem={this.addItem}/>
      </div>
    );
  }
}

export default ShoppingList;