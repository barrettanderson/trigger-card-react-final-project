import React, { Component } from 'react'
import TriggerCard from '../components/TriggerCard'
import { connect } from 'react-redux'

class TriggerList extends Component {
    render() {
        const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger} />)
        console.log(this.props)
        return (
            <div>
                <h2>Triggers</h2>
                <ul>
                    { triggers }
                </ul>

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
