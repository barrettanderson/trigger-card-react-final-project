import React, { Component } from 'react';
import NavBar from './components/NavBar'
import Home from './containers/Home'
import TriggerList from './containers/TriggerList'
import WarningSignList from './containers/WarningSignList'
import CopingSkillList from './containers/CopingSkillList'
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
            <Route exact path="/triggers" component={ TriggerList }/>
            <Route exact path="/warning_signs" component={ WarningSignList }/>
            <Route exact path="/coping_skills" component={ CopingSkillList }/>
          </Switch>
          </NavBar>
        </div>
      </Router>
    );
  }
}

// export default connect(null, { fetchTriggerCard })(App);
export default App
