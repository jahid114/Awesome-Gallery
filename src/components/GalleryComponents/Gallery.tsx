import FeturedImage from './FeturedImage';
import Image from './Image';

function Gallery() {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-2'>
      <FeturedImage />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  );
}

export default Gallery;
