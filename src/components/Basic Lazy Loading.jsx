
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const BasicLazyLoad = () => {
  return (
    <div>
      <h2>Basic Lazy Loading</h2>
      <div style={{height: '400px' , width: '400px', overflow: 'visible'}}>
      <LazyLoadImage
        src="../src/assets/download.jpeg" // Replace with your image URL
        alt="Example Image"
        effect="blur" // Blur effect while loading
      />
      </div>
    
    </div>
  );
};

export default BasicLazyLoad;
