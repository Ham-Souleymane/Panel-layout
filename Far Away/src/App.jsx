import { use, useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
import "./App.css";

function App() {
  const [items,setItem]= useState([]);
  
  function handleAddItems(item){
    setItem(items=>[...items,item]);
  }
  function handleDelate(id){
    setItem(items=>items.filter(item=> item.id!==id));
  }
  function handlePacked(id){
    setItem(items=>items.map( item=>item.id===id?{...item, packed:!item.packed} : item))

  }
 function deleteList(){
  const confirmed= window.confirm("Are you sure you want to delete all items?");
 if(confirmed) setItem([]);

 }
 
  return (
    <div className="Body">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items}  onDelateItem={handleDelate} onPackedItem={handlePacked} onDeleteList={deleteList} />
      <Stats items={items} />
    
    </div>
  );
}

export default App;
function Logo() {
  return <h1 className="logo"> 🌴 FAR AWAY 🎒</h1>;
}
function Form({onAddItems}) {
  const [description,setDescription]= useState("");
  const [quantity,setQuantity]=useState(1);

  function handleSubmit(e){
    e.preventDefault()
    if(!description) return;

    const newItem={description,quantity,packed:false,id: Date.now()}
onAddItems(newItem);
     setDescription("");
     setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 🤷‍♂️ trip?</h3>
      <select name="" id="" value={quantity} onChange={e=> setQuantity(+e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="item .." value={description} onChange={e=> setDescription(e.target.value)} />
      <button>ADD</button>
    </form>
  );
}

function PackingList({items,onDelateItem,onPackedItem,onDeleteList}) {
  const [sortedby,setSortedby] =useState("input");
  let sortedItems;
  if(sortedby==="input") sortedItems=items;

  if(sortedby==="description"){
      sortedItems=items.slice().sort((a,b)=>a.description.localeCompare(b.description));
  }

  if(sortedby==="packed"){
      sortedItems=items.slice().sort((a,b)=>Number(a.packed)-Number(b.packed));
  }
  return (
    <div className="list">
      <ul className="">
        {sortedItems.map((item) => (
          <Item item={item} key={item.id} onDelateItem={onDelateItem} onPackedItem={onPackedItem} />
        ))}
      </ul>
      <div className="actions">
        <select name="" id="" value={sortedby} onChange={(e)=>setSortedby(e.target.value)}>
          <option value="input"> sort by input Order</option>
          <option value="description"> sort by description</option>
          <option value="packed"> sort by packed status</option>
        </select>
        <button onClick={onDeleteList}>Clear List</button>
      </div>
    </div>
  );
}
function Stats({items}) {
  const numItems=items.length;
  const numPackedItems= items.filter(item=>item.packed).length;
  const percentage = numItems?  Math.round((numPackedItems / numItems) * 100) : 0;
    return (
    <footer>
        <em> { percentage===100? 'You got everything! Ready to go 🌹👋' :`🎒 You have ${numItems} items on your list, and you alreadt packed ${percentage}%`}</em>
    </footer>
  );
}
function Item({item,onDelateItem,onPackedItem}) {
  return (
    <li>
     <input type="checkbox" value={item.packed} onChange={()=>onPackedItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {" "}
        {item.quantity} {item.description}
        <button onClick={()=>onDelateItem(item.id)}>❌</button>
      </span>
    </li>
  );
}
