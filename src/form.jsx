import { useState } from 'react';

export function NewTodoForm(props){
    
    const [newItem, setNewItem] = useState("")
    
    function handleSubmit(e) {
      e.preventDefault();
     // Check for empty input
      if (!newItem.trim()) {
        alert("Please enter a valid input.");
        return;
      }
  
      props.onSubmit(newItem)

      setNewItem("")
      }
   

    return (
        <form className="new-item-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="item">New Item </label>
          <input value={newItem} onChange={e => setNewItem(e.target.value)} type="text" id="item" required />
          </div>
          <button className="btn">Add</button>
      </form>
    )
}