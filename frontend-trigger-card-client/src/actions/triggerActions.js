const showTriggers = (triggers) => {
    return {
        type: "SHOW_TRIGGERS",
        triggers
    }
}

const addTrigger = (trigger) => {
    return {
        type: "ADD_TRIGGER",
        trigger
    }
}

export const fetchTriggers = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/triggers')
            .then( resp => resp.json() )
            .then( triggers => dispatch(showTriggers(triggers)))
    }
}

export const createTrigger = (triggerData, history) => {
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
                history.push('/triggers')
            })
    }
}