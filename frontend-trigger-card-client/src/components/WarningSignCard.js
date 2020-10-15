import React from 'react'
import WarningSignButtons from './WarningSignButtons'

const WarningSignCard = ({ warning_sign }) => {
    return (
        <li>{warning_sign.name} - {warning_sign.description}  <WarningSignButtons warning_sign={warning_sign} /></li>
    )
}

export default WarningSignCard
