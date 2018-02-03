import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'Max', age: 28 },
      { name: 'Joe', age: 32 },
      { name: 'Vini', age: 65 },
    ]
  }

  switchNameHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: 35 },
        { name: 'Joe', age: 32 },
        { name: 'Vini', age: 65 },
    ]});
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Max', age: 35 },
        { name: event.target.value, age: 32 },
        { name: 'Vini', age: 65 },
      ]
    });
  }

  render() { 
    return(
      <div className="App">
        <h1>Jestem nagłowkiem</h1>
        <button onClick={() => this.switchNameHandler('Konrad')}>Zmień imię</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age}  />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}  
          click={this.switchNameHandler.bind(this, "Konradzio")}
          changed={this.nameChangedHandler}/>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}  />

      </div>
    );
  }
}

export default App;
