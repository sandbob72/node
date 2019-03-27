import React, { Component } from 'react';
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <h1>Data Student</h1>
        <a href="/"><button>Home</button></a><br></br>
        <a href="/ShowData"><button>ShowData</button></a><br></br>
        <a href="/Insert"><button>Insert</button></a><br></br>
        <a href="/Update"><button>Update</button></a><br></br>
        <a href="/Delete"><button>Delete</button></a><br></br>
      </div>
    );
  }
}

export default App
