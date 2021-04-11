import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo';

class Schedule extends React.Component
{
    state={
        todos:[
            {id:1, content: 'Presentation at 1PM'},
            {id:2, content: 'Meeting at 3PM'}
        ]
    }

    deleteTodo = (id) => {
        //This method will be called from Todo.js, when remove is clicked. We iterate over all elemnets in todos and id clicked element's id is equal to current id then that object is not added in new todoList
        const todos = this.state.todos.filter(todo=>{
            return(
                todo.id !== id
            )
        });
        this.setState({
            todos
        })
    }

    //Here newly create content will be addded
    addTodo = (todo) => {
        todo.id=this.state.todos[this.state.todos.length-1].id+1;
        //spread this.state.todos and new element
        let todos=[...this.state.todos, todo];
        this.setState({
            todos
        })
    }
    render() {
        return(
            <div className="todo-app container">
                <h2 className="center blue-text">To do</h2>
                <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
                <AddTodo addTodo={this.addTodo}/>
                
            </div>
        )
    }
}

export default Schedule