import React, { Component } from 'react'
import WarningSignCard from '../components/WarningSignCard'
import { connect } from 'react-redux'


class WarningSignList extends Component {
    render() {
        console.log(this.props)
        const warning_signs = this.props.warning_signs.map((warning_sign, i) => <WarningSignCard key={i} warning_sign={warning_sign} />)
        return (
            <div>
                <h2>Warning Signs</h2>
                <ul>
                    { warning_signs }
                </ul>
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
