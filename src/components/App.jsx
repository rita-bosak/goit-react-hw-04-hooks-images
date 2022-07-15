import React, { useState, useEffect } from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import Message from './Message/Message';
import { AppStyle } from './App.styled';
import ImageApi from 'service/image-api';

const App = () => {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const perPage = 12;

  useEffect(() => {
    if (imageName === '') {
      return;
    }
    setIsLoading(true);

    ImageApi.fetchImage(imageName, page, perPage).then(response => {
      setIsLoading(false);
      setShowBtn(response.length >= perPage ? true : false);

      if (page === 1) {
        return setImages(response);
      }
      setImages(state => [...state, ...response]);
    });
  }, [imageName, page, perPage]);

  const handleSubmit = imageName => {
    setImageName(imageName);
    setPage(1);
  };

  const handleLoadMoreBtn = async () => {
    setPage(state => (state += 1));
  };

  const handleClickImage = imageId => {
    const modalImage = images.find(image => image.id === imageId);

    setModalImage(modalImage);
  };

  const handleModalClose = () => {
    setModalImage(null);
  };

  return (
    <AppStyle>
      <Searchbar onSubmit={handleSubmit} />
      {images && images.length === 0 && (
        <Message
          message="We can`t find pictures by this name. Please check your search
            request"
        />
      )}
      {images && <ImageGallery images={images} onClick={handleClickImage} />}
      {showBtn && <Button onClick={handleLoadMoreBtn} />}
      {isLoading && <Loader />}
      {modalImage && (
        <Modal modalImage={modalImage} onClose={handleModalClose} />
      )}
    </AppStyle>
  );
};

export default App;
