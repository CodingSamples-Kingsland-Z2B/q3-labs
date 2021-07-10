import './App.css';
import React , {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import AddForm from './Components/AddForm/AddForm'

import TodoList from './Components/TodoList/TodoList';


// function App() {

//   const todos = ['Buy Milk', 'Walk the dog', 'do my Homework']

//   return (
//     <div>
//       <Navbar title="Todo App"/>
//       <AddForm/>
//       <TodoList todos={todos}/>
//       </div>
//   );
// }


const App =() =>{


const todos= ['Buy Milk', 'Walk the dog', 'do my Homework']
const [todoList, setTodos]= useState(todos)

 const addTodo = (todo)=>{
  setTodos((prevTodos)=>([todo, ...prevTodos]))
}

    return (
      <div>
        <Navbar title="Todo App" />
        <AddForm addTodo={addTodo}/>
        <TodoList todos={todoList}/>
        </div>
    );

}

export default App;
