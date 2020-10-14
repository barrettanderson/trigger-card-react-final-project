import React, { Component } from 'react'
import TriggerCard from '../components/TriggerCard'
import { connect } from 'react-redux'
import TriggerForm from './TriggerForm'

class TriggerList extends Component {
    render() {
        // console.log(this.props)
        const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger} />)
        return (
            <div>
                <h2>Triggers</h2>
                <ul>
                    { triggers }
                </ul>
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
