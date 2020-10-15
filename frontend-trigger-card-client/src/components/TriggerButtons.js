import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTrigger } from '../actions/triggerActions'

class TriggerButtons extends Component {
    handleDelete = () => {
        this.props.deleteTrigger(this.props.trigger.id)
    }
    
    render() {
        return (
            // what should the onclick be?
            <button onClick ={this.handleDelete}>x</button>
            
        )
    }
}

export default connect(null, { deleteTrigger })(TriggerButtons)
