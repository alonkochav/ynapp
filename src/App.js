import React, { Component } from 'react';
import './App.css';

class App extends Component {
  

  handleDelete(e){
    console.log(e.target.ref);
  }
  
  render() {
    return (
      <div className="App">
      
        <header className="App-header title">
          <h1>
           ShoppingList
          </h1>
        </header>

        <div class="App-body">
          <div class="App-body-items">
          <h2 class="App-body-header title">
            This is your list
          </h2>
          <ul>
            <li ref><input type="checkbox" name='item' /><label>Bread</label><span ref="1" onClick={this.handleDelete}>x</span> </li>
            <li ref><input type="checkbox" name='item' /><label>Milk</label><span ref="2" onClick={this.handleDelete}>x</span> </li>
            <li ref><input type="checkbox" name='item' /><label>Cheese</label><span ref="3" onClick={this.handleDelete}>x</span> </li>
            <li ref><input type="checkbox" name='item' /><label>Cheese</label><span value="4" onClick={this.handleDelete}>x</span> </li>
            <li ref><input type="text" name='additem' placeholder="Add a new item" /><span value="4" onClick={this.handleDelete}>x</span> </li>

          </ul>

          
              </div>

        
        </div>
      
      
      </div>
    );
  }
}

export default App;
