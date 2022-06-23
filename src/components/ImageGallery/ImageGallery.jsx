import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export default class ImageGallery extends React.Component {
  render() {
    return (
      <ImageGalleryStyle>
        {this.props.images.map(image => (
          <ImageGalleryItem image={image} key={image.id} />
        ))}
      </ImageGalleryStyle>
    );
  }
}
