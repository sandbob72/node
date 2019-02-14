import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {count:0}
  constructor(props){
    super(props)
    this.add = this.add.bind(this)
    this.delete = this.delete.bind(this)
  }

  add = function(){
    this.setState({count:this.state.count+1})
  }

  delete = function(){
    this.setState({count:this.state.count-1})
  }

  render() {
    return (
      <div>
        <h1>count</h1>
        {this.state.count}<br/>
        <button onClick = {this.add}>Add</button>
        <button onClick = {this.delete}>delete</button>
      </div>
    );
  }
}

export default App;
