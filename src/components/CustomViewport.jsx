
import { LazyLoadImage } from 'react-lazy-load-image-component';

const CustomViewport = () => {
  return (
    <div>
      <h2>Custom Scroll Handling</h2>
      <LazyLoadImage
        src="https://via.placeholder.com/800x400"
        alt="Custom Viewport Example"
        effect="blur"
        threshold={200} // Starts loading when 200px away from the viewport
        visibleByDefault={false} // Forces images to load lazily
      />
    </div>
  );
};

export default CustomViewport;
