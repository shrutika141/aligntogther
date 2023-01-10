import { configureStore } from '@reduxjs/toolkit'

import TodoReducer from "./Reducer/TodoReducer";

const store = configureStore({
    reducer: TodoReducer
})

export default store