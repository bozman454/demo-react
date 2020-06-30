import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {datalist: props.datalist};
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(){
    this.setState({datalist: ['i', 'changed', 'it']})
  }


  render() {
    return (
      <div className="App">
        <h1>
          Hello world, IM passing props!
      </h1>
      <h2>
        <input type="button" onClick={this.handleClick}/>
      </h2>
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
