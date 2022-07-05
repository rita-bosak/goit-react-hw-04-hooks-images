import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyle } from './App.styled';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Message from './Message/Message';
import { API_KEY } from '../service/apiRequest';
import axios from 'axios';

export default class App extends React.Component {
  state = {
    imageName: '',
    images: null,
    page: 1,
    isLoading: false,
    modalImage: null,
    showModal: false,
    showBtn: false,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;

    if (prevName !== nextName && nextName !== '') {
      this.setState({ page: 1, isLoading: true, showBtn: false });

      const response = await axios.get(
        `/?q=${nextName}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
      );

      const responseData = response.data.hits;

      if (responseData.length >= 12) {
        this.setState({ showBtn: true });
      }

      this.setState(prevState => {
        return {
          images: responseData,
          isLoading: false,
          page: (prevState.page += 1),
        };
      });
    }
  }

  handleLoadMoreBtn = async () => {
    const { imageName, page } = this.state;

    const response = await axios.get(
      `/?q=${imageName}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    const responseData = response.data.hits;

    if (responseData.length < 12) {
      this.setState({ showBtn: false });
    }

    this.setState(prevState => {
      return {
        images: [...prevState.images, ...responseData],
        page: (prevState.page += 1),
      };
    });
  };

  handleImageName = imageName => {
    this.setState({ imageName });
  };

  handleClickImage = imageId => {
    const { images } = this.state;
    const modalImage = images.find(image => image.id === imageId);

    this.setState({
      showModal: true,
      modalImage: modalImage,
    });
  };

  handleModalClose = () => {
    this.setState({ showModal: false });
  };

  render() {
    const { images, isLoading, showModal, showBtn } = this.state;

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
        {showBtn && <Button onClick={this.handleLoadMoreBtn} />}
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
