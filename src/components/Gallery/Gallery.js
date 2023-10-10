import React, { useState } from 'react';
import './Gallery.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Define an array of image file names
  const imageFiles = [
    'main1.webp',
    'main2.webp',
    'main3.webp',
    'main16.webp',
    'main5.webp',
    'main6.webp',
    'main7.webp',
    'main8.webp',
    'main9.webp',
    'main10.webp',
    'main11.webp',
    'main12.webp',
    'main13.webp',
    'main14.webp',
    'main15.webp',
    'main4.webp',
    'air.webp',
    'air2.webp',
    'air3.webp',
    'air4.webp',
    
  ];

  return (
    <>
    <Navbar/>
    <div className="App">
      <div className="background-container">
        <h1 className="text-warning">Gallery</h1>
        <div className="image-gallery">
          {imageFiles.map((imageName, index) => (
            <div
              className={`image-item ${selectedImage === index ? 'active' : ''}`}
              key={index}
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={process.env.PUBLIC_URL+'/'+imageName}
                alt={`air ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))}
        </div>
       
      </div>
      
    </div>
    <Footer/>
   
    </>
  );
}

export default Gallery;