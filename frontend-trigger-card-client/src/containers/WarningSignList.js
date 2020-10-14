import React, { Component } from 'react'
import WarningSignCard from '../components/WarningSignCard'
import { connect } from 'react-redux'
import WarningSignForm from './WarningSignForm'


class WarningSignList extends Component {
    render() {
        // console.log(this.props)
        const warning_signs = this.props.warning_signs.map((warning_sign, i) => <WarningSignCard key={i} warning_sign={warning_sign} />)
        return (
            <div>
                <h2>Warning Signs</h2>
                <ul>
                    { warning_signs }
                </ul>
                <h3>Add Warning Sign</h3>
                <WarningSignForm />
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
