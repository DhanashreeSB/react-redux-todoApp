const initState = {
    todos: [
        { id: 1, content: 'Presentation at 1PM' },
        { id: 2, content: 'Meeting at 3PM' }
    ],
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'DELETE_TODO') {
        const todos = state.todos.filter(todo => todo.id !== action.id);
        console.log(todos)
        return {
            ...state,
            todos
        }
    }

    if (action.type === 'ADD_TODO') {
        let todoListLength = state.todos.length;
        if (todoListLength === 0) {
            action.todo.id = 1;
        } else {
            action.todo.id = state.todos[state.todos.length - 1].id + 1;
        }
        //spread this.state.todos and new element
        let todos = [...state.todos, action.todo];
        return {
            ...state,
            todos
        }
    }

    return state;
}

export default rootReducer;