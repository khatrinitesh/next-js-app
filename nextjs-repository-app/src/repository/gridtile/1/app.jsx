import React from 'react'

const CustomApp = () => {
  return (
    <>
    <TileGrid/>
    </>
  )
}

export default CustomApp

const TileGrid = () => {
    const tiles = [
      { id: 1, title: 'Tile 1', color: 'bg-blue-200' },
      { id: 2, title: 'Tile 2', color: 'bg-green-200' },
      { id: 3, title: 'Tile 3', color: 'bg-yellow-200' },
      { id: 4, title: 'Tile 4', color: 'bg-red-200' },
      { id: 5, title: 'Tile 5', color: 'bg-purple-200' },
      { id: 6, title: 'Tile 6', color: 'bg-pink-200' },
    ];
  
    return (
      <div className="grid grid-cols-3 gap-4">
        {tiles.map((tile) => (
          <Tile key={tile.id} title={tile.title} color={tile.color} />
        ))}
      </div>
    );
  };

  const Tile = ({ title, color }) => {
    return (
      <div className={`h-32 rounded-lg shadow-md flex items-center justify-center ${color}`}>
        <h2 className="text-lg font-semibold text-center">{title}</h2>
      </div>
    );
  };