import React from 'react';
import { Item, Image } from './ImageGalleryItem.styled';

export const GalleryItem = ({ smallImg, largeImg, tags }) => {
  return (
    <Item>
      <Image src={smallImg} alt={tags} />
    </Item>
  );
};
