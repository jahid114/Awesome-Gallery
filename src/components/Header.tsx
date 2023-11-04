import useImages from '../hook/useImages';
import { ImageInfo } from '../imageInfo.type';

function Header() {
  const { imagesInfo, setImagesInfo } = useImages();

  console.log(imagesInfo);
  // finding out currently selected items index
  let selectedItems: number[] = [];
  for (let i = 0; i < imagesInfo.length; i++) {
    if (imagesInfo[i].isChecked) {
      selectedItems.push(i);
    }
  }

  const handelDelete = () => {
    const _imagesInfo = imagesInfo.filter((value: ImageInfo) => {
      return !value.isChecked;
    });
    setImagesInfo(_imagesInfo);
    selectedItems = [];
  };

  if (selectedItems.length === 0) return <div className='font-bold'>Gallery</div>;
  return (
    <div className='flex align-middle w-full justify-between px-6'>
      <p className='font-semibold text-gray-800'>
        {' '}
        <span className='font-bold text-lg'>{selectedItems.length}</span> items selected
      </p>
      <button className='text-red-600 font-semibold' onClick={handelDelete}>
        Delete Files
      </button>
    </div>
  );
}

export default Header;
