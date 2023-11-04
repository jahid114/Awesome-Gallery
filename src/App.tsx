/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import Gallery from './components/Gallery';
import Header from './components/Header';
import useImages from './hook/useImages';
import { ImageInfo } from './imageInfo.type';

const gallery = Object.values(
  import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,PNG,JPEG,WEBP}', { eager: true, as: 'url' })
);

function App() {
  const { setImagesInfo } = useImages();

  useEffect(() => {
    const tempImagesInfo: ImageInfo[] = [];

    gallery.map((imageUrl) => {
      const temp = {
        imageUrl,
        isChecked: false,
      };
      tempImagesInfo.push(temp);
    });

    setImagesInfo(tempImagesInfo);
  }, []);

  return (
    <>
      <div className='bg-slate-200 p-4 md:p-6 min-h-screen'>
        <div className='bg-white min-h-fit rounded-md'>
          <header className='py-4 px-6'>
            <Header />
          </header>
          <hr className='text-gray-300' />
          <main className='p-6'>
            <Gallery />
          </main>
        </div>
      </div>
    </>
  );
}

export default App;
