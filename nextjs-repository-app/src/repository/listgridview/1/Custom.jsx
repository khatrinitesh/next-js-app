import React,{useState } from "react";
import "./style.css";

  

const CustomApp = () => {
  const [gridView, setGridView] = useState(true);

  const toggleView = () => {
    setGridView((prevState) => !prevState);
  };
  return (
    <>
      <h1>List-Grid View Example</h1>
      <button className={`bg-blue-500 text-white rounded-[5px] px-[20px] py-[5px] ${gridView === true ? 'yes' : 'no'}`} onClick={toggleView}>{gridView === true ? 'grid' : 'list'}</button>
      <ListGridView gridView={gridView} />
    </>
  );
};

export default CustomApp;


const ListGridView = ({ gridView }) => {
  return (
    <div className={`list-grid-view ${gridView ? "grid" : "list"}`}>
      {items.map((item) => (
        <div key={item.id} className="item">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

const items = [
    { id: 1, name: "Item 1", description: "Description for Item 1" },
    { id: 2, name: "Item 2", description: "Description for Item 2" },
    { id: 3, name: "Item 3", description: "Description for Item 3" },
    { id: 4, name: "Item 4", description: "Description for Item 4" },
    { id: 5, name: "Item 5", description: "Description for Item 5" },
    { id: 1, name: "Item 6", description: "Description for Item 6" },
    { id: 2, name: "Item 7", description: "Description for Item 7" },
    { id: 3, name: "Item 8", description: "Description for Item 8" },
    { id: 4, name: "Item 9", description: "Description for Item 9" },
    { id: 5, name: "Item 10", description: "Description for Item 10" },
  ];