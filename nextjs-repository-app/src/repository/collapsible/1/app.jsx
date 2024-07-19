import React,{useState } from "react";

const CustomApp = () => {
  return (
    <>
     <div className="contianer mx-auto mt-8">
        <Collapsible title="click to expand">
            <p>
            Consequat enim officia est adipisicing culpa dolor Lorem est fugiat
            nostrud elit anim laborum tempor. Mollit cupidatat voluptate non
            exercitation cillum elit. Ad non adipisicing mollit nulla duis duis
            excepteur adipisicing anim id Lorem nulla sunt elit. Ut occaecat
            exercitation irure exercitation ad. Dolore eu exercitation tempor ea
            irure id dolor incididunt voluptate ea. Aute voluptate qui Lorem amet
            ut elit do consectetur fugiat incididunt enim. Pariatur est et cillum
            nostrud culpa consequat sunt exercitation. Esse fugiat aliquip laborum
            proident eu magna nulla sunt aliqua. Excepteur sint fugiat officia ea
            amet ex ex in irure est fugiat dolor. Sint duis duis eu ad aliqua. Id
            sint dolor labore Lorem laborum Lorem officia id sint non dolor
            commodo consectetur ex. Ex culpa eu fugiat quis aliquip sit sint
            laborum ea minim reprehenderit sunt dolore. Enim quis tempor qui
            laborum non tempor reprehenderit ea aliquip ea occaecat sunt consequat
            ex. Adipisicing voluptate et fugiat fugiat dolor. Anim ad sint
            occaecat consequat occaecat sint sit quis proident quis. Officia
            laboris aliquip ad labore pariatur. Enim reprehenderit Lorem consequat
            proident sit minim enim sint occaecat consequat enim commodo aliqua
            aliquip.
            </p>
        </Collapsible>
      </div>
    </>
  );
};

export default CustomApp;

const Collapsible = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded p-2 mb-2">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={toggleCollapse}
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};
