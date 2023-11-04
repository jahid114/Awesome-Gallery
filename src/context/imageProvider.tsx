import { createContext, useState } from 'react';
import { ImageInfo } from '../imageInfo.type';

export const ImageContext = createContext<{ imagesInfo: ImageInfo[]; setImagesInfo: () => void } | object>({});

function ImageProvider({ children }: { children: string | JSX.Element | JSX.Element[] }) {
  const [imagesInfo, setImageInfo] = useState<ImageInfo[] | []>([]);

  const setImagesInfo = (images: ImageInfo[]) => {
    setImageInfo(images);
  };
  return <ImageContext.Provider value={{ imagesInfo, setImagesInfo }}>{children}</ImageContext.Provider>;
}

export default ImageProvider;
