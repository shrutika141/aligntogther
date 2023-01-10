export const todo = (data) => {
    // console.log(data)
    return{
        type: "TODO_DATA",
        payload: data
    }
}

export const deleteTodo = (data) => {
    console.log(data)
    return{
        type: "DELETE_DATA",
        payload: data
    }
}