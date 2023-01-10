import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import Todolist from './Todolist';
import { todo } from './../Redux/Actions/Actions';
import { v4 as uuid } from 'uuid';

const Addtodo = () => {

    const [todos, setTodos] = useState()
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const unique_id = uuid();
        const id = unique_id.slice(0, 8)
        const data = { id, todos }
        dispatch(todo(data))
    }


    return (
        <div className="container border mt-4 d-flex justify-content-center align-items-center p-3" style={{ backgroundImage: "linear-gradient(to right, #F9748F, #FD918B)" }}>

            <div className="card p-3" style={{ width: '25rem', borderRadius: '1rem' }}>
                <Todolist />
                <form className="d-flex justify-content-between mt-3" onSubmit={onSubmitHandler}>
                    <div className="form-group" style={{ height: '2rem' }}>
                        <input type="text" onChange={(e) => setTodos(e.target.value)} className="form-control" placeholder="Add Todo..." />
                    </div>
                    <button type='submit' className="btn btn-sm btn-outline-secondary" style={{ height: '2rem', borderRadius: '3rem' }}>Add Todo</button>
                </form>
            </div>
        </div>
    )
}

export default Addtodo