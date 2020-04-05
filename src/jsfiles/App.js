import React from 'react';
import Todo from '../jsfiles/todo.js'
import Display from '../jsfiles/display.js'
import Title from '../jsfiles/title.js'
import Footer from '../jsfiles/footer.js'
import '../cssfiles/app.css'


export default class App extends React.Component  {

  state = {
    todos:[]
  };

  addTodo = todo =>{
    this.setState({
      todos : [todo,...this.state.todos]
    });
   
  };

  changer = (id) =>{
   this.setState({todos : this.state.todos.map(el => {
     if (el.id == id){
       if (el.bool === false)
       {
         return {
           ...el,
           btn : 'Undo',
           bool : true,
           styling:'lined'
         }
        
       }
       else 
       {
         return {
           ...el,
           btn : 'Complete',
           bool : false,
           styling:'not-lined'
         }
       }
     }
     else {return el
     }
     
   })})
   }
  
  delete = (id) =>{
  
  this.setState({todos: this.state.todos.filter(j => j.id !== id)})
  }


  render(){
    return (<div className='todo'>
      <Todo onSubmit={this.addTodo} />
      <Title />
      <div className='items-list'>
      <Display list={this.state.todos} changer={this.changer} delete={this.delete}/>
      <Footer />
      </div>
    </div>)
  }

 
}