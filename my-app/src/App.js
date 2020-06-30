import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {datalist: props.datalist};
  }

  render() {
    return (
      <div className="App">
        <h1>
          Hello world, IM passing props!
      </h1>
      <ul>
        {this.state.datalist.map(element =>{
            return <li> {element} </li>
          })}
      </ul>
      </div>
    );
  }
}

export default App;
