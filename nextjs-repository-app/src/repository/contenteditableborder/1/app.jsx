import React from "react";

const CustomApp = () => {
  return (
    <>
      <ContentEditableBorder />
    </>
  );
};

export default CustomApp;

const ContentEditableBorder = () => {
  return (
    <>
      <div
        contentEditable={true}
        className="border border-gray-300 rounded p-2"
        placeholder="Type your content here..."
      >
        Est consectetur ullamco ut minim reprehenderit. Ea magna ad ullamco minim proident ad. Cupidatat et exercitation ipsum duis exercitation deserunt do commodo minim ex est quis. In ipsum deserunt ex cillum consectetur. Lorem ullamco aliquip amet laboris reprehenderit eu minim reprehenderit in minim fugiat. Aute aliqua proident tempor quis non et aliqua pariatur proident veniam. Consequat est excepteur dolore anim elit excepteur labore amet enim cillum labore et.
      </div>
    </>
  );
};
