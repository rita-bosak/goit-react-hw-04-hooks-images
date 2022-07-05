import React from 'react';
import PropTypes from 'prop-types';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ image, onClick }) => {
  const { id, webformatURL, tags } = image;

  return (
    <ImageGalleryItemStyle>
      <ImageGalleryItemImage
        src={webformatURL}
        alt={tags}
        onClick={() => onClick(id)}
      />
    </ImageGalleryItemStyle>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
