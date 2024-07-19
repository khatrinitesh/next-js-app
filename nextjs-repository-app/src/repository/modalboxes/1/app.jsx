import React, { useState } from "react";
import "./style.css";
import Modal from "./Modal";

const CustomApp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <div>
      <button className="text-white rounded=[10px] px-[20px] py-[5px] bg-blue-500" onClick={openModal}>Open</button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h2>Modal Title</h2>
        <p>This is the content of the modal.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default CustomApp;
