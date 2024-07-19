import React, { useState } from "react";
import styled from "styled-components";

const CustomApp = () => {
  // STYLED COMPONENTS
  const Button = styled.button`
    background-color: black;
    color: white;
    border-radius: 5px;
    margin: 0 10px;
    padding: 0 10px;
    transition:all .3s linear;
    &.active,&:hover {
      background-color: blue;
    }
  `;

  const ItemContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Item = styled.div`
    width: 100px;
    height: 100px;
    background-color: lightblue;
    margin: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  `;

const [activeButton, setActiveButton] = useState("all"); // State to track active button
  const items = [
    { id: 1, category: "all", name: "Item 1" },
    { id: 2, category: "all", name: "Item 2" },
    { id: 3, category: "fruit", name: "mango" },
    { id: 4, category: "fruit", name: "apple" },
    { id: 5, category: "veg", name: "potato" },
    { id: 6, category: "veg", name: "tomato" },
    { id: 7, category: "nonveg", name: "chicken" },
    { id: 8, category: "nonveg", name: "mutton" },
    { id: 9, category: "coldrink", name: "pepsi" },
  ];

  const filteredItems = activeButton === 'all' ? items : items.filter(item => item.category === activeButton    )

  const handleButtonClick = (category) => {
    setActiveButton(category)
  }

  return (
    <>
      <div>
        <Button className={activeButton === "all" ? "active" : ""} onClick={() => handleButtonClick("all")}>All</Button>
        <Button className={activeButton === "fruit" ? "active" : ""} onClick={() => handleButtonClick("fruit")}>Fruit</Button>
        <Button className={activeButton === "veg" ? "active" : ""} onClick={() => handleButtonClick("veg")}>Veg</Button>
        <Button className={activeButton === "nonveg" ? "active" : ""} onClick={() => handleButtonClick("nonveg")}>NonVeg</Button>
        <Button className={activeButton === "coldrink" ? "active" : ""} onClick={() => handleButtonClick("coldrink")}>Cold drink</Button>
      </div>
      <ItemContainer>
        {filteredItems.map((item) => (
          <Item key={item.id}>
            {item.name}
          </Item>
        ))}
      </ItemContainer>
    </>
  );
};

export default CustomApp;
