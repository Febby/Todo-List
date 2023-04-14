import { useState } from 'react';
import { NewTodoForm } from './form';
import "./styles.css"

export default function App() {
  
  const [todos, setTodos] = useState([])

  function addTodo(title) {
    setTodos(currentTodos =>{
      return [
        ...currentTodos,
        {id: crypto.randomUUID(), title, completed:false},
      ]
      
    })


  }

  function toggleTodo(id, completed){
    setTodos(currentTodos =>{
        return currentTodos.map(todo =>{
          if(todo.id === id){
            return {...todo,completed}
          }
          return todo
        })

    })
  }

  function deleteTodo(id,completed){
    setTodos(currentTodos =>{
      return currentTodos.filter(todo => todo.id !== id)

  })

  }
  console.log(todos)
  return (
    <div className='App'>
      <h1>Hello There</h1>
      <h2>This is my To-do list</h2>
      <>
      <NewTodoForm onSubmit={addTodo}/>
      <h3 className="header">To-do List</h3>
      <ul className="list">
        {todos.length === 0 && "You're free!"}
        {todos.map(todo => {
          return (
          <li key={todo.id}>
            <label>
              <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)}/>
                {todo.title}
              </label>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Delete</button>
          </li>


          )
        })}
        
      </ul>
      </>
    </div>
  );
}

// Log to console
console.log('Hello console')