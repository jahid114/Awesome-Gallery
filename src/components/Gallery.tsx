import { useState, useRef } from 'react';

const gallery = Object.values(
  import.meta.glob('/src/assets/*.{png,jpg,jpeg,webp,PNG,JPEG,WEBP}', { eager: true, as: 'url' })
);

function Gallery() {
  const [images, setImages] = useState<string[]>(gallery);
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleSort = () => {
    //duplicate items
    const _images = [...images];

    //remove and save the dragged item content
    const draggedItemContent = _images.splice(dragItem.current as number, 1)[0];

    //switch the position
    _images.splice(dragOverItem.current as number, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setImages(_images);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
      {images.map((image, index) => {
        return (
          <div
            key={index}
            className={`w-full h-full ${index === 0 ? 'sm:col-span-2 md:row-span-2' : ''} cursor-pointer group`}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => {
              dragOverItem.current = index;
            }}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <picture>
              <img
                src={image}
                className='border-2 rounded-md border-gray-300 object-cover aspect-square group-hover:opacity-50'
              />
            </picture>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
