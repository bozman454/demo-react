import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {datalist: [1,2,3,4,5,6,8]};
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hello world, IM AN APP COMPONENT!
      </h1>
      <ul>
        {this.state.datalist.map(element =>{
            return <li>{element}</li>
          })}
      </ul>
      </div>
    );
  }
}

export default App;
