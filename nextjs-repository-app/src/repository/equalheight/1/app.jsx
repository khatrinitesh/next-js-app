import React from "react";

const CustomApp = () => {
  return (
    <>
      <EqualHeightColumns />
    </>
  );
};

export default CustomApp;

const EqualHeightColumns = () => {
  return (
    <>
      <div className="flex gap-[20px]">
        <div className="flex-1 bg-gray-200 p-4">
          {/* Content for first column */}
          Et ex occaecat tempor adipisicing nulla commodo proident anim esse.
          Dolore ex reprehenderit consectetur duis anim reprehenderit ex ad amet
          exercitation anim commodo labore aliqua. Ut fugiat pariatur veniam sit
          exercitation deserunt cillum nisi aliquip pariatur exercitation
          reprehenderit pariatur fugiat.
        </div>
        <div className="flex-1 bg-gray-200 p-4">
          {/* Content for second column */}
          Elit veniam id eu consequat ullamco occaecat ea labore. Lorem nostrud
          exercitation officia incididunt veniam tempor consequat quis. Fugiat
          cupidatat dolore tempor duis eu incididunt qui irure sit Lorem
          consequat veniam. Qui ipsum aliqua aute magna ipsum quis. Fugiat enim
          amet eiusmod laborum eu ullamco reprehenderit sit. Adipisicing aliquip
          ullamco proident eu cillum voluptate et est. Ex eiusmod nostrud do
          esse. Consequat eiusmod nostrud Lorem in veniam ex aute Lorem. Esse
          exercitation tempor consequat ad. Non amet aliqua sit ea id aute est
          officia cupidatat minim sint magna do excepteur. Pariatur ipsum
          reprehenderit qui magna deserunt nulla id pariatur ex. Id minim
          aliquip minim cillum tempor magna velit ea cupidatat. Pariatur et
          veniam do elit tempor fugiat aliqua ad officia. Reprehenderit
          consectetur aliquip duis elit Lorem culpa deserunt magna sit. Proident
          tempor excepteur aliqua non sint eu laborum. Mollit in aute
          reprehenderit incididunt est occaecat aliquip deserunt enim ullamco
          mollit nostrud irure excepteur. Occaecat ad dolor nisi quis duis
          nostrud Lorem. Irure laborum fugiat cupidatat consequat sunt sit
          cillum ullamco ullamco et. Dolore in laborum occaecat esse officia
          ullamco magna qui in. Labore commodo anim commodo occaecat deserunt
          nisi duis exercitation consectetur ea non enim nisi consectetur.
          Labore nostrud eiusmod ullamco commodo sit exercitation ad do Lorem
          qui sint voluptate ipsum Lorem. Magna consequat anim esse sint
          pariatur. Consequat commodo quis eu elit ut ipsum id commodo veniam id
          officia aliquip.
        </div>
        <div className="flex-1 bg-gray-200 p-4">
          {/* Content for third column */}
        </div>
      </div>
    </>
  );
};
