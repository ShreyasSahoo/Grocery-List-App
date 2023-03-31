import React from 'react'

import { FaTrashAlt } from "react-icons/fa";
const LineItem = ({item,handleCheck,handleDelete}) => {

  return (
    <li className="item" key={item.id}>
        <input          
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <label style = {(item.checked)?{textDecoration:"line-through"}:null}>{item.item}</label>
        <FaTrashAlt role="button" onClick={()=>handleDelete(item.id)}/>
      </li>
  )
}

export default LineItem
