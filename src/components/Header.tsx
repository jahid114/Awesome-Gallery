function Header({
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
  // finding out currently selected items index
  let selectedItems: number[] = [];
  for (let i = 0; i < selectedImages.length; i++) {
    if (selectedImages[i]) {
      selectedItems.push(i);
    }
  }

  console.log(selectedItems);

  const handelClick = () => {
    const imagesUpdate = [...images];

    console.log(selectedItems);

    const selectionUpate = selectedImages.map((value, index) => {
      if (value) {
        imagesUpdate.splice(index, 1);
        return false;
      }
      return value;
    });

    setImages(imagesUpdate);
    setSelectedImages(selectionUpate);

    selectedItems = [];
  };

  if (selectedItems.length === 0) return <div className='font-bold'>Gallery</div>;
  return (
    <div className='flex align-middle w-full justify-between px-6'>
      <p className='font-semibold text-gray-800'>
        {' '}
        <span className='font-bold text-lg'>{selectedItems.length}</span> items selected
      </p>
      <button className='text-red-600 font-semibold' onClick={handelClick}>
        Delete
      </button>
    </div>
  );
}

export default Header;
