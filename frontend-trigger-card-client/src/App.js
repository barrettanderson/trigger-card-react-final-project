import React, { Component } from 'react';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import TriggerList from './containers/TriggerList';
import WarningSignList from './containers/WarningSignList';
import CopingSkillList from './containers/CopingSkillList';
import { connect } from 'react-redux';
import { fetchTriggers } from './actions/triggerActions';
import { fetchWarningSigns } from './actions/warningSignActions';
import { fetchCopingSkills } from './actions/copingSkillActions';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {

  componentDidMount() {
    this.props.fetchTriggers()
    this.props.fetchWarningSigns()
    this.props.fetchCopingSkills()
    // add each action individually
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/triggers" component={ TriggerList }/>
            <Route exact path="/warning_signs" component={ WarningSignList }/>
            <Route exact path="/coping_skills" component={ CopingSkillList }/>
            <Route render={() => <p>This page doesn't exist</p>}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, { fetchTriggers, fetchWarningSigns, fetchCopingSkills })(App);
// export default App
