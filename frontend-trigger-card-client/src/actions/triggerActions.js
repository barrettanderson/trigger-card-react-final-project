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