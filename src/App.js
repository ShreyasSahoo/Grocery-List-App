import "./App.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import AddItem from "./AddItem";
import Search from "./Search";
import apiRequest from "./apiRequest";
import { useState, useEffect } from "react";
function App() {
  //returns jsx
  const API_URL = "http://localhost:3500/items";
  const [searchItem, setSearchItem] = useState("");
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [fetchError,setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () =>{
      try{
        const response = await fetch(API_URL);
        
     if (!response.ok) throw Error('response not found');
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null)
      }
      catch(err){
        setFetchError(err.message)
      }
     finally{
      setIsLoading(false)
     }
    }
  setTimeout(() => {
         fetchItems();
      }, 500);
  }, []);
  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id
        ? { ...item, checked: !item.checked, id: item.id }
        : { ...item }
    );
    setItems(listItems);
    const myItem = items.filter((item)=>item.id === id);
    const updateOptions ={
      method:'PATCH',
      headers:{
        'Content-Type':"application/json"
      },
      body: JSON.stringify({checked: myItem[0].checked})
    }
    const reqUrl = `${API_URL}/${id}`
    const response = await apiRequest(reqUrl,updateOptions);
    if(response) setFetchError(response);
  };
  const handleDelete =async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    const deleteOptions ={
      method:'DELETE'
    }
    const reqUrl = `${API_URL}/${id}`
    const response = await apiRequest(reqUrl,deleteOptions);
    if(response) setFetchError(response);
  };
  
  const addItem = async (itemValue) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item: itemValue };
    console.log(myNewItem)
    const listItems = [...items, myNewItem];
    setItems(listItems);
    const postOptions={
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(myNewItem)
    }
      const result = await apiRequest(API_URL,postOptions);
      if(result) setFetchError(result);
    }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Groceries" />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <Search searchItem={searchItem} setSearchItem={setSearchItem} />
<main>
  {isLoading && <p>Loading Data...</p>}
        {fetchError && <p style = {{color:'red'}}>{`Error : ${fetchError}`}</p>}
         {!fetchError && !isLoading && <Content
        items={items.filter((item) =>
          item.item.toLowerCase().includes(searchItem.toLowerCase())
        )}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />}
     </main>   

     
      <Footer length={items.length} />
    </div>
  );
        }

export default App;
