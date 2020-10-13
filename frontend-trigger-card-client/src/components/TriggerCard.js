import React from 'react';

const TriggerCard = ({ trigger }) => {
    return (
        <li>{trigger.name} - {trigger.description}</li>
    )
}

export default TriggerCard