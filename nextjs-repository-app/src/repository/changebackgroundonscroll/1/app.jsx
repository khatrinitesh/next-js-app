import React, { useState, useEffect } from 'react';

const CustomApp = () => {

    const [scrollPosition,setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        };

        window.addEventListener('scroll',handleScroll)

        return () => {
            window.removeEventListener('scroll',handleScroll)
        };
    },[]);
  return (
    <>
      <div className={scrollPosition > 100 ? 'bg-blue-500' : 'bg-green-500'} style={{ minHeight: '200vh' }}>
      Nisi ut cillum eiusmod labore do.
      Dolor proident sit tempor ut ipsum quis Lorem laboris elit ipsum commodo veniam. Culpa esse duis adipisicing magna ut eu do duis nulla ex officia eu do. Consequat adipisicing officia reprehenderit laborum esse sit adipisicing velit velit nulla laborum ipsum commodo. Irure aliquip reprehenderit non officia. Reprehenderit magna fugiat qui qui ad non est mollit cupidatat tempor aliquip.

Proident ullamco ex nostrud irure quis adipisicing adipisicing velit. Et ut sunt ad qui pariatur excepteur enim proident. Esse mollit laborum do minim nisi cupidatat. In sint laborum deserunt dolore in cillum sunt aliqua nostrud amet est.

Occaecat voluptate qui eu non et cupidatat consectetur irure voluptate in. Quis ullamco occaecat sit sunt proident cillum qui. Pariatur sint mollit ut amet laboris excepteur occaecat aliquip sit eiusmod. Proident ipsum commodo sint duis adipisicing tempor minim elit. Nisi nostrud occaecat et in consequat ut occaecat id eiusmod.

Sint laborum quis dolor excepteur incididunt quis. Amet labore incididunt deserunt excepteur ex laborum est culpa. Commodo aliquip reprehenderit est qui tempor ullamco adipisicing cupidatat qui consectetur ullamco laboris consectetur sit. Nisi eu exercitation deserunt ex esse. Eiusmod aliquip elit cupidatat nulla dolore occaecat in veniam velit ullamco incididunt. Id nulla tempor occaecat pariatur tempor aliqua exercitation pariatur est id in ipsum nostrud. Voluptate anim velit anim aliquip.

Elit sunt velit elit nulla laborum sint qui dolor velit consectetur qui consequat exercitation magna. Voluptate eu exercitation officia sit sit incididunt ullamco laborum ipsum cupidatat. Non occaecat incididunt magna nostrud irure exercitation occaecat. Pariatur esse adipisicing eu velit sit duis duis dolor quis commodo proident ullamco.

Excepteur consequat labore elit laboris aute qui amet velit Lorem minim. Ut nisi anim laborum enim minim mollit culpa cillum commodo incididunt officia consequat. Exercitation occaecat elit adipisicing magna ea ea proident commodo officia voluptate eiusmod cupidatat irure. Incididunt cupidatat consequat consectetur labore.

Labore exercitation laboris qui irure ipsum veniam sint ipsum nulla. Consequat pariatur irure in ipsum veniam sunt. Aliquip eiusmod dolore dolore minim irure dolor elit consectetur deserunt magna tempor anim est. Proident et pariatur adipisicing eiusmod. Deserunt incididunt eiusmod cillum in ad adipisicing in ex eiusmod nisi minim dolor. Consequat sit sint cupidatat consequat tempor nulla id dolore consequat consectetur.

Labore do amet qui laboris minim eu elit. Occaecat elit nisi adipisicing ea deserunt laborum. Irure quis eiusmod aliqua occaecat minim ullamco ex eu aliquip. Labore velit anim excepteur culpa deserunt aliquip minim qui deserunt commodo magna officia.

Dolor esse nisi irure anim proident culpa velit minim non laborum nostrud dolore exercitation mollit. Lorem deserunt qui voluptate aliqua culpa et ullamco est proident irure. Culpa nostrud laboris proident elit fugiat aute cillum tempor tempor aliqua cillum duis est.

Ea nostrud anim sint exercitation. Nisi consequat laborum qui excepteur occaecat non. Fugiat consequat excepteur est velit aliqua sit nisi commodo amet minim aliquip in est. Magna aute sit qui id ullamco cillum ex reprehenderit. Sit aute Lorem elit esse aliquip culpa. Qui elit aute mollit aliquip dolor sunt incididunt enim reprehenderit anim irure. Aliqua velit minim pariatur labore laboris consequat et qui eiusmod eiusmod cupidatat sit eiusmod.
    </div>
    </>
  )
}

export default CustomApp
