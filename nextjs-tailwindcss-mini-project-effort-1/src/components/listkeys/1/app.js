"use client"
import {useState} from 'react'

const ListKeys = () => {
    const [items, setItems] = useState([
        { id: 1, text: 'Item 1' },
        { id: 2, text: 'Item 2' },
        { id: 3, text: 'Item 3' },
      ]);


      const handleClick = (id) => {
        // find the item by id and update its text
        setItems((prevItems) => prevItems.map((item) => item.id === id ? {...item,text:`Clicked ${item.text}`}:item))
      }

  return (
    <div>
        <h2>Item List</h2>
        <ul>
            {items.map((val) => {
                const {id,text} = val
                return(
                    <ListItem id={id} text={text} onClick={handleClick}/>
                )
            })}
        </ul>
    </div>
  )
}

export default ListKeys

const ListItem = ({id,text,onClick}) => {
    return(
        <>
         <li>
            <span>{text}</span>
            <button onClick={() => onClick(id)}>Click</button>
         </li>
        </>
    )
}