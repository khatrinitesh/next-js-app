import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import "./style.css";

const initialData = [
    { id: 'item-1', content: 'Item 1' },
    { id: 'item-2', content: 'Item 2' },
    { id: 'item-3', content: 'Item 3' },
  ];


const Example = () => {
    const [items, setItems] = useState(initialData);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const { source, destination } = result;
    const newItems = Array.from(items);
    const [movedItem] = newItems.splice(source.index, 1);
    newItems.splice(destination.index, 0, movedItem);
    setItems(newItems);
  };

  
  return (
    <>
        <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="sortable-list">
        {(provided) => (
          <ul
            className="sortable-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    className="sortable-item"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>

    </>
  );
};

export default Example;
