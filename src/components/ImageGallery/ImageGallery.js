import { GalleryList } from './ImageGallery.styled';
import { GalleryItem } from '../GalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  console.log(images);
  return (
    <GalleryList>
      {images.map(({ id, webformatURL, largeImageURL, tags }) => (
        <GalleryItem key={id} smallImg={webformatURL} tags={tags}>
          {webformatURL}
        </GalleryItem>
      ))}
    </GalleryList>
  );
};
