import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Images = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        setImages(response.data.slice(0, 20)); // Display first 20 images for example
      })
      .catch(error => {
        console.error("Error fetching images:", error);
      });
  }, []);

  return (
    <div>
      <h1>Image Gallery</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px' }}>
        {images.map((image: any) => (
          <div key={image.id}>
            <img src={image.thumbnailUrl} alt={image.title} />
            <p>{image.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
