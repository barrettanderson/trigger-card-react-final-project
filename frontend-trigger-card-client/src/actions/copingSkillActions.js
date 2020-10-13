const showCopingSkills = (coping_skills) => {
    return {
        type: "SHOW_COPING_SKILLS",
        coping_skills
    }
}

export const fetchCopingSkills = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/coping_skills')
            .then( resp => resp.json() )
            .then( coping_skills => dispatch(showCopingSkills(coping_skills)))
    }
}