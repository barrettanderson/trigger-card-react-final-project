import React from 'react';

const TriggerCard = ({ trigger }) => {
    console.log(trigger)
    return (
        <li>{trigger.name} - {trigger.description}</li>
    )
}

export default TriggerCard