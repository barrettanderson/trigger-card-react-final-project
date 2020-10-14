const showCopingSkills = (coping_skills) => {
    return {
        type: "SHOW_COPING_SKILLS",
        coping_skills
    }
}

const addCopingSkill = (coping_skill) => {
    return {
        type: "ADD_COPING_SKILL",
        coping_skill
    }
}

export const fetchCopingSkills = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/coping_skills')
            .then( resp => resp.json() )
            .then( coping_skills => dispatch(showCopingSkills(coping_skills)))
    }
}

export const createCopingSkill = (copingSkillData) => {
    return (dispatch) => {
        fetch('http://localhost:3001/coping_skills', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(copingSkillData)
        })
            .then( resp => resp.json() )
            .then( coping_skill => {
                dispatch(addCopingSkill(coping_skill))
            })
    }
}