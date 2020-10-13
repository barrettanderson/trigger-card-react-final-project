const showWarningSigns = (warning_signs) => {
    return {
        type: "SHOW_WARNING_SIGNS",
        warning_signs
    }
}

export const fetchWarningSigns = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/warning_signs')
            .then( resp => resp.json() )
            .then( warning_signs => dispatch(showWarningSigns(warning_signs)))
    }
}