import React from 'react';
import './App.css';
import FormDemo from "./FormDemo";
import ShoppingList from "./ShoppingList/ShoppingList";
import BoxList from "./ColorBoxMaker/BoxList";

function App() {
  return (
    <div className="App">
      <FormDemo/>
      <hr/>
      <ShoppingList/>
      <hr/>
      <BoxList/>
    </div>
  );
}

export default App;
