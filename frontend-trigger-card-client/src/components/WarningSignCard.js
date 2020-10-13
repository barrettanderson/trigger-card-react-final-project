import React from 'react'

const WarningSignCard = ({ warning_sign }) => {
    return (
        <li>{warning_sign.name} - {warning_sign.description}</li>
    )
}

export default WarningSignCard
