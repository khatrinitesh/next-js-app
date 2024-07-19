import React, { useState } from 'react';

const Example = () => {

    const [isActive, setIsActive] = useState(false);

  const toggleClass = () => {
    setIsActive(!isActive);
  };


  return (
    <> 
        <div className={`text-white ${isActive ? 'bg-[red]' : 'bg-[green]'}`} onClick={toggleClass}>
            {isActive ? 'Commodo est deserunt velit ullamco magna labore aute magna anim proident magna deserunt. Ullamco aliqua reprehenderit Lorem sint duis duis. Cillum culpa laboris in proident aliqua quis excepteur. Aliquip elit est ex dolore mollit aliquip nulla deserunt ea dolor et Lorem tempor. Esse minim aliqua minim culpa Lorem sunt Lorem eiusmod aliquip in. Eiusmod quis nostrud aliqua amet consequat veniam magna id fugiat sint.' : 'Ea magna in irure irure.'}
        </div>
    </>
  )
}

export default Example