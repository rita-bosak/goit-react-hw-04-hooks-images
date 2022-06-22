import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends React.Component {
  render() {
    return (
      <ul className="gallery">
        <ImageGalleryItem />
      </ul>
    );
  }
}
