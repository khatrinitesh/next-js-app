import React,{useRef,useEffect } from "react";

const Example = () => {

    const canvasRef = useRef(null);
    let ctx;
  
    useEffect(() => {
      const canvas = canvasRef.current;
      ctx = canvas.getContext('2d');
    }, []);
  
    const handleMouseDown = (e) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      ctx.beginPath();
      ctx.moveTo(x, y);
  
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseup', handleMouseUp);
    };
  
    const handleMouseMove = (e) => {
      const canvas = canvasRef.current;
      const rect = canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
  
      ctx.lineTo(x, y);
      ctx.stroke();
    };
  
    const handleMouseUp = () => {
      const canvas = canvasRef.current;
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseup', handleMouseUp);
    };
  return (
    <>
      <div className="flex justify-center">
      <canvas
        ref={canvasRef}
        width={500}
        height={500}
        style={{ border: '1px solid black' }}
        onMouseDown={handleMouseDown}
      />
    </div>
    </>
  );
};

export default Example;
