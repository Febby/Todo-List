import { useEffect, useState } from 'react';
import { NewTodoForm } from './form';
import "./styles.css"
import { TodoList } from './Todolist';

export default function App() {
  
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  //Save item to localstorage
  useEffect(() =>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

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
      <TodoList todos={todos} 
      toggleTodo={toggleTodo} 
      deleteTodo={deleteTodo}/>
      </>
    </div>
  );
}

// Log to console
console.log('Hello console')