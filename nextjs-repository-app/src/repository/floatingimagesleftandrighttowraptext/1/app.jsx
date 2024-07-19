import React from 'react'

const CustomApp = () => {
  return (
    <>
        <TextWithImages/>
    </>
  )
}

export default CustomApp

const TextWithImages = () => {
    return (
      <div className="container mx-auto">
        <div className="flex">
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711962000&semt=sph" alt="Left Image" className="float-left mr-4 mb-4" />
          <p className="mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tristique est nec augue tincidunt, 
            nec cursus felis bibendum. Duis interdum lectus id felis aliquet tempor. Nulla facilisi. Donec 
            sodales quam sit amet ligula tristique convallis. Maecenas nec leo in odio convallis lacinia. 
            Quisque volutpat consectetur velit, eu feugiat turpis elementum sed. Sed at elit massa. 
            Maecenas euismod diam vitae nibh tempor, a tempor lorem consequat.
          </p>
        </div>
        <div className="flex">
            <div className="order-2 w-[70%]">
          <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1687694167.1711962000&semt=sph" alt="Right Image" className="float-right mr-4 mb-4 w-full" />
          </div>
          <p className="mb-4 order-1 w-[calc(100%-70%)]">
            order 1
          </p>
        </div>
      </div>
    );
  };