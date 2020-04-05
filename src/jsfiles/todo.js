import React from 'react'
import '../cssfiles/todo.css'
export default class Todo extends React.Component{
    state = {
        text:''
    };

    handlechange = (event) => {
       this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit = (event) =>{
        event.preventDefault();
        if (this.state.text.length != 0){
            this.props.onSubmit({
                id : 1 + Math.random(),
                text:this.state.text,
                bool : false,
                btn : 'Complete',
                styling : 'not-lined'
            })
        }
        
        this.setState({text :''})
    }

    render() {
        return (
            <form className='form-section' onClick={this.handleSubmit}> 
                <h1 className='form-first-title'>To-Do App!</h1>
                <h3 className='form-second-title'>Add New To-Do</h3>
           <input
           name='text'
           value={this.state.text} 
           onChange={this.handlechange}
           placeholder='Enter New Task'
           className='form-input'
           />
           <button className='add-btn' onClick={this.handleSubmit}>Add</button>
            </form>
        )
    }
}
