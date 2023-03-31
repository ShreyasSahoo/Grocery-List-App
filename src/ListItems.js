import React from 'react'
import LineItem from './LineItem'

export default function ListItems({items,handleCheck,handleDelete}) {
  return (
    <ul>
    {items.map((item) => (
      <LineItem item ={item}
        handleCheck={handleCheck}
        handleDelete = {handleDelete}
        />
    ))}
  </ul>
  )
}
