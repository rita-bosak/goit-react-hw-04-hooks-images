import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyle } from './ImageGallery.styled';

export default class ImageGallery extends React.Component {
  state = {
    images: null,
    loading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=28210864-97c5f22d502fc1ab47943acf9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => this.setState({ images: images.hits }))
        .finally(() => this.setState({ loading: false }));
    }
  }

  render() {
    return (
      this.state.images && (
        <ImageGalleryStyle>
          {this.state.images.map(image => (
            <ImageGalleryItem image={image} key={image.id} />
          ))}
        </ImageGalleryStyle>
      )
    );
  }
}
