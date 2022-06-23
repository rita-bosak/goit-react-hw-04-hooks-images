import React from 'react';
import {
  ImageGalleryItemStyle,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default class ImageGalleryItem extends React.Component {
  handleClick = e => {
    this.props.onClick(this.props.image.id);
  };

  render() {
    const { webformatURL, tags } = this.props.image;

    return (
      <ImageGalleryItemStyle>
        <ImageGalleryItemImage
          src={webformatURL}
          alt={tags}
          onClick={this.handleClick}
        />
      </ImageGalleryItemStyle>
    );
  }
}
