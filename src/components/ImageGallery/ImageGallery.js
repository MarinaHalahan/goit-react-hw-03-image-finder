import { GalleryList } from './ImageGallery.styled';
import { GalleryItem } from '../GalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

export const ImageGallery = ({ onClick, images }) => {
  return (
    <GalleryList onClick={onClick}>
      {images.map(({ id, webformatURL, tags }) => (
        <GalleryItem key={id} smallImg={webformatURL} tags={tags}>
          {webformatURL}
        </GalleryItem>
      ))}
    </GalleryList>
  );
};

ImageGallery.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array,
};
