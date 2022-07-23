import React from 'react'

class AddTodo extends React.Component {

    state={
        id:0,
        content:''
    }

    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state)
        //To make the text field empty after submitting one task
        this.setState({
            id:0,
            content:''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="left black-text">Add new Todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content}/>
                    <button type="submit" className="center green white-text" id="add" >Add Task</button>
                </form>
            </div>
        )
    }
}

export default AddTodo