import React from "react";

const CustomApp = () => {
    const cardsItem = [
        { title: 'Card 11111', content: 'Prathmesh of Card 1' },
        { title: 'Card 2', content: 'Content of Card 2' },
        { title: 'Card 3', content: 'Content of Card 3' },
      ];
  return(
    <>
        <div className="container mx-auto">
            <CardList cards={cardsItem}/>
        </div>
    </>
  )
};

export default CustomApp;

const CardList = ({ cards }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {cards.map((card, index) => (
        <Card key={index} title={card.title} content={card.content} />
      ))}
    </div>
  );
};

const Card = ({title,content}) => {
    return(
        <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-700">{content}</p>
            <button>&times;</button>
        </div>
    )
}