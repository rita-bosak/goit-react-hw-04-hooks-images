import { ImageGalleryStyle } from 'components/ImageGallery/ImageGallery.styled';
import React from 'react';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

export default class ImageGallery extends React.Component {
  render() {
    const { webformatURL, tags } = this.props.image;

    return (
      <ImageGalleryStyle>
        <ImageGalleryItemImage src={webformatURL} alt={tags} />
      </ImageGalleryStyle>
    );
  }
}
