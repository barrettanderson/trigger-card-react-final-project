import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWarningSign } from '../actions/warningSignActions'

export class WarningSignButtons extends Component {
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, { deleteWarningSign })(WarningSignButtons)
