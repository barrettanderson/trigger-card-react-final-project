import React from 'react';
import TriggerButtons from './TriggerButtons'

const TriggerCard = ({ trigger }) => {
    // console.log(trigger)
    return (
        <li>{trigger.name} - {trigger.description}  <TriggerButtons trigger={trigger}/></li>
    )
}

export default TriggerCard