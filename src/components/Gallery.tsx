import { useRef } from 'react';

function Gallery({
  images,
  setImages,
  selectedImages,
  setSelectedImages,
}: {
  images: string[];
  setImages: React.Dispatch<React.SetStateAction<string[]>>;
  selectedImages: boolean[];
  setSelectedImages: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
  const dragItem = useRef<number | null>(null);
  const dragOverItem = useRef<number | null>(null);

  const handleSort = () => {
    //duplicate items
    const _images = [...images];

    //remove and save the dragged item content
    const draggedItemContent = _images.splice(dragItem.current as number, 1)[0];

    //switch the position
    _images.splice(dragOverItem.current as number, 0, draggedItemContent);

    //repeat the same to maintain the checked state also
    const _selectedItem = [...selectedImages];
    const draggedItemStatus = _selectedItem.splice(dragItem.current as number, 1)[0];
    _selectedItem.splice(dragOverItem.current as number, 0, draggedItemStatus);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setImages(_images);
    setSelectedImages(_selectedItem);
  };

  const handleSelection = (index: number) => {
    const changedSelection = selectedImages.map((value, i) => {
      if (i === index) {
        return !value;
      }
      return value;
    });
    setSelectedImages(changedSelection);
    console.log(selectedImages);
  };

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4'>
      {images.map((image, index) => {
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
              <img src={image} className='border-2 rounded-md border-gray-300 object-cover aspect-square' />
            </picture>
            <div
              className={` absolute rounded-md w-full h-full bg-black/30 group-hover:bottom-0 -bottom-1 opacity-0 group-hover:opacity-100 transition-all duration-300 ${
                selectedImages[index] ? 'bottom-0 opacity-100 bg-slate-500/40' : ''
              }`}
            >
              <input
                type='checkbox'
                className='absolute w-6 h-6 left-2 top-2'
                checked={selectedImages[index]}
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
