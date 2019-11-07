import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {
constructor() {
  super();
  this.state = {
    monsters: [] 
  };
}

//Life Cycle Method
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  //converts into a usable json format
  .then(response => response.json())
  //sets the users property of from the API response to the array of monsters
  .then(users => this.setState({ monsters: users }));
}
render() {
    return (
      <div className='App'>
      <CardList monsters={this.state.monsters}/>

      
      </div>
    )
  }
}

export default App;
