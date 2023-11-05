import useImages from '../hook/useImages';
import { ImageInfo } from '../imageInfo.type';

function Header() {
  // use ImageContext in order to use and update imageInfo State
  const { imagesInfo, setImagesInfo } = useImages();
  // finding out currently selected items index
  let selectedItems: number[] = [];
  for (let i = 0; i < imagesInfo.length; i++) {
    if (imagesInfo[i].isChecked) {
      selectedItems.push(i);
    }
  }

  const handleDelete = () => {
    // filtering not selected images
    const _imagesInfo = imagesInfo.filter((value: ImageInfo) => {
      return !value.isChecked;
    });
    // updating the imagesInfo with not selected one
    setImagesInfo(_imagesInfo);
    selectedItems = [];
  };

  const handleAllSelect = () => {
    // taking all unselected images
    const _imagesInfo = imagesInfo.map((value: ImageInfo) => {
      if (value.isChecked) {
        value.isChecked = false;
      }
      return value;
    });
    // updating the state with unselected imageInfo
    setImagesInfo(_imagesInfo);
  };

  if (selectedItems.length === 0) return <div className='font-bold'>Gallery</div>;
  return (
    <div className='flex align-middle w-full justify-between sm:px-6'>
      <p className='font-semibold text-gray-800 flex align-middle'>
        <input
          type='checkbox'
          className='w-6 h-6 mx-2'
          checked={selectedItems.length > 0}
          onChange={handleAllSelect}
          title='Click to deselect All'
        />
        <span className='font-bold text-lg'>{selectedItems.length}</span> &nbsp;{' '}
        <span className='pt-[2px]'>items selected</span>
      </p>
      <button
        className='text-red-600 font-semibold hover:underline'
        onClick={handleDelete}
        title='Delete the selected Files'
      >
        Delete Files
      </button>
    </div>
  );
}

export default Header;
