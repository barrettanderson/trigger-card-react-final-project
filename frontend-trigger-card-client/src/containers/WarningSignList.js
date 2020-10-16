import React, { Component } from 'react'
import WarningSignCard from '../components/WarningSignComponents/WarningSignCard'
import { connect } from 'react-redux'
import WarningSignForm from './WarningSignForm'


class WarningSignList extends Component {
    render() {
        const warning_signs = this.props.warning_signs.map((warning_sign, i) => <WarningSignCard key={i} warning_sign={warning_sign} />)
        return (
            <div className="container-fluid bg-danger">
                <div className="card-header"><h2>Warning Signs</h2></div>
                    <div className="card-body">
                        <h5 className="card-title">Others know I am mad, sad, or upset because:</h5>
                        <ul>
                            { warning_signs }
                        </ul>
                        <br />
                        <h3>Add Warning Sign</h3>
                        <WarningSignForm />
                    </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        warning_signs: state.warningSignsReducer
    }
}

export default connect(mapStateToProps)(WarningSignList)
