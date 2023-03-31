import React from 'react'
const Search = ({searchItem,setSearchItem}) => {
  return (
    <form className = "searchForm" onSubmit={e=>e.preventDefault()}>
        <label htmlFor="search">Search Box</label>
        <input type="text" 
        id ="search"
        value = {searchItem}
        onChange = {(e)=>setSearchItem(e.target.value)}
        />
    </form>
  )
}
export default Search
