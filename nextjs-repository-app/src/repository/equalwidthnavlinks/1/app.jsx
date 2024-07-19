import React from "react";

const CustomApp = () => {
  return (
    <>
    <Navigation/>
    </>
  )
};

export default CustomApp;

const Navigation = () => {
  const links = [
    { id: 1, text: "Home", url: "/" },
    { id: 2, text: "About", url: "/about" },
    { id: 3, text: "Services", url: "/services" },
    { id: 4, text: "Contact", url: "/contact" },
  ];
  return (
    <>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-between">
            {links.map((val) => {
                const {id,text,url} = val
                return(
                    <li key={id}>
                        <a href={url} className="block py-2 px-4 text-white hover:bg-gray-700 text-center">{text}</a>
                    </li>
                )
            })}
        </ul>
      </nav>
    </>
  );
};
