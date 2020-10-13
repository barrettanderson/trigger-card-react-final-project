import React from 'react'

const CopingSkillCard = ({ coping_skill }) => {
    return (
        <li>{coping_skill.name} - {coping_skill.description}</li>
    )
}

export default CopingSkillCard
