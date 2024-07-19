import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios"; // Import Axios

export default function CustomApp() {

  const [listdata, setListdata] = useState([]);

  const pexelsAPIKey = import.meta.env.VITE_PEXELS_API_KEY;
  const baseurlexample = "https://jsonplaceholder.typicode.com/users";
  const baseurl = 'https://api.pexels.com/v1/search?query=people'

  const fetchData = async () => {
    try {
        const response = await axios.get(baseurl,{
            headers:{
                Authorization:`${pexelsAPIKey}`
            }
        });
        setListdata(response.data.photos); // Use response.data to access data from Axios response
        console.log(response.data.photos)
      } catch (error) {
        console.error("Error", error);
      }
  };
  useEffect(() => {
    fetchData();
  }, [baseurl]);
  return (
    <>
      <ImgGrid images={listdata} />
    </>
  );
}


const ImgGrid = ({ images }) => {
  return (
    <>
      <div className="image-grid">
        {images.map((image, index) => {
          return (
            <div className="image-item" key={index}>
              <img src={image?.src?.large} alt={image?.photographer} className="w-full h-full object-cover" />
              <div className="overlay">
                <div className="overlay-text">{image?.photographer}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
