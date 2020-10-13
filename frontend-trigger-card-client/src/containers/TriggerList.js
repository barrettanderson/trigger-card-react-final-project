import React, { Component } from 'react'
import { connect } from 'react-redux'

class TriggerList extends Component {
    // const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger})
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>Triggers</h2>

            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        triggers: state.triggersReducer
    }
}

export default connect(mapStateToProps)(TriggerList)
