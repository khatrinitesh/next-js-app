import React from "react";

const TailwindCSSApp = () => {
  return (
    <div className="flex  flex-nowrap text-center">
      <div class="z-40 bg-[red] text-white border border-w-[10px] border-color-[blue] shrink">1</div>
      <div class="z-30 bg-[red] text-white border border-w-[10px] border-color-[blue] shrink order-last">2</div>
      <div class="z-20 bg-[red] text-white border border-w-[10px] border-color-[blue] grow">3</div>
      <div class="z-10 bg-[red] text-white border border-w-[10px] border-color-[blue] grow">4</div>
      <div class="z-0 bg-[red] text-white border border-w-[10px] border-color-[blue] shrink order-first">5</div>
      <span class="absolute invisible inset-x-0 box-decoration-slice bg-gradient-to-r from-indigo-600 to-pink-500 text-white px-2">
        Hello
        <br />
        World
      </span>
    </div>
  );
};

export default TailwindCSSApp;
