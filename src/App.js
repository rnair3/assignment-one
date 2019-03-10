import React, { Component } from 'react';
import './App.css';

import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component{

    state = {
        username: 'Rinita'
    }


    changeNameHandler = (event)=>{
        this.setState({
            username: event.target.value
        })
    }



  render() {
    return (
      <div className="App">
            <h1>Assignment One</h1>
          <div>
              <UserInput change={this.changeNameHandler} name={this.state.username}/>
              <UserOutput name={this.state.username}></UserOutput>
              <UserOutput name={this.state.username}></UserOutput>
              <UserOutput name={this.state.username}></UserOutput>
              <UserOutput name={this.state.username}></UserOutput>
          </div>
      </div>
    );
  }
}

export default App;
