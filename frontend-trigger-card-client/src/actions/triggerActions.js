const showTriggers = (triggers) => {
    return {
        type: "SHOW_TRIGGERS",
        triggers
    }
}

export const fetchTriggers = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/triggers')
            .then( resp => resp.json() )
            .then( triggers => dispatch(showTriggers(triggers)))
    }
}

const addTrigger = (trigger) => {
    return {
        type: "ADD_TRIGGER",
        trigger
    }
}

export const createTrigger = (triggerData) => {
    return (dispatch) => {
        fetch('http://localhost:3001/triggers', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(triggerData)
        })
            .then( resp => resp.json() )
            .then( trigger => {
                dispatch(addTrigger(trigger))
            })
    }
}

const removeTrigger = (id) => {
    return {
        type: "DELETE_TRIGGER",
        id
    }
}

export const deleteTrigger = (id) => {
    debugger
    return (dispatch) => {
        fetch(`http://localhost:3001/triggers/${id}`, {
            method: "DELETE"
        }) 
            .then( resp => dispatch(removeTrigger(id)))
    }
}

