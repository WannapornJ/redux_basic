const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === "INCREASE") {
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === "DECREASE") {
        return {
            ...state,
            counter: state.counter - 1
        }
    }
    if (action.type === "PLUS") {
        return {
            ...state,
            counter: state.counter + 15
        }
    }
    if (action.type === "MINUS") {
        return {
            ...state,
            counter: state.counter - 15
        }
    }
    if (action.type === "RESET") {
        return {
            ...state,
            counter: 0
        }
    }

    return state
}

export default reducer;