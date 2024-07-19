import React, { useEffect, useState } from "react";

const Example = () => {
  const [navbarVisible, setNavbarVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 20) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(false);
      }
    };

    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <>
      <div
        id="navbar"
        className={`flex bg-black fixed top-0 w-full transition duration-300 ${
          navbarVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <a
          href="#home"
          className="text-white block text-center py-3 px-4 no-underline"
        >
          Home
        </a>
        <a
          href="#news"
          className="text-white block text-center py-3 px-4 no-underline"
        >
          News
        </a>
        <a
          href="#contact"
          className="text-white block text-center py-3 px-4 no-underline"
        >
          Contact
        </a>
      </div>
      <p>
        Nulla tempor incididunt laboris commodo dolor ad laborum mollit officia
        occaecat proident. Fugiat amet aute ex velit aliqua in dolore non irure.
        Tempor aliquip nulla tempor deserunt nisi occaecat sint duis ullamco
        magna exercitation. Id mollit dolor aliqua consequat culpa sit. Esse
        cupidatat aute id nisi eu fugiat laborum commodo nostrud fugiat occaecat
        aliqua. Ullamco veniam adipisicing deserunt occaecat. Aliqua tempor esse
        esse cillum consequat et duis ad cillum est labore consequat. Aliqua eu
        non eu eiusmod in quis exercitation dolor do excepteur mollit officia
        aliquip magna. Irure sint commodo nulla esse incididunt amet ullamco
        culpa commodo qui reprehenderit minim. Aliqua eu culpa amet deserunt
        dolore duis in duis ut do. Dolore adipisicing voluptate eu veniam
        excepteur ut proident reprehenderit ad incididunt sunt non et occaecat.
        Veniam cupidatat laboris quis do labore laboris officia laboris mollit
        incididunt enim. Pariatur nulla in cillum aliqua magna ad sit cupidatat
        ad. Nostrud voluptate in ipsum deserunt tempor officia aliqua elit
        aliquip magna amet mollit ea. Qui laboris incididunt amet eu ad magna
        officia sint sint sunt Lorem. Deserunt sint voluptate esse sit tempor
        incididunt. Cupidatat tempor pariatur aliquip ex incididunt est.
        Consequat voluptate consequat id velit ea occaecat. In sint laboris
        velit quis aute et esse culpa tempor. Mollit cupidatat fugiat elit
        minim. Irure in id eu culpa ut fugiat do aliquip commodo irure. Lorem do
        mollit cillum ullamco quis in aute commodo commodo non. Exercitation in
        elit exercitation enim mollit. Ullamco sit fugiat amet do irure sit
        cupidatat est aliqua labore tempor quis irure eiusmod. Aliqua excepteur
        culpa eiusmod duis duis esse nisi ex laborum minim eiusmod quis. Amet
        consectetur consequat est reprehenderit ad ipsum pariatur adipisicing
        velit ad ut. Aute consequat amet dolore ipsum qui ullamco consectetur ea
        ad deserunt do labore labore. Aliquip anim aliquip do aliqua dolore.
        Mollit sunt deserunt minim eu anim velit labore sint amet est enim
        consectetur culpa culpa. Incididunt dolore adipisicing esse sint velit
        esse nulla aliquip quis id. Dolore qui reprehenderit id ex. Do proident
        ad voluptate aliqua cupidatat duis laborum aliqua consequat aliquip
        excepteur. Laboris ad aliqua laboris est voluptate labore adipisicing
        pariatur veniam exercitation enim incididunt voluptate. Excepteur dolore
        duis sint quis nulla culpa qui irure culpa. Exercitation enim
        consectetur in ipsum velit. Do reprehenderit voluptate non labore nulla
        nisi voluptate cillum duis nisi eu. Reprehenderit dolore ad proident
        velit. Exercitation veniam ad eu amet voluptate irure cillum incididunt
        labore sit et. Esse id esse eiusmod culpa sit non. Deserunt aliqua in
        consectetur sunt eu aliquip. Consectetur excepteur Lorem qui pariatur
        ipsum non fugiat labore labore commodo ea sint. Aute reprehenderit
        aliquip exercitation in eiusmod incididunt sit. Do in fugiat aliquip
        nostrud magna pariatur consectetur do dolor laboris aliqua. Non elit
        voluptate ut incididunt eiusmod et sunt magna velit occaecat consectetur
        commodo. Est veniam aute in cillum nulla excepteur irure. Ut laboris
        elit officia duis commodo reprehenderit voluptate quis Lorem eu non
        aliquip. Sint ea tempor officia ut aliqua. Occaecat est aliquip sint
        cupidatat officia enim reprehenderit esse consequat eu cillum amet
        laboris. Est sit amet consectetur duis adipisicing aute aute ex nulla eu
        aute. Cupidatat occaecat consequat consectetur duis nulla. Commodo magna
        labore culpa incididunt dolor enim. Magna culpa qui occaecat aliqua
        ipsum ea incididunt deserunt. Velit occaecat proident reprehenderit
        cillum ex minim do irure deserunt Lorem sit labore cupidatat nulla. Sunt
        reprehenderit ullamco et nulla et commodo et adipisicing velit pariatur
        ullamco. Consequat nulla sit labore minim laborum eiusmod adipisicing
        velit irure qui. Officia aliqua et et cupidatat fugiat et est excepteur.
      </p>
      <p>
        Nulla tempor incididunt laboris commodo dolor ad laborum mollit officia
        occaecat proident. Fugiat amet aute ex velit aliqua in dolore non irure.
        Tempor aliquip nulla tempor deserunt nisi occaecat sint duis ullamco
        magna exercitation. Id mollit dolor aliqua consequat culpa sit. Esse
        cupidatat aute id nisi eu fugiat laborum commodo nostrud fugiat occaecat
        aliqua. Ullamco veniam adipisicing deserunt occaecat. Aliqua tempor esse
        esse cillum consequat et duis ad cillum est labore consequat. Aliqua eu
        non eu eiusmod in quis exercitation dolor do excepteur mollit officia
        aliquip magna. Irure sint commodo nulla esse incididunt amet ullamco
        culpa commodo qui reprehenderit minim. Aliqua eu culpa amet deserunt
        dolore duis in duis ut do. Dolore adipisicing voluptate eu veniam
        excepteur ut proident reprehenderit ad incididunt sunt non et occaecat.
        Veniam cupidatat laboris quis do labore laboris officia laboris mollit
        incididunt enim. Pariatur nulla in cillum aliqua magna ad sit cupidatat
        ad. Nostrud voluptate in ipsum deserunt tempor officia aliqua elit
        aliquip magna amet mollit ea. Qui laboris incididunt amet eu ad magna
        officia sint sint sunt Lorem. Deserunt sint voluptate esse sit tempor
        incididunt. Cupidatat tempor pariatur aliquip ex incididunt est.
        Consequat voluptate consequat id velit ea occaecat. In sint laboris
        velit quis aute et esse culpa tempor. Mollit cupidatat fugiat elit
        minim. Irure in id eu culpa ut fugiat do aliquip commodo irure. Lorem do
        mollit cillum ullamco quis in aute commodo commodo non. Exercitation in
        elit exercitation enim mollit. Ullamco sit fugiat amet do irure sit
        cupidatat est aliqua labore tempor quis irure eiusmod. Aliqua excepteur
        culpa eiusmod duis duis esse nisi ex laborum minim eiusmod quis. Amet
        consectetur consequat est reprehenderit ad ipsum pariatur adipisicing
        velit ad ut. Aute consequat amet dolore ipsum qui ullamco consectetur ea
        ad deserunt do labore labore. Aliquip anim aliquip do aliqua dolore.
        Mollit sunt deserunt minim eu anim velit labore sint amet est enim
        consectetur culpa culpa. Incididunt dolore adipisicing esse sint velit
        esse nulla aliquip quis id. Dolore qui reprehenderit id ex. Do proident
        ad voluptate aliqua cupidatat duis laborum aliqua consequat aliquip
        excepteur. Laboris ad aliqua laboris est voluptate labore adipisicing
        pariatur veniam exercitation enim incididunt voluptate. Excepteur dolore
        duis sint quis nulla culpa qui irure culpa. Exercitation enim
        consectetur in ipsum velit. Do reprehenderit voluptate non labore nulla
        nisi voluptate cillum duis nisi eu. Reprehenderit dolore ad proident
        velit. Exercitation veniam ad eu amet voluptate irure cillum incididunt
        labore sit et. Esse id esse eiusmod culpa sit non. Deserunt aliqua in
        consectetur sunt eu aliquip. Consectetur excepteur Lorem qui pariatur
        ipsum non fugiat labore labore commodo ea sint. Aute reprehenderit
        aliquip exercitation in eiusmod incididunt sit. Do in fugiat aliquip
        nostrud magna pariatur consectetur do dolor laboris aliqua. Non elit
        voluptate ut incididunt eiusmod et sunt magna velit occaecat consectetur
        commodo. Est veniam aute in cillum nulla excepteur irure. Ut laboris
        elit officia duis commodo reprehenderit voluptate quis Lorem eu non
        aliquip. Sint ea tempor officia ut aliqua. Occaecat est aliquip sint
        cupidatat officia enim reprehenderit esse consequat eu cillum amet
        laboris. Est sit amet consectetur duis adipisicing aute aute ex nulla eu
        aute. Cupidatat occaecat consequat consectetur duis nulla. Commodo magna
        labore culpa incididunt dolor enim. Magna culpa qui occaecat aliqua
        ipsum ea incididunt deserunt. Velit occaecat proident reprehenderit
        cillum ex minim do irure deserunt Lorem sit labore cupidatat nulla. Sunt
        reprehenderit ullamco et nulla et commodo et adipisicing velit pariatur
        ullamco. Consequat nulla sit labore minim laborum eiusmod adipisicing
        velit irure qui. Officia aliqua et et cupidatat fugiat et est excepteur.
      </p>
      <p>
        Nulla tempor incididunt laboris commodo dolor ad laborum mollit officia
        occaecat proident. Fugiat amet aute ex velit aliqua in dolore non irure.
        Tempor aliquip nulla tempor deserunt nisi occaecat sint duis ullamco
        magna exercitation. Id mollit dolor aliqua consequat culpa sit. Esse
        cupidatat aute id nisi eu fugiat laborum commodo nostrud fugiat occaecat
        aliqua. Ullamco veniam adipisicing deserunt occaecat. Aliqua tempor esse
        esse cillum consequat et duis ad cillum est labore consequat. Aliqua eu
        non eu eiusmod in quis exercitation dolor do excepteur mollit officia
        aliquip magna. Irure sint commodo nulla esse incididunt amet ullamco
        culpa commodo qui reprehenderit minim. Aliqua eu culpa amet deserunt
        dolore duis in duis ut do. Dolore adipisicing voluptate eu veniam
        excepteur ut proident reprehenderit ad incididunt sunt non et occaecat.
        Veniam cupidatat laboris quis do labore laboris officia laboris mollit
        incididunt enim. Pariatur nulla in cillum aliqua magna ad sit cupidatat
        ad. Nostrud voluptate in ipsum deserunt tempor officia aliqua elit
        aliquip magna amet mollit ea. Qui laboris incididunt amet eu ad magna
        officia sint sint sunt Lorem. Deserunt sint voluptate esse sit tempor
        incididunt. Cupidatat tempor pariatur aliquip ex incididunt est.
        Consequat voluptate consequat id velit ea occaecat. In sint laboris
        velit quis aute et esse culpa tempor. Mollit cupidatat fugiat elit
        minim. Irure in id eu culpa ut fugiat do aliquip commodo irure. Lorem do
        mollit cillum ullamco quis in aute commodo commodo non. Exercitation in
        elit exercitation enim mollit. Ullamco sit fugiat amet do irure sit
        cupidatat est aliqua labore tempor quis irure eiusmod. Aliqua excepteur
        culpa eiusmod duis duis esse nisi ex laborum minim eiusmod quis. Amet
        consectetur consequat est reprehenderit ad ipsum pariatur adipisicing
        velit ad ut. Aute consequat amet dolore ipsum qui ullamco consectetur ea
        ad deserunt do labore labore. Aliquip anim aliquip do aliqua dolore.
        Mollit sunt deserunt minim eu anim velit labore sint amet est enim
        consectetur culpa culpa. Incididunt dolore adipisicing esse sint velit
        esse nulla aliquip quis id. Dolore qui reprehenderit id ex. Do proident
        ad voluptate aliqua cupidatat duis laborum aliqua consequat aliquip
        excepteur. Laboris ad aliqua laboris est voluptate labore adipisicing
        pariatur veniam exercitation enim incididunt voluptate. Excepteur dolore
        duis sint quis nulla culpa qui irure culpa. Exercitation enim
        consectetur in ipsum velit. Do reprehenderit voluptate non labore nulla
        nisi voluptate cillum duis nisi eu. Reprehenderit dolore ad proident
        velit. Exercitation veniam ad eu amet voluptate irure cillum incididunt
        labore sit et. Esse id esse eiusmod culpa sit non. Deserunt aliqua in
        consectetur sunt eu aliquip. Consectetur excepteur Lorem qui pariatur
        ipsum non fugiat labore labore commodo ea sint. Aute reprehenderit
        aliquip exercitation in eiusmod incididunt sit. Do in fugiat aliquip
        nostrud magna pariatur consectetur do dolor laboris aliqua. Non elit
        voluptate ut incididunt eiusmod et sunt magna velit occaecat consectetur
        commodo. Est veniam aute in cillum nulla excepteur irure. Ut laboris
        elit officia duis commodo reprehenderit voluptate quis Lorem eu non
        aliquip. Sint ea tempor officia ut aliqua. Occaecat est aliquip sint
        cupidatat officia enim reprehenderit esse consequat eu cillum amet
        laboris. Est sit amet consectetur duis adipisicing aute aute ex nulla eu
        aute. Cupidatat occaecat consequat consectetur duis nulla. Commodo magna
        labore culpa incididunt dolor enim. Magna culpa qui occaecat aliqua
        ipsum ea incididunt deserunt. Velit occaecat proident reprehenderit
        cillum ex minim do irure deserunt Lorem sit labore cupidatat nulla. Sunt
        reprehenderit ullamco et nulla et commodo et adipisicing velit pariatur
        ullamco. Consequat nulla sit labore minim laborum eiusmod adipisicing
        velit irure qui. Officia aliqua et et cupidatat fugiat et est excepteur.
      </p>
      <p>
        Nulla tempor incididunt laboris commodo dolor ad laborum mollit officia
        occaecat proident. Fugiat amet aute ex velit aliqua in dolore non irure.
        Tempor aliquip nulla tempor deserunt nisi occaecat sint duis ullamco
        magna exercitation. Id mollit dolor aliqua consequat culpa sit. Esse
        cupidatat aute id nisi eu fugiat laborum commodo nostrud fugiat occaecat
        aliqua. Ullamco veniam adipisicing deserunt occaecat. Aliqua tempor esse
        esse cillum consequat et duis ad cillum est labore consequat. Aliqua eu
        non eu eiusmod in quis exercitation dolor do excepteur mollit officia
        aliquip magna. Irure sint commodo nulla esse incididunt amet ullamco
        culpa commodo qui reprehenderit minim. Aliqua eu culpa amet deserunt
        dolore duis in duis ut do. Dolore adipisicing voluptate eu veniam
        excepteur ut proident reprehenderit ad incididunt sunt non et occaecat.
        Veniam cupidatat laboris quis do labore laboris officia laboris mollit
        incididunt enim. Pariatur nulla in cillum aliqua magna ad sit cupidatat
        ad. Nostrud voluptate in ipsum deserunt tempor officia aliqua elit
        aliquip magna amet mollit ea. Qui laboris incididunt amet eu ad magna
        officia sint sint sunt Lorem. Deserunt sint voluptate esse sit tempor
        incididunt. Cupidatat tempor pariatur aliquip ex incididunt est.
        Consequat voluptate consequat id velit ea occaecat. In sint laboris
        velit quis aute et esse culpa tempor. Mollit cupidatat fugiat elit
        minim. Irure in id eu culpa ut fugiat do aliquip commodo irure. Lorem do
        mollit cillum ullamco quis in aute commodo commodo non. Exercitation in
        elit exercitation enim mollit. Ullamco sit fugiat amet do irure sit
        cupidatat est aliqua labore tempor quis irure eiusmod. Aliqua excepteur
        culpa eiusmod duis duis esse nisi ex laborum minim eiusmod quis. Amet
        consectetur consequat est reprehenderit ad ipsum pariatur adipisicing
        velit ad ut. Aute consequat amet dolore ipsum qui ullamco consectetur ea
        ad deserunt do labore labore. Aliquip anim aliquip do aliqua dolore.
        Mollit sunt deserunt minim eu anim velit labore sint amet est enim
        consectetur culpa culpa. Incididunt dolore adipisicing esse sint velit
        esse nulla aliquip quis id. Dolore qui reprehenderit id ex. Do proident
        ad voluptate aliqua cupidatat duis laborum aliqua consequat aliquip
        excepteur. Laboris ad aliqua laboris est voluptate labore adipisicing
        pariatur veniam exercitation enim incididunt voluptate. Excepteur dolore
        duis sint quis nulla culpa qui irure culpa. Exercitation enim
        consectetur in ipsum velit. Do reprehenderit voluptate non labore nulla
        nisi voluptate cillum duis nisi eu. Reprehenderit dolore ad proident
        velit. Exercitation veniam ad eu amet voluptate irure cillum incididunt
        labore sit et. Esse id esse eiusmod culpa sit non. Deserunt aliqua in
        consectetur sunt eu aliquip. Consectetur excepteur Lorem qui pariatur
        ipsum non fugiat labore labore commodo ea sint. Aute reprehenderit
        aliquip exercitation in eiusmod incididunt sit. Do in fugiat aliquip
        nostrud magna pariatur consectetur do dolor laboris aliqua. Non elit
        voluptate ut incididunt eiusmod et sunt magna velit occaecat consectetur
        commodo. Est veniam aute in cillum nulla excepteur irure. Ut laboris
        elit officia duis commodo reprehenderit voluptate quis Lorem eu non
        aliquip. Sint ea tempor officia ut aliqua. Occaecat est aliquip sint
        cupidatat officia enim reprehenderit esse consequat eu cillum amet
        laboris. Est sit amet consectetur duis adipisicing aute aute ex nulla eu
        aute. Cupidatat occaecat consequat consectetur duis nulla. Commodo magna
        labore culpa incididunt dolor enim. Magna culpa qui occaecat aliqua
        ipsum ea incididunt deserunt. Velit occaecat proident reprehenderit
        cillum ex minim do irure deserunt Lorem sit labore cupidatat nulla. Sunt
        reprehenderit ullamco et nulla et commodo et adipisicing velit pariatur
        ullamco. Consequat nulla sit labore minim laborum eiusmod adipisicing
        velit irure qui. Officia aliqua et et cupidatat fugiat et est excepteur.
      </p>
    </>
  );
};

export default Example;
