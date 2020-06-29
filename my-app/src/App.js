import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {data: "DATA"};
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hello world, IM AN APP COMPONENT!

          {this.state.data}
      </h1>
      </div>
    );
  }
}

export default App;
