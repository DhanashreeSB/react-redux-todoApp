import React from 'react'

const Todo = ({todos, deleteTodo}) => {

    //display each element using map:
    const todoList = todos.length ? (
        
            todos.map(todo => {
                return(
                    <div className="collection-item" key={todo.id}>
                        <span>{todo.id}. {todo.content}</span>
                        <button className="right green white-text" onClick={() => deleteTodo(todo.id)}>Remove</button>
                    </div>
                )
            })
        
    ) : (<p className="center">You have no todo's left</p>)
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todo