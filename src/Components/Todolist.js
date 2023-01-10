import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../Redux/Actions/Actions'

const Todolist = () => {

    const todo = useSelector(data => data)
    const dispatch = useDispatch()

    const onDelete = (e) => {
        console.log(e)
        console.log(typeof e)
        dispatch(deleteTodo(e))
    }

    console.log(todo)

    return (
        <div>
            {
                todo.length === 0 ? (
                    <div>
                        <h5 className='text-center'>no data found !</h5>
                    </div>
                ) : (
                    <div className="card-body">
                        <div className="d-flex justify-content-around align-items-center">
                            <h5 className="card-title">4 Tasks</h5>
                            <p className="card-title">4 Remains</p>
                        </div>
                        <hr />
                        {todo.map((e, i) => {
                            return(
                        <div className="mt-3 d-flex justify-content-between align-items-center" key={e.id}>
                            <h6 className="card-subtitle mb-2 text-muted">{e.todos}</h6>
                            <button onClick={() => onDelete(e.id)} className="btn btn-sm btn-outline-secondary" style={{ height: '2rem', borderRadius: '3rem' }}>Delete</button>
                        </div>
                            )
                    })}
                        <hr />
                    </div>
                )
            }

        </div>
    )
}

export default Todolist