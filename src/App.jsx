import { useState } from 'react';
import "./styles.css"

export default function App() {
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      { id: crypto.randomUUID(), title: newItem, completed: false }
    ]);
  }
  console.log(todos)
  return (
    <div className='App'>
      <h1>Hello There</h1>
      <h2>This is my To-do list</h2>
      <>
      <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item </label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" />
          </div>
          <button className="btn">Add</button>
      </form>
      <h3 className="header">To-do List</h3>
      <ul className="list">
        <li>
          <label>
          <input type="checkbox"/>
            Item 1
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
        <li>
          <label>
          <input type="checkbox"/>
            Item 2
          </label>
          <button className="btn btn-danger">Delete</button>
        </li>
      </ul>
      </>
    </div>
  );
}

// Log to console
console.log('Hello console')