const initialState = [ ];

function TodoReducer(state = initialState, action ) {
    switch (action.type) {
        case "TODO_DATA":
            state = [
                action.payload,
                ...state
            ]
            return state;
        case "DELETE_DATA":
            return state.filter(e => e.id !== action.payload);
            // return state;
        default:
           return state;
    }
}


export default TodoReducer