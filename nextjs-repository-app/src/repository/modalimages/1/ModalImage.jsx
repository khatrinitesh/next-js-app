import React from "react";

const ModalImage = ({ imageurl, alttext, isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div onClick={onClose} className="modal-overlay">
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <img src={imageurl} alt={alttext} />
      </div>
    </div>
  );
};

export default ModalImage;
