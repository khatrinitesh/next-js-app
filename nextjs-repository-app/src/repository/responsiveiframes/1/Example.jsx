import React from "react";

const Example = ({ src }) => {
  return (
    <>
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          width={560}
          height={315}
          src={src}
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen=""
        />
      </div>
    </>
  );
};

export default Example;
