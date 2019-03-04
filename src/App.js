import React, { Component } from 'react';
import './App.css';
import items from './items.json';


class App extends Component {
  

  handleDelete(e){
    console.log(e.target.ref);
  }

  getItemsFromJson(){
    const listItems = items.map((item) =>
    <li ref={item.id}><input type="checkbox" name='item' id={item.id} /><label>{item.name}</label><span ref={item.id} onClick={this.handleDelete}>x</span> </li> 

    );
    return listItems;
  }

  addItem(e){
    alert(e.target.value);
  }
  
  render() {
    return (
      <div className="App">
      
        <header className="App-header title">
          <h1>
           ShoppingList
          </h1>
        </header>

        <div className="App-body">
          <div className="App-body-items">
          <h2 className="App-body-header title">
             Add your items here
          </h2>
          <ul>
            { this.getItemsFromJson() }
            <li ref><input type="text" name='additem' placeholder="Add a new item" /><span value="4" onClick={this.handleDelete}>x</span> </li>
            <form name="addItem" onSubmit={this.addItem}></form>
            <input type="submit" hidden/>
          </ul>

              </div>

        
        </div>
      
      
      </div>
    );
  }
}

export default App;
