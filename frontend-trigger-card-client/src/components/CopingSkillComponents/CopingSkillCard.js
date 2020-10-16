import React from 'react'
import CopingSkillButtons from './CopingSkillButtons'

const CopingSkillCard = ({ coping_skill }) => {
    return (
        <li>{coping_skill.name} - {coping_skill.description}  <CopingSkillButtons coping_skill={coping_skill}/></li>
    )
}

export default CopingSkillCard
