import React,{useState,useEffect} from 'react'

const CustomApp = () => {
    const [screenres,setScreenres] = useState({
        width:window.innerWidth,
        height:window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setScreenres({
                width:window.innerWidth,
                height:window.innerHeight,
            })
        }

        // add means born
        window.addEventListener('resize',handleResize);
        // remove means death
        return () => {
            window.removeEventListener('resize',handleResize)
        }
    },[]);
  return (
    <>
      Width: <strong>{screenres.width}</strong>
      <br />
      Height: <strong>{screenres.height}</strong>
    </>
  )
}

export default CustomApp
