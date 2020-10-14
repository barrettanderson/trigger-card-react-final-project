import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTrigger } from '../actions/triggerActions'

class TriggerButtons extends Component {
    render() {
        return (
            <button>x</button>
        )
    }
}

export default connect(null, { deleteTrigger })(TriggerButtons)
