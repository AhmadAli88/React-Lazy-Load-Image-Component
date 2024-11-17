import { useState, useEffect } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import downloadImage from '../assets/download.jpeg';
import placeholderImage from '../assets/test.png';

const PlaceholderLazyLoad = () => {
  const [showActualImage, setShowActualImage] = useState(false);

  useEffect(() => {
    // Delay for 5 seconds before showing the actual image
    const timer = setTimeout(() => {
      setShowActualImage(true);
    }, 5000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ marginTop: '10rem' }}>
      <h2>Lazy Load with Placeholder and Delay</h2>
      <LazyLoadImage
        src={showActualImage ? downloadImage : placeholderImage} // Switch between actual and placeholder
        alt="Example Image"
        effect="blur" // Apply blur effect
      />
    </div>
  );
};

export default PlaceholderLazyLoad;
