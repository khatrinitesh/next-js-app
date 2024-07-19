import React, { useEffect, useState } from "react";

const Example = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    // Remove scroll event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`bg-black text-white sticky-container transition-all duration-500 delay-300 ${isSticky ? 'fixed top-0 left-0 w-full' : ''}`}>
        Sticky element
      </div>
      <p>
          Nisi eiusmod dolore magna nisi esse quis velit labore elit occaecat
          laborum exercitation anim. Reprehenderit exercitation ullamco dolor
          anim magna deserunt nisi in enim eiusmod amet. Labore aliquip
          adipisicing pariatur ullamco deserunt aute consequat sit et
          reprehenderit. Deserunt duis occaecat et quis in eu irure consectetur
          eiusmod nostrud excepteur et non officia. Esse velit qui esse mollit
          sit elit elit eu id dolor ad. Ea nostrud dolore nisi pariatur qui eu.
          Laboris in sit reprehenderit est ut deserunt irure adipisicing irure
          cillum laboris officia. Voluptate proident elit mollit dolore minim
          laboris eiusmod laboris velit. Esse laborum voluptate consequat dolor.
          Anim ut amet est mollit nulla laborum commodo incididunt et consequat
          dolor eu in id. Eiusmod fugiat ut labore eu enim. Cillum proident
          pariatur tempor elit pariatur dolore velit. Ullamco enim veniam
          exercitation quis in enim ullamco. Velit anim occaecat et sit qui esse
          proident nisi aliquip mollit. Aute minim cillum veniam eu consequat.
          Deserunt aute aliqua id occaecat ut. Do culpa aliquip sunt quis tempor
          velit elit. Aute excepteur proident mollit sint eiusmod proident ex.
          Labore sunt duis deserunt consequat. Esse do ullamco proident officia
          enim deserunt excepteur magna cupidatat duis anim anim esse Lorem.
          Eiusmod nulla proident magna dolor est cillum. Eiusmod enim in duis
          amet deserunt voluptate labore voluptate sunt adipisicing in irure
          culpa exercitation. Elit ea exercitation consectetur anim voluptate
          incididunt do. Quis dolore velit velit dolor incididunt non elit.
          Pariatur consectetur proident reprehenderit dolor ea nisi non in
          cillum. Est voluptate proident laboris exercitation reprehenderit.
          Nostrud qui do aliquip anim aute enim quis cillum. Irure enim anim
          magna occaecat quis non exercitation ad sunt incididunt fugiat irure
          ex. Duis ea duis mollit duis veniam enim aliquip nostrud. Voluptate
          quis consectetur labore nostrud. Qui ea ullamco Lorem fugiat
          consectetur laboris sunt nulla minim ea incididunt sunt dolor mollit.
          Consequat nostrud do sint tempor. Sit culpa eiusmod qui sit minim
          cillum adipisicing anim. Magna aliqua incididunt ipsum do consequat in
          id ipsum est dolore dolor. Excepteur ea eu incididunt id commodo ipsum
          cillum magna. Ea qui consectetur dolore consectetur culpa nisi magna
          eu et veniam. Irure exercitation velit aute deserunt est ullamco non
          ad aliquip qui. Eiusmod dolore nostrud proident ut excepteur pariatur.
          Consequat non consectetur deserunt duis commodo proident qui dolore
          consectetur mollit excepteur nulla anim. Dolore nisi Lorem consequat
          nostrud minim incididunt id. Qui proident qui sunt qui consequat. Ad
          anim proident aute anim. Aliquip ad nostrud duis quis quis laboris.
          Commodo exercitation nostrud sit aliquip quis reprehenderit aute.
          Commodo proident voluptate enim veniam dolore reprehenderit laboris et
          Lorem culpa velit ex est eiusmod. Magna duis deserunt incididunt aute
          anim aliquip nisi id ex dolor ea. Eu nostrud in enim aliquip
          exercitation ullamco ad ut adipisicing culpa eu dolore. Officia
          cupidatat sit officia officia nulla laboris elit quis esse mollit
          exercitation aliquip. Magna minim veniam ea ex velit adipisicing in
          ullamco incididunt. Pariatur cillum nulla nulla sunt excepteur
          incididunt proident eiusmod. Quis aute mollit sint sint ex excepteur
          ipsum veniam quis ad commodo labore enim. Reprehenderit elit ut mollit
          do. Laboris ea nostrud duis reprehenderit dolor quis cupidatat.
          Consectetur adipisicing irure pariatur id do duis est nulla ad.
          Ullamco adipisicing anim in aliqua exercitation voluptate exercitation
          consequat elit duis nisi nisi Lorem. Duis dolore velit adipisicing
          Lorem commodo nulla sit qui. Ea voluptate consequat do ex exercitation
          amet deserunt aliquip veniam do sit ut commodo. Sint eiusmod eu
          eiusmod occaecat ipsum adipisicing cillum commodo.
        </p>
        <p>
          Nisi eiusmod dolore magna nisi esse quis velit labore elit occaecat
          laborum exercitation anim. Reprehenderit exercitation ullamco dolor
          anim magna deserunt nisi in enim eiusmod amet. Labore aliquip
          adipisicing pariatur ullamco deserunt aute consequat sit et
          reprehenderit. Deserunt duis occaecat et quis in eu irure consectetur
          eiusmod nostrud excepteur et non officia. Esse velit qui esse mollit
          sit elit elit eu id dolor ad. Ea nostrud dolore nisi pariatur qui eu.
          Laboris in sit reprehenderit est ut deserunt irure adipisicing irure
          cillum laboris officia. Voluptate proident elit mollit dolore minim
          laboris eiusmod laboris velit. Esse laborum voluptate consequat dolor.
          Anim ut amet est mollit nulla laborum commodo incididunt et consequat
          dolor eu in id. Eiusmod fugiat ut labore eu enim. Cillum proident
          pariatur tempor elit pariatur dolore velit. Ullamco enim veniam
          exercitation quis in enim ullamco. Velit anim occaecat et sit qui esse
          proident nisi aliquip mollit. Aute minim cillum veniam eu consequat.
          Deserunt aute aliqua id occaecat ut. Do culpa aliquip sunt quis tempor
          velit elit. Aute excepteur proident mollit sint eiusmod proident ex.
          Labore sunt duis deserunt consequat. Esse do ullamco proident officia
          enim deserunt excepteur magna cupidatat duis anim anim esse Lorem.
          Eiusmod nulla proident magna dolor est cillum. Eiusmod enim in duis
          amet deserunt voluptate labore voluptate sunt adipisicing in irure
          culpa exercitation. Elit ea exercitation consectetur anim voluptate
          incididunt do. Quis dolore velit velit dolor incididunt non elit.
          Pariatur consectetur proident reprehenderit dolor ea nisi non in
          cillum. Est voluptate proident laboris exercitation reprehenderit.
          Nostrud qui do aliquip anim aute enim quis cillum. Irure enim anim
          magna occaecat quis non exercitation ad sunt incididunt fugiat irure
          ex. Duis ea duis mollit duis veniam enim aliquip nostrud. Voluptate
          quis consectetur labore nostrud. Qui ea ullamco Lorem fugiat
          consectetur laboris sunt nulla minim ea incididunt sunt dolor mollit.
          Consequat nostrud do sint tempor. Sit culpa eiusmod qui sit minim
          cillum adipisicing anim. Magna aliqua incididunt ipsum do consequat in
          id ipsum est dolore dolor. Excepteur ea eu incididunt id commodo ipsum
          cillum magna. Ea qui consectetur dolore consectetur culpa nisi magna
          eu et veniam. Irure exercitation velit aute deserunt est ullamco non
          ad aliquip qui. Eiusmod dolore nostrud proident ut excepteur pariatur.
          Consequat non consectetur deserunt duis commodo proident qui dolore
          consectetur mollit excepteur nulla anim. Dolore nisi Lorem consequat
          nostrud minim incididunt id. Qui proident qui sunt qui consequat. Ad
          anim proident aute anim. Aliquip ad nostrud duis quis quis laboris.
          Commodo exercitation nostrud sit aliquip quis reprehenderit aute.
          Commodo proident voluptate enim veniam dolore reprehenderit laboris et
          Lorem culpa velit ex est eiusmod. Magna duis deserunt incididunt aute
          anim aliquip nisi id ex dolor ea. Eu nostrud in enim aliquip
          exercitation ullamco ad ut adipisicing culpa eu dolore. Officia
          cupidatat sit officia officia nulla laboris elit quis esse mollit
          exercitation aliquip. Magna minim veniam ea ex velit adipisicing in
          ullamco incididunt. Pariatur cillum nulla nulla sunt excepteur
          incididunt proident eiusmod. Quis aute mollit sint sint ex excepteur
          ipsum veniam quis ad commodo labore enim. Reprehenderit elit ut mollit
          do. Laboris ea nostrud duis reprehenderit dolor quis cupidatat.
          Consectetur adipisicing irure pariatur id do duis est nulla ad.
          Ullamco adipisicing anim in aliqua exercitation voluptate exercitation
          consequat elit duis nisi nisi Lorem. Duis dolore velit adipisicing
          Lorem commodo nulla sit qui. Ea voluptate consequat do ex exercitation
          amet deserunt aliquip veniam do sit ut commodo. Sint eiusmod eu
          eiusmod occaecat ipsum adipisicing cillum commodo.
        </p>
        <p>
          Nisi eiusmod dolore magna nisi esse quis velit labore elit occaecat
          laborum exercitation anim. Reprehenderit exercitation ullamco dolor
          anim magna deserunt nisi in enim eiusmod amet. Labore aliquip
          adipisicing pariatur ullamco deserunt aute consequat sit et
          reprehenderit. Deserunt duis occaecat et quis in eu irure consectetur
          eiusmod nostrud excepteur et non officia. Esse velit qui esse mollit
          sit elit elit eu id dolor ad. Ea nostrud dolore nisi pariatur qui eu.
          Laboris in sit reprehenderit est ut deserunt irure adipisicing irure
          cillum laboris officia. Voluptate proident elit mollit dolore minim
          laboris eiusmod laboris velit. Esse laborum voluptate consequat dolor.
          Anim ut amet est mollit nulla laborum commodo incididunt et consequat
          dolor eu in id. Eiusmod fugiat ut labore eu enim. Cillum proident
          pariatur tempor elit pariatur dolore velit. Ullamco enim veniam
          exercitation quis in enim ullamco. Velit anim occaecat et sit qui esse
          proident nisi aliquip mollit. Aute minim cillum veniam eu consequat.
          Deserunt aute aliqua id occaecat ut. Do culpa aliquip sunt quis tempor
          velit elit. Aute excepteur proident mollit sint eiusmod proident ex.
          Labore sunt duis deserunt consequat. Esse do ullamco proident officia
          enim deserunt excepteur magna cupidatat duis anim anim esse Lorem.
          Eiusmod nulla proident magna dolor est cillum. Eiusmod enim in duis
          amet deserunt voluptate labore voluptate sunt adipisicing in irure
          culpa exercitation. Elit ea exercitation consectetur anim voluptate
          incididunt do. Quis dolore velit velit dolor incididunt non elit.
          Pariatur consectetur proident reprehenderit dolor ea nisi non in
          cillum. Est voluptate proident laboris exercitation reprehenderit.
          Nostrud qui do aliquip anim aute enim quis cillum. Irure enim anim
          magna occaecat quis non exercitation ad sunt incididunt fugiat irure
          ex. Duis ea duis mollit duis veniam enim aliquip nostrud. Voluptate
          quis consectetur labore nostrud. Qui ea ullamco Lorem fugiat
          consectetur laboris sunt nulla minim ea incididunt sunt dolor mollit.
          Consequat nostrud do sint tempor. Sit culpa eiusmod qui sit minim
          cillum adipisicing anim. Magna aliqua incididunt ipsum do consequat in
          id ipsum est dolore dolor. Excepteur ea eu incididunt id commodo ipsum
          cillum magna. Ea qui consectetur dolore consectetur culpa nisi magna
          eu et veniam. Irure exercitation velit aute deserunt est ullamco non
          ad aliquip qui. Eiusmod dolore nostrud proident ut excepteur pariatur.
          Consequat non consectetur deserunt duis commodo proident qui dolore
          consectetur mollit excepteur nulla anim. Dolore nisi Lorem consequat
          nostrud minim incididunt id. Qui proident qui sunt qui consequat. Ad
          anim proident aute anim. Aliquip ad nostrud duis quis quis laboris.
          Commodo exercitation nostrud sit aliquip quis reprehenderit aute.
          Commodo proident voluptate enim veniam dolore reprehenderit laboris et
          Lorem culpa velit ex est eiusmod. Magna duis deserunt incididunt aute
          anim aliquip nisi id ex dolor ea. Eu nostrud in enim aliquip
          exercitation ullamco ad ut adipisicing culpa eu dolore. Officia
          cupidatat sit officia officia nulla laboris elit quis esse mollit
          exercitation aliquip. Magna minim veniam ea ex velit adipisicing in
          ullamco incididunt. Pariatur cillum nulla nulla sunt excepteur
          incididunt proident eiusmod. Quis aute mollit sint sint ex excepteur
          ipsum veniam quis ad commodo labore enim. Reprehenderit elit ut mollit
          do. Laboris ea nostrud duis reprehenderit dolor quis cupidatat.
          Consectetur adipisicing irure pariatur id do duis est nulla ad.
          Ullamco adipisicing anim in aliqua exercitation voluptate exercitation
          consequat elit duis nisi nisi Lorem. Duis dolore velit adipisicing
          Lorem commodo nulla sit qui. Ea voluptate consequat do ex exercitation
          amet deserunt aliquip veniam do sit ut commodo. Sint eiusmod eu
          eiusmod occaecat ipsum adipisicing cillum commodo.
        </p>
        <p>
          Nisi eiusmod dolore magna nisi esse quis velit labore elit occaecat
          laborum exercitation anim. Reprehenderit exercitation ullamco dolor
          anim magna deserunt nisi in enim eiusmod amet. Labore aliquip
          adipisicing pariatur ullamco deserunt aute consequat sit et
          reprehenderit. Deserunt duis occaecat et quis in eu irure consectetur
          eiusmod nostrud excepteur et non officia. Esse velit qui esse mollit
          sit elit elit eu id dolor ad. Ea nostrud dolore nisi pariatur qui eu.
          Laboris in sit reprehenderit est ut deserunt irure adipisicing irure
          cillum laboris officia. Voluptate proident elit mollit dolore minim
          laboris eiusmod laboris velit. Esse laborum voluptate consequat dolor.
          Anim ut amet est mollit nulla laborum commodo incididunt et consequat
          dolor eu in id. Eiusmod fugiat ut labore eu enim. Cillum proident
          pariatur tempor elit pariatur dolore velit. Ullamco enim veniam
          exercitation quis in enim ullamco. Velit anim occaecat et sit qui esse
          proident nisi aliquip mollit. Aute minim cillum veniam eu consequat.
          Deserunt aute aliqua id occaecat ut. Do culpa aliquip sunt quis tempor
          velit elit. Aute excepteur proident mollit sint eiusmod proident ex.
          Labore sunt duis deserunt consequat. Esse do ullamco proident officia
          enim deserunt excepteur magna cupidatat duis anim anim esse Lorem.
          Eiusmod nulla proident magna dolor est cillum. Eiusmod enim in duis
          amet deserunt voluptate labore voluptate sunt adipisicing in irure
          culpa exercitation. Elit ea exercitation consectetur anim voluptate
          incididunt do. Quis dolore velit velit dolor incididunt non elit.
          Pariatur consectetur proident reprehenderit dolor ea nisi non in
          cillum. Est voluptate proident laboris exercitation reprehenderit.
          Nostrud qui do aliquip anim aute enim quis cillum. Irure enim anim
          magna occaecat quis non exercitation ad sunt incididunt fugiat irure
          ex. Duis ea duis mollit duis veniam enim aliquip nostrud. Voluptate
          quis consectetur labore nostrud. Qui ea ullamco Lorem fugiat
          consectetur laboris sunt nulla minim ea incididunt sunt dolor mollit.
          Consequat nostrud do sint tempor. Sit culpa eiusmod qui sit minim
          cillum adipisicing anim. Magna aliqua incididunt ipsum do consequat in
          id ipsum est dolore dolor. Excepteur ea eu incididunt id commodo ipsum
          cillum magna. Ea qui consectetur dolore consectetur culpa nisi magna
          eu et veniam. Irure exercitation velit aute deserunt est ullamco non
          ad aliquip qui. Eiusmod dolore nostrud proident ut excepteur pariatur.
          Consequat non consectetur deserunt duis commodo proident qui dolore
          consectetur mollit excepteur nulla anim. Dolore nisi Lorem consequat
          nostrud minim incididunt id. Qui proident qui sunt qui consequat. Ad
          anim proident aute anim. Aliquip ad nostrud duis quis quis laboris.
          Commodo exercitation nostrud sit aliquip quis reprehenderit aute.
          Commodo proident voluptate enim veniam dolore reprehenderit laboris et
          Lorem culpa velit ex est eiusmod. Magna duis deserunt incididunt aute
          anim aliquip nisi id ex dolor ea. Eu nostrud in enim aliquip
          exercitation ullamco ad ut adipisicing culpa eu dolore. Officia
          cupidatat sit officia officia nulla laboris elit quis esse mollit
          exercitation aliquip. Magna minim veniam ea ex velit adipisicing in
          ullamco incididunt. Pariatur cillum nulla nulla sunt excepteur
          incididunt proident eiusmod. Quis aute mollit sint sint ex excepteur
          ipsum veniam quis ad commodo labore enim. Reprehenderit elit ut mollit
          do. Laboris ea nostrud duis reprehenderit dolor quis cupidatat.
          Consectetur adipisicing irure pariatur id do duis est nulla ad.
          Ullamco adipisicing anim in aliqua exercitation voluptate exercitation
          consequat elit duis nisi nisi Lorem. Duis dolore velit adipisicing
          Lorem commodo nulla sit qui. Ea voluptate consequat do ex exercitation
          amet deserunt aliquip veniam do sit ut commodo. Sint eiusmod eu
          eiusmod occaecat ipsum adipisicing cillum commodo.
        </p>
        <p>
          Nisi eiusmod dolore magna nisi esse quis velit labore elit occaecat
          laborum exercitation anim. Reprehenderit exercitation ullamco dolor
          anim magna deserunt nisi in enim eiusmod amet. Labore aliquip
          adipisicing pariatur ullamco deserunt aute consequat sit et
          reprehenderit. Deserunt duis occaecat et quis in eu irure consectetur
          eiusmod nostrud excepteur et non officia. Esse velit qui esse mollit
          sit elit elit eu id dolor ad. Ea nostrud dolore nisi pariatur qui eu.
          Laboris in sit reprehenderit est ut deserunt irure adipisicing irure
          cillum laboris officia. Voluptate proident elit mollit dolore minim
          laboris eiusmod laboris velit. Esse laborum voluptate consequat dolor.
          Anim ut amet est mollit nulla laborum commodo incididunt et consequat
          dolor eu in id. Eiusmod fugiat ut labore eu enim. Cillum proident
          pariatur tempor elit pariatur dolore velit. Ullamco enim veniam
          exercitation quis in enim ullamco. Velit anim occaecat et sit qui esse
          proident nisi aliquip mollit. Aute minim cillum veniam eu consequat.
          Deserunt aute aliqua id occaecat ut. Do culpa aliquip sunt quis tempor
          velit elit. Aute excepteur proident mollit sint eiusmod proident ex.
          Labore sunt duis deserunt consequat. Esse do ullamco proident officia
          enim deserunt excepteur magna cupidatat duis anim anim esse Lorem.
          Eiusmod nulla proident magna dolor est cillum. Eiusmod enim in duis
          amet deserunt voluptate labore voluptate sunt adipisicing in irure
          culpa exercitation. Elit ea exercitation consectetur anim voluptate
          incididunt do. Quis dolore velit velit dolor incididunt non elit.
          Pariatur consectetur proident reprehenderit dolor ea nisi non in
          cillum. Est voluptate proident laboris exercitation reprehenderit.
          Nostrud qui do aliquip anim aute enim quis cillum. Irure enim anim
          magna occaecat quis non exercitation ad sunt incididunt fugiat irure
          ex. Duis ea duis mollit duis veniam enim aliquip nostrud. Voluptate
          quis consectetur labore nostrud. Qui ea ullamco Lorem fugiat
          consectetur laboris sunt nulla minim ea incididunt sunt dolor mollit.
          Consequat nostrud do sint tempor. Sit culpa eiusmod qui sit minim
          cillum adipisicing anim. Magna aliqua incididunt ipsum do consequat in
          id ipsum est dolore dolor. Excepteur ea eu incididunt id commodo ipsum
          cillum magna. Ea qui consectetur dolore consectetur culpa nisi magna
          eu et veniam. Irure exercitation velit aute deserunt est ullamco non
          ad aliquip qui. Eiusmod dolore nostrud proident ut excepteur pariatur.
          Consequat non consectetur deserunt duis commodo proident qui dolore
          consectetur mollit excepteur nulla anim. Dolore nisi Lorem consequat
          nostrud minim incididunt id. Qui proident qui sunt qui consequat. Ad
          anim proident aute anim. Aliquip ad nostrud duis quis quis laboris.
          Commodo exercitation nostrud sit aliquip quis reprehenderit aute.
          Commodo proident voluptate enim veniam dolore reprehenderit laboris et
          Lorem culpa velit ex est eiusmod. Magna duis deserunt incididunt aute
          anim aliquip nisi id ex dolor ea. Eu nostrud in enim aliquip
          exercitation ullamco ad ut adipisicing culpa eu dolore. Officia
          cupidatat sit officia officia nulla laboris elit quis esse mollit
          exercitation aliquip. Magna minim veniam ea ex velit adipisicing in
          ullamco incididunt. Pariatur cillum nulla nulla sunt excepteur
          incididunt proident eiusmod. Quis aute mollit sint sint ex excepteur
          ipsum veniam quis ad commodo labore enim. Reprehenderit elit ut mollit
          do. Laboris ea nostrud duis reprehenderit dolor quis cupidatat.
          Consectetur adipisicing irure pariatur id do duis est nulla ad.
          Ullamco adipisicing anim in aliqua exercitation voluptate exercitation
          consequat elit duis nisi nisi Lorem. Duis dolore velit adipisicing
          Lorem commodo nulla sit qui. Ea voluptate consequat do ex exercitation
          amet deserunt aliquip veniam do sit ut commodo. Sint eiusmod eu
          eiusmod occaecat ipsum adipisicing cillum commodo.
        </p>
    </>
  );
};

export default Example;
