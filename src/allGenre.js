import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person: [
      { name: 'best', age: '21' }, { name: 'book', age: '19' }, { name: 'boss', age: '53' },
    ]
  }
  pressItHandler = (newName) => {
    this.setState({
      person: [
        { name: newName, age: '212' }, { name: 'book', age: '191' }, { name: 'boss', age: '5315' },
      ]
    })
  }
  changeItHandle = (event) =>{
    this.setState({
      person: [
        { name: 'bestboy', age: '212' }, { name: event.target.value, age: '191' }, { name: 'boss', age: '5315' },
      ]
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Get Rekt</h1>
        <p> it's ok to get rekt</p>
        <button onClick={this.pressItHandler.bind(this, 'BeSebo')}>pressIt</button>
        <Person name={this.state.person[0].name} age={this.state.person[0].age} click={() => this.pressItHandler('SeulGi')}><b>rock</b></Person>
        <Person name={this.state.person[1].name} age={this.state.person[1].age} 
        click={this.pressItHandler.bind(this, 'SeI3ulA')} changed={this.changeItHandle}><i>jazz</i></Person>
        <Person name={this.state.person[2].name} age={this.state.person[2].age}><u>classic</u></Person>
      </div>
    );
  }
}

export default App
