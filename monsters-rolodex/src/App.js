import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component'



class App extends Component {
constructor() {
  super();
  this.state = {
    monsters: [], 
    searchField: ''
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

  //destructuring
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster =>
    monster.name.toLowerCase().includes(searchField.toLowerCase())
  );
    return (
      <div className='App'>
        <SearchBox
          placeholder='search monsters' 
          handleChange={ e => 
          this.setState({ searchField: e.target.value })}
        />
        <CardList monsters={filteredMonsters}/>

      
      </div>
    )
  }
}

export default App;
