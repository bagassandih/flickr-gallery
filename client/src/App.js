
import React, { useEffect, useState, CSSProperties } from 'react';
import ImageGrid from './components/imageGrid';
import SearchBox from './components/searchBox';
import Footer from './components/footer';
import BarLoader from 'react-spinners/BarLoader';

const baseUrlApi = 'http://localhost:3000/api/flickr/';
const override: CSSProperties = {
  'margin': '15% auto'
};

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchPublicImages();
  }, []);

  const fetchPublicImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrlApi}public`);
      const resJson = await response.json();
      setImages(resJson.items);
    } catch (error) {
      console.error('Error fetching public images:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (keyword) => {
    setLoading(true);
    try {
      const response = await fetch(`${baseUrlApi}search?tags=${keyword}`);
      const resJson = await response.json();
      setImages(resJson.items);
    } catch (error) {
      console.error('Error searching images:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <div className='title'>
        <h1>Flickr Gallery</h1>
        <p>Discover stunning images and photos, exactly what you're looking for with tag search.</p>
        <SearchBox onSearch={handleSearch} />
      </div>
      {loading ? (
        <BarLoader
          color='#22e5ff'
          cssOverride={override}
          height={12}
          speedMultiplier={1}
          width={350}
        />
      ) : (
        <ImageGrid images={images} />
      )}
     <Footer/>
    </div>
  );
};

export default App;
