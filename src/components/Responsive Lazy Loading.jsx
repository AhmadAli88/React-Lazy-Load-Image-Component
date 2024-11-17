import { LazyLoadImage } from 'react-lazy-load-image-component';

const ResponsiveLazyLoad = () => {
  const srcSet = `
    https://via.placeholder.com/400x200 400w,
    https://via.placeholder.com/800x400 800w,
    https://via.placeholder.com/1200x600 1200w
  `;

  return (
    <div>
      <h2>Responsive Lazy Loading</h2>
      <div style={{ maxWidth: '100%' }}>
        <LazyLoadImage
          src="https://via.placeholder.com/800x400" // Default image fallback
          alt="Responsive Example"
          effect="blur"
          srcSet={srcSet} // Different image resolutions
          sizes="(max-width: 600px) 400px, 
                 (max-width: 1200px) 800px, 
                 1200px" // Specify sizes for breakpoints
        />
      </div>
    </div>
  );
};

export default ResponsiveLazyLoad;
