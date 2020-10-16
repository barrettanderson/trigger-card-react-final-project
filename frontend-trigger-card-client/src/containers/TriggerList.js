import React, { Component } from 'react'
import TriggerCard from '../components/TriggerComponents/TriggerCard'
import { connect } from 'react-redux'
import TriggerForm from './TriggerForm'

class TriggerList extends Component {
    render() {
        const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger} />)
        return (
            <div className="container-fluid">
                <h2>Triggers</h2>
                <ul>
                    { triggers }
                </ul>
                <h3>Add Trigger</h3>
                <TriggerForm />
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
