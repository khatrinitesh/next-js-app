import React,{useState } from "react";
import ModalImage from "./ModalImage";
import "./style.css";

const CustomApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return(
    <>
    <div>
      <img src="https://c4.wallpaperflare.com/wallpaper/26/978/411/inc-mike-wazowski-monsters-wallpaper-preview.jpg" alt="Image" onClick={openModal} />
      <ModalImage 
        imageurl="https://c4.wallpaperflare.com/wallpaper/26/978/411/inc-mike-wazowski-monsters-wallpaper-preview.jpg" 
        alttext="Image" 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
    </>
  )
};

export default CustomApp;
