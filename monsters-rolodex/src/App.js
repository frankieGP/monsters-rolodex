import React, { Component } from 'react';
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
      {
        this.state.monsters.map(monster => 
          <h1 key={monster.id}>{ monster.name }</h1>)
      }
      </div>
    )
  }
}

export default App;
