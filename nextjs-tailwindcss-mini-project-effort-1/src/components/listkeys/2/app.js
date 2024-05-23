"use client"
import {useState} from 'react'

const ListKeys = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ]);

      const handleAddItem = () => {
        setItems((prevItem) => 
        [...prevItem,{
            id:items.length + 1,
            text:`Item ${items.length + 1}`
        }])
      };

      const handleDel = (id) => {
        setItems((prevItems) => prevItems.filter((item) => item.id !== id))
      }

  return (
    <div>
        <ul>
        {items.map((item) => (
          <ListItem key={item.id} id={item.id} text={item.text} btnDel={handleDel} />
        ))}
      </ul>
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  )
}

export default ListKeys

const ListItem = ({id,text,btnDel})  => {
    return(
        <li key={id}>
         {text}
         <button onClick={() => btnDel(id)}>Delete</button>
        </li>
    )
}
