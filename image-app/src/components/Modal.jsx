// src/components/Modal.jsx
import React from 'react';
import './Modal.css'; // Add CSS styles here

function Modal({ image, onClose, onNext, onPrev }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        <button className="modal-prev" onClick={onPrev}>‹</button>
        <img src={image.src} alt={image.alt} className="modal-image" />
        <button className="modal-next" onClick={onNext}>›</button>
      </div>
    </div>
  );
}

export default Modal;
