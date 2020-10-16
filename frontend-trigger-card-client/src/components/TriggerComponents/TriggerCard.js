import React from 'react';
import TriggerButtons from './TriggerButtons'

const TriggerCard = ({ trigger }) => {
    return (
        <div className="container-md">
            <li>{trigger.name} - {trigger.description}  <TriggerButtons trigger={trigger}/></li>
        </div>
    )
}

export default TriggerCard