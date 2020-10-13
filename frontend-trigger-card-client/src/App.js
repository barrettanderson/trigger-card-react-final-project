import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Home from './containers/Home'
import { connect } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

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
      <Router>
        <div className="App">
          <NavBar>
          <Switch>
            <Route exact path="/" component={ Home }/>
          </Switch>
          </NavBar>
        </div>
      </Router>
    );
  }
}

// export default connect(null, { fetchTriggerCard })(App);
export default App
