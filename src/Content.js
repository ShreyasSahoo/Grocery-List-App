import ListItems from "./ListItems";
export default function Content({items,handleCheck,handleDelete}) {
 
  return (
    <>
     <ListItems items = {items}
     handleCheck={handleCheck}
      handleDelete ={handleDelete}/>
  </>
  );
}
