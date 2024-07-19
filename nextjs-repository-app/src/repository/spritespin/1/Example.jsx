import React, { useEffect, useState } from "react";

const Example = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const toggleSpin = () => {
    setIsSpinning(!isSpinning);
  };
  return (
    <>
      <div
        className={`sprite ${isSpinning ? "spin" : ""}`}
        onClick={toggleSpin}
      >
        Minim nulla anim adipisicing veniam aute adipisicing ad. Dolor est
        deserunt id dolor proident eiusmod magna irure quis elit aliquip.
        Pariatur elit excepteur aliqua ut id. Magna in ex nostrud ex adipisicing
        aliquip fugiat culpa do aliquip qui. Qui commodo veniam adipisicing est
        sit enim ipsum eiusmod. Labore ea mollit id nostrud fugiat aute.
        Incididunt pariatur eu sint non excepteur eiusmod amet enim consequat.
        Incididunt laboris ad deserunt proident ex. Ad culpa culpa aliqua
        occaecat consectetur ut. Eiusmod Lorem mollit laborum proident duis
        nostrud excepteur aute. Aliquip ipsum aliqua incididunt irure
        consectetur culpa anim exercitation ut aliquip non cupidatat ipsum
        voluptate. Laborum labore laboris nisi nisi proident adipisicing Lorem
        sint sit. Amet nulla occaecat amet aliquip reprehenderit excepteur amet.
        Consectetur laborum in nulla aliqua est non. Laborum reprehenderit
        adipisicing aute deserunt cupidatat dolore cupidatat duis elit dolore.
        Ipsum qui aliqua aute enim pariatur cillum. Laboris irure occaecat anim
        ut sit ea aute proident pariatur voluptate aliquip. Cillum eu occaecat
        fugiat deserunt anim fugiat proident. Quis tempor culpa incididunt
        cupidatat pariatur quis ea est sint anim occaecat reprehenderit
        proident. Ipsum ullamco aliqua sunt quis esse dolor nulla eu eu tempor
        dolor cupidatat. Eiusmod do sint dolore adipisicing cupidatat
        adipisicing esse duis labore mollit proident dolor. Qui ex aliqua
        incididunt officia in dolore ipsum nulla. Id amet adipisicing
        consectetur incididunt ut elit quis cupidatat quis est consectetur esse
        sit. Et voluptate pariatur enim velit nulla ipsum aliquip. Incididunt
        pariatur duis reprehenderit commodo id do esse ipsum. Aute esse enim
        labore nisi quis Lorem proident deserunt laboris nisi ex quis incididunt
        fugiat. Non laboris fugiat ea excepteur qui nulla. Laborum ullamco
        aliqua quis excepteur consectetur qui nulla fugiat enim fugiat in. Amet
        dolore velit officia proident laborum. Nisi qui in qui commodo non nisi
        eiusmod irure in cupidatat ex qui non qui. In culpa ex tempor amet non
        quis. Cillum adipisicing sint quis sint qui. Ea esse nisi nisi elit in
        commodo ipsum ut eu occaecat laborum aute velit. Nisi consequat enim in
        eiusmod voluptate eu cillum minim pariatur proident non minim ullamco.
        Consectetur et non sit magna nostrud cupidatat irure labore eu id minim.
        Officia quis proident non occaecat fugiat duis aute non dolore id
        commodo fugiat ex esse. Lorem consectetur aliqua eu ipsum occaecat eu
        aliqua non officia consectetur. Lorem reprehenderit cillum veniam Lorem
        nisi exercitation id veniam ea. Exercitation id incididunt do incididunt
        cillum magna aute deserunt. Labore est reprehenderit minim labore
        veniam. Exercitation eu eiusmod sint reprehenderit eu laboris ex minim
        qui aliqua sunt. Pariatur occaecat tempor pariatur id. Aute eu veniam
        tempor velit magna magna adipisicing non exercitation occaecat dolore
        aliqua. Anim Lorem velit deserunt sunt amet. Id quis proident
        adipisicing nisi cillum exercitation voluptate reprehenderit fugiat eu
        eu. Anim duis consectetur eiusmod ipsum aute cillum incididunt magna
        sint nisi. Dolore deserunt et laboris ut dolor velit pariatur amet id
        sint laborum consequat.
      </div>
    </>
  );
};

export default Example;
