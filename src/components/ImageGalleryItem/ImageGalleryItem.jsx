import { ImageGalleryStyle } from 'components/ImageGallery/ImageGallery.styled';
import React from 'react';
import { ImageGalleryItemImage } from './ImageGalleryItem.styled';

export default class ImageGallery extends React.Component {
  render() {
    return (
      <ImageGalleryStyle>
        <ImageGalleryItemImage
          src={this.props.image.webformatURL}
          alt={this.props.image.tags}
        />
      </ImageGalleryStyle>
    );
  }
}
