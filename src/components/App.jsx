import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyle } from './App.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

export default class App extends React.Component {
  state = {
    imageName: '',
    images: null,
    loading: false,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName) {
      this.setState({ loading: true });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=28210864-97c5f22d502fc1ab47943acf9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => {
          this.setState({ images: images.hits });
        })
        .finally(() => this.setState({ loading: false }));
    }
  }

  handleImageName = imageName => {
    this.setState({ imageName });
  };

  render() {
    const { images, loading, showModal } = this.state;

    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleImageName} />
        {images && <ImageGallery images={images} />}
        {images && images.length === 12 && <Button />}
        {loading && <Loader />}
        {showModal && <Modal />}
      </AppStyle>
    );
  }
}
