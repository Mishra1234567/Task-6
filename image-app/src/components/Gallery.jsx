// src/components/Gallery.jsx
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './Gallery.css'; // Add CSS styles here

const images = [
  { id: 1, src: 'https://images.pexels.com/photos/27854288/pexels-photo-27854288/free-photo-of-a-woman-is-sitting-on-a-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', alt: 'Image 1' },
  { id: 2, src: 'https://images.pexels.com/photos/27958415/pexels-photo-27958415/free-photo-of-woman-in-dress-standing-with-balloons-at-field.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load', alt: 'Image 2' },
  { id: 3, src: 'https://images.pexels.com/photos/1468379/pexels-photo-1468379.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 3' },
  { id: 4, src: 'https://images.pexels.com/photos/1321909/pexels-photo-1321909.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 4' },
  { id: 5, src: 'https://images.pexels.com/photos/1391499/pexels-photo-1391499.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 5' },
  { id: 6, src: 'https://images.pexels.com/photos/1375849/pexels-photo-1375849.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 6' },
  { id: 7, src: 'https://images.pexels.com/photos/3775173/pexels-photo-3775173.jpeg?auto=compress&cs=tinysrgb&w=600', alt: 'Image 7' },
  
  
];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[prevIndex]);
  };

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageItem key={image.id} image={image} onClick={() => openModal(image)} />
      ))}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}

export default Gallery;
