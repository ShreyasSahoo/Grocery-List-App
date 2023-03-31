import React from 'react'
import { useRef } from 'react'
const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  const inputRef = useRef()
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="addItem">Add Item</label>
        <input
            ref = {inputRef}
            type="text" 
            placeholder='Add Item'
            id="addItem"
            autoFocus
            required
            value = {newItem}
            onChange ={(e)=>setNewItem(e.target.value)}
            />
            <button type='submit'
            onClick={()=>inputRef.current.focus()}></button>
    </form>
  )
}

export default AddItem
