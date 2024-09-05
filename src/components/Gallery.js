// Gallery.js
import React, { useState } from 'react';
import './Gallery.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import ImageModal from './ImageModal';
import image1 from '../images/nature.jpg';
import image2 from '../images/architecture.jpg';
import image3 from '../images/newyork.jpg';
import image4 from '../images/animal.jpg';
import image5 from '../images/sunset.jpg';
import image6 from '../images/landmark.jpg';

const images = [
  {
    id: 1,
    src: image1,
    title: 'Beautiful Nature',
    description: 'A breathtaking view of nature.',
    category: 'Nature',
    date: '2023-01-01',
    tags: ['nature', 'landscape'],
  },
  {
    id: 2,
    src: image2,
    title: 'Modern Architecture',
    description: 'A stunning building.',
    category: 'Architecture',
    date: '2023-02-01',
    tags: ['architecture', 'modern'],
  },
  {
    id: 3,
    src: image3,
    title: 'City Life',
    description: 'The hustle and bustle of the city.',
    category: 'People',
    date: '2023-03-01',
    tags: ['city', 'urban'],
  },
  {
    id: 4,
    src: image4,
    title: 'Wild Animals',
    description: 'Majestic wildlife in their habitat.',
    category: 'Animals',
    date: '2023-04-01',
    tags: ['wildlife', 'nature'],
  },
  {
    id: 5,
    src: image5,
    title: 'Stunning Sunset',
    description: 'A beautiful sunset view.',
    category: 'Nature',
    date: '2023-05-01',
    tags: ['sunset', 'nature'],
  },
  {
    id: 6,
    src: image6,
    title: 'Historic Landmark',
    description: 'An ancient historical site.',
    category: 'Architecture',
    date: '2023-06-01',
    tags: ['history', 'landmark'],
  },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('date');

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const filteredImages = images.filter((image) =>
    image.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const sortedImages = [...filteredImages].sort((a, b) => {
    if (sortOption === 'date') return new Date(b.date) - new Date(a.date);
    if (sortOption === 'popularity') return b.id - a.id;
    return a.title.localeCompare(b.title);
  });

  return (
    <div className="gallery-container">
      <div className="heading-container">
        <div className="line"></div>
        <h1 className="gallery-heading">Image Gallery</h1>
        <div className="line"></div>
      </div>
      <p className="gallery-subtitle">Explore our beautiful collection of images.</p>
      <div className="filter-options">
        <input
          type="text"
          placeholder="Search images..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select onChange={(e) => setSortOption(e.target.value)}>
          <option value="date">Sort by Date</option>
          <option value="popularity">Sort by Popularity</option>
          <option value="alphabetical">Sort Alphabetically</option>
        </select>
      </div>
      <div className="row">
        {sortedImages.slice(0, 6).map((image) => (
          <div className="col-md-4 mb-4" key={image.id}>
            <div className="card" onClick={() => handleImageClick(image)}>
              <img src={image.src} alt={image.title} className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">{image.title}</h5>
                <p className="card-text">{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={handleCloseModal}
          images={sortedImages}
        />
      )}
    </div>
  );
};

export default Gallery;
