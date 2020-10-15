import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteWarningSign } from '../actions/warningSignActions'

export class WarningSignButtons extends Component {
    
    handleClick = () => {
        this.props.deleteWarningSign(this.props.warning_sign.id)
    }
    render() {
        return (
                <button onClick={this.handleClick}>x</button>
        )
    }
}

export default connect(null, { deleteWarningSign })(WarningSignButtons)
