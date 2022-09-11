import React from 'react';
import PropTypes from 'prop-types';
import { Item, Image } from './ImageGalleryItem.styled';

export const GalleryItem = ({ smallImg, tags }) => {
  return (
    <Item>
      <Image src={smallImg} alt={tags} />
    </Item>
  );
};
GalleryItem.propTypes = {
  smallImg: PropTypes.string,
  tags: PropTypes.string,
};
