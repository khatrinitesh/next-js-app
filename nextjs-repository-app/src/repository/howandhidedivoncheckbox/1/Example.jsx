import React,{useState} from 'react';

const Example = () => {

    const [show,setShow] = useState(false);

    const handleClick = (e) =>{
        setShow(!show)
    }
  return (
    <div>
      <input type="checkbox" value={show} onClick={handleClick} /> 
      {!show && <div>asdad</div>}
    </div>
  )
}

export default Example
