export default (state=[], action) => {
    switch(action.type) {
        case "SHOW_WARNING_SIGNS":
            return action.warning_signs
        case "ADD_WARNING_SIGN":
            return[...state, action.warning_sign]     
        default:
            return state;
    }
}