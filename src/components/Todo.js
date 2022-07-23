import React from 'react'
import {connect} from 'react-redux';

const Todo = (props) => {

    //display each element using map:
    const todoList = props.todos.length ? (
            props.todos.map(todo => {
                return(
                    <div className="collection-item" key={todo.id}>
                        <span>{todo.id}. {todo.content}</span>
                        <button className="right green white-text" onClick={() => props.deleteTodo(todo.id)}>Remove</button>
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

//Inject States in store as props in the component
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

export default connect(mapStateToProps)(Todo)