export default (state=[], action) => {
    switch(action.type) {
        case "SHOW_WARNING_SIGNS":
            return action.warning_signs
        case "ADD_WARNING_SIGN":
            return[...state, action.warning_sign]
        case "DELETE_WARNING_SIGN":
            return state.filter(warning_sign => warning_sign.id !==action.id)
        default:
            return state;
    }
}