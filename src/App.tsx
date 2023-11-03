import Gallery from './components/Gallery';
import Header from './components/Header';
import { useState } from 'react';

const gallery = Object.values(
  import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,PNG,JPEG,WEBP}', { eager: true, as: 'url' })
);

function App() {
  const [selectedImages, setSelectedImages] = useState<boolean[]>(new Array(gallery.length).fill(false));
  const [images, setImages] = useState<string[]>(gallery);
  return (
    <>
      <div className='bg-slate-200 p-4 md:p-6 min-h-screen'>
        <div className='bg-white min-h-fit rounded-md'>
          <header className='py-4 px-6'>
            <Header
              images={images}
              setImages={setImages}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          </header>
          <hr className='text-gray-300' />
          <main className='p-6'>
            <Gallery
              images={images}
              setImages={setImages}
              selectedImages={selectedImages}
              setSelectedImages={setSelectedImages}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
