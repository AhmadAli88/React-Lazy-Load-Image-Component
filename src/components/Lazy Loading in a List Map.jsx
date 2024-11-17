import { LazyLoadImage } from 'react-lazy-load-image-component';

const ImageGallery = () => {
  const images = [
    'https://via.placeholder.com/800x400',
    'https://via.placeholder.com/700x300',
    'https://via.placeholder.com/600x200',
  ];

  return (
    <div>
      <h2>Image Gallery</h2>
      {images.map((img, index) => (
        <LazyLoadImage
          key={index}
          src={img}
          alt={`Image ${index}`}
          effect='blur'
        />
      ))}
    </div>
  );
};

export default ImageGallery;
