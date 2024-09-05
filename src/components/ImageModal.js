// ImageModal.js
import React from 'react';
import './ImageModal.css'; // Add your CSS for modal styling here
import 'bootstrap/dist/css/bootstrap.min.css'; 

const ImageModal = ({ image, onClose, images }) => {
  const currentIndex = images.findIndex((img) => img.id === image.id);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      onClose(images[currentIndex + 1]);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      onClose(images[currentIndex - 1]);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close" onClick={onClose}>&times;</span>
        <img src={image.src} alt={image.title} className="modal-image" />
        <h5 className="modal-title">{image.title}</h5>
        <p className="modal-description">{image.description}</p>
        <div className="modal-navigation">
          <button onClick={handlePrev} disabled={currentIndex === 0}>
            Previous
          </button>
          <button onClick={handleNext} disabled={currentIndex === images.length - 1}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
