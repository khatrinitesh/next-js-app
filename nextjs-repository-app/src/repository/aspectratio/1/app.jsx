import React from "react";

export default function CustomApp() {
  return (
    <div className="container mx-auto">
      <AspectRatio ratio="16/9">
        <img
          src="https://via.placeholder.com/800x450"
          alt="Sample Image"
          className="object-cover w-[300px] h-[200px]"
        />
      </AspectRatio>
    </div>
  );
}

const AspectRatio = ({ ratio, children }) => {
  return (
    <>
      <div className={`relative aspect-${ratio}`}>{children}</div>
    </>
  );
};
