import { ImageContext } from '../context/imageProvider';
import { useContext } from 'react';
import { ImageInfo } from '../imageInfo.type';

function useImages(): { imagesInfo: ImageInfo[]; setImagesInfo: (imagesInfo: ImageInfo[]) => void } | object {
  return useContext(ImageContext);
}

export default useImages;
