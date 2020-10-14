const showWarningSigns = (warning_signs) => {
    return {
        type: "SHOW_WARNING_SIGNS",
        warning_signs
    }
}

const addWarningSign = (warning_sign) => {
    return {
        type: "ADD_WARNING_SIGN",
        warning_sign
    }
}

export const fetchWarningSigns = () => {
    return (dispatch) => {
        fetch('http://localhost:3001/warning_signs')
            .then( resp => resp.json() )
            .then( warning_signs => dispatch(showWarningSigns(warning_signs)))
    }
}

export const createWarningSign = (warningSignData) => {
    return (dispatch) => {
        fetch('http://localhost:3001/warning_signs', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(warningSignData)
        })
            .then( resp => resp.json() )
            .then( warning_sign => {
                dispatch(addWarningSign(warning_sign))
            })
    }
}