export default (state=[], action) => {
    switch(action.type) {
        case "SHOW_TRIGGERS":
            return action.triggers //triggers: []
        case "ADD_TRIGGER":
            return[...state, action.trigger]     
        case "DELETE_TRIGGER":
            return state.filter(trigger => trigger.id !== action.id)
        default:
            return state;
    }
}