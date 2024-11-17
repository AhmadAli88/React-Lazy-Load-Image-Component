import './App.css';
import BasicLazyLoad from './components/Basic Lazy Loading';
import CustomViewport from './components/CustomViewport';
import ImageGallery from './components/Lazy Loading in a List Map';
import ResponsiveLazyLoad from './components/Responsive Lazy Loading';
import PlaceholderLazyLoad from './components/With Placeholder';

function App() {
  return (
    <div>
      <BasicLazyLoad />
      <PlaceholderLazyLoad/>
      <CustomViewport />
      <ImageGallery/>
      <ResponsiveLazyLoad/>
    </div>
  );
}

export default App;
