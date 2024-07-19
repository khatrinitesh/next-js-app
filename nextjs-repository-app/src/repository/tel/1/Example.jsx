import React from "react";
// import "./style.css";

const Example = ({phoneNumber }) => {
  return (
    <>
    <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>
    </>
  );
};

export default Example;
