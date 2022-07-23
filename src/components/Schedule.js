import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo';
import {connect} from 'react-redux';
import { deleteTodo } from '../actions/todoActions';
import { addTodo } from '../actions/todoActions';

class Schedule extends React.Component
{
    render() {
        // const { todos } = this.props;
        return(
            <div className="todo-app container">
                <h2 className="center blue-text">To do</h2>
                {/* <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/> */}
                <Todo deleteTodo={this.props.deleteTodo}/>
                <AddTodo addTodo={this.props.addTodo}/>
            </div>
        )
    }
}

//Inject States in store as props in the component
const mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

//Map dispatch to props
// const mapDispatchToProps = (dispatch) => {
//     return {
//         deleteTodo: (id) => {dispatch({
//             type: 'DELETE_TODO',
//             id: id
//         })}
//     }
// }

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {dispatch(deleteTodo(id))},
        addTodo: (todo) => {dispatch(addTodo(todo))}
    }
}

// export default Schedule;
//connecting this component to redux-store
export default connect(mapStateToProps, mapDispatchToProps)(Schedule);