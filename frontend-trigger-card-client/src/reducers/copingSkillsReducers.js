export default (state=[], action) => {
    switch(action.type) {
        case "SHOW_COPING_SKILLS":
            return action.coping_skills
        case "ADD_COPING_SKILL":
            return[...state, action.coping_skill]
        case "DELETE_COPING_SKILL":
            return state.filter(coping_skill => coping_skill.id !== action.id)   
        default:
            return state;
    }
}