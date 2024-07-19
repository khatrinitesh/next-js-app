import React from 'react'

const CustomApp = () => {
  return (
    <div>
     {/* grayscale */}
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter grayscale" />

       {/* blur */}
       <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter blur-sm" />
        {/* brightness */}
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter brightness-50" />
       {/* contrast */}
       <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter contrast-150" />
        {/* sepia */}
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter sepia" />
       {/* hue-rotate */}
       <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter hue-rotate-90" />
        {/* saturate */}
      <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter saturate-150" />
       {/* invert */}
       <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" alt="Grayscale" className="filter invert" />

    </div>
  )
}

export default CustomApp
