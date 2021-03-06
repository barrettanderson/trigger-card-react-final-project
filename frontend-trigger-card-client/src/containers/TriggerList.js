import React, { Component } from 'react'
import TriggerCard from '../components/TriggerComponents/TriggerCard'
import { connect } from 'react-redux'
import TriggerForm from './TriggerForm'

class TriggerList extends Component {
    render() {
        const triggers = this.props.triggers.map((trigger, i) => <TriggerCard key={i} trigger={trigger} />)
        return (
            <div className="container-fluid card bg-warning">
                <div className="card-header"><h2>Triggers</h2></div>
                    <div className="card-body">
                        <h5 className="card-title">Things that make me feel mad, sad, or upset</h5>
                        <ul>
                            { triggers }
                        </ul>
                        <br />
                        <h3>Add Trigger</h3>
                        <TriggerForm />
                    </div>
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
