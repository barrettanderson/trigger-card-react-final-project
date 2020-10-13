import React, { Component } from 'react';
import NavBar from './components/NavBar'

class App extends Component {
  state = {
    triggers: [],
    warning_signs: [],
    coping_skills: []
  }

  // componentDidMount() {
  //   this.props.fetch
  // }
  
  render() {
    return (
      <div className="App">
        <NavBar>
          <h1>Trigger Card</h1>

        </NavBar>
      </div>
    );
  }
}

export default App;
