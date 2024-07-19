import React,{useState ,useEffect } from "react";

const Example = () => {

    const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      const scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollPercent(scrollPercent);
    };

    window.addEventListener('scroll', handleScroll);

    // Initial calculation on mount
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
       <div className="fixed top-0 left-0 w-full h-1 bg-gray-300">
      <div
        className="h-1 bg-green-500"
        style={{ width: `${scrollPercent}%` }}
      />
    </div>
    </>
  );
};

export default Example;
