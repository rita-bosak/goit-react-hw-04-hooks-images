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
    page: 1,
    loading: false,
    modalImage: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName) {
      this.setState({ loading: true, page: 1 });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=28210864-97c5f22d502fc1ab47943acf9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => {
          this.setState({ images: images.hits });
        })
        .finally(() =>
          this.setState(prevState => {
            return { loading: false, page: (prevState.page += 1) };
          })
        );
    }
  }

  handleLoadMoreBtn = () => {
    this.setState(prevState => {
      return { page: (prevState.page += 1) };
    });

    fetch(
      `https://pixabay.com/api/?q=${this.state.imageName}&page=${this.state.page}&key=28210864-97c5f22d502fc1ab47943acf9&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then(response => response.json())
      .then(images =>
        this.setState(prevState => {
          return { images: [...prevState.images, ...images.hits] };
        })
      );
  };

  handleImageName = imageName => {
    this.setState({ imageName });
  };

  handleClickImage = imageId => {
    this.state.images.find(image =>
      this.setState({ modalImage: image.id === imageId })
    );

    this.setState({ showModal: true });
  };

  render() {
    const { images, loading, showModal } = this.state;

    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleImageName} />
        {images && (
          <ImageGallery onClick={this.handleClickImage} images={images} />
        )}
        {images && images.length >= 12 && (
          <Button onClick={this.handleLoadMoreBtn} />
        )}
        {loading && <Loader />}
        {showModal && <Modal modalImage={this.state.modalImage} />}
      </AppStyle>
    );
  }
}
