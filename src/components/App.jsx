import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyle } from './App.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Message from './Message/Message';

export default class App extends React.Component {
  state = {
    imageName: '',
    images: null,
    page: 1,
    isLoading: false,
    modalImage: null,
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName) {
      this.setState({ isLoading: true, page: 1 });
      fetch(
        `https://pixabay.com/api/?q=${nextName}&page=1&key=28210864-97c5f22d502fc1ab47943acf9&image_type=photo&orientation=horizontal&per_page=12`
      )
        .then(response => response.json())
        .then(images => {
          this.setState({ images: images.hits });
        })
        .finally(() =>
          this.setState(prevState => {
            return { isLoading: false, page: (prevState.page += 1) };
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
    const { images } = this.state;

    this.setState({
      showModal: true,
      modalImage: images.find(image => image.id === imageId),
    });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal } = this.state;

    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleImageName} />
        {images && images.length === 0 && (
          <Message
            message="We can`t find pictures by this name. Please check your search
            request"
          />
        )}
        {images && (
          <ImageGallery images={images} onClick={this.handleClickImage} />
        )}
        {images && images.length >= 12 && (
          <Button onClick={this.handleLoadMoreBtn} />
        )}
        {isLoading && <Loader />}
        {showModal && (
          <Modal
            modalImage={this.state.modalImage}
            onClose={this.handleModalClose}
          />
        )}
      </AppStyle>
    );
  }
}
