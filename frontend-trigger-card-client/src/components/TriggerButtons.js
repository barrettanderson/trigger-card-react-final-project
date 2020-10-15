import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTrigger } from '../actions/triggerActions'

class TriggerButtons extends Component {
    handleClick = () => {
        this.props.deleteTrigger(this.props.trigger.id)
    }
    
    render() {
        return (
            <button onClick={this.handleClick}>x</button>
        )
    }
}

export default connect(null, { deleteTrigger })(TriggerButtons)
