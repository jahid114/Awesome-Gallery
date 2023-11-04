import { useRef } from 'react';
import useImages from '../hook/useImages';
import { ImageInfo } from '../imageInfo.type';

function Gallery() {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);
  const { imagesInfo, setImagesInfo } = useImages();

  const handleSort = () => {
    //duplicate items
    const _imagesInfo = [...imagesInfo];

    //remove and save the dragged item content
    const draggedItemContent = _imagesInfo.splice(dragItem.current as number, 1)[0];

    //switch the position
    _imagesInfo.splice(dragOverItem.current as number, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setImagesInfo(_imagesInfo);
  };

  const handleSelection = (index: number) => {
    const changedImagesInfo = imagesInfo.map((value: ImageInfo, i: number) => {
      if (i === index) {
        value.isChecked = !value.isChecked;
      }
      return value;
    });
    setImagesInfo(changedImagesInfo);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
      {imagesInfo.map((image: ImageInfo, index: number) => {
        return (
          <div
            key={index}
            className={`w-full h-full ${
              index === 0 ? 'sm:col-span-2 md:row-span-2' : ''
            } cursor-pointer group relative`}
            draggable
            onDragStart={(e) => (dragItem.current = index)}
            onDragEnter={(e) => {
              dragOverItem.current = index;
            }}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <picture>
              <img src={image.imageUrl} className='border-2 rounded-md border-gray-300 object-cover aspect-square' />
            </picture>
            <div
              className={` absolute rounded-md w-full h-full bg-black/30 group-hover:bottom-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                image.isChecked ? 'bottom-0 opacity-100 bg-slate-500/40' : ''
              }`}
            >
              <input
                type='checkbox'
                className='absolute w-6 h-6 left-2 top-2'
                checked={image.isChecked}
                onChange={() => handleSelection(index)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
