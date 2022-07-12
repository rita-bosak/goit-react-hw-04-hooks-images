import React, { useState, useEffect } from 'react';
import ImageGallery from '../ImageGallery/ImageGallery';
import ImageApi from '../../service/image-api';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Button from '../Button/Button';
import Loader from '../Loader/Loader';
import Modal from '../Modal/Modal';
import Message from '../Message/Message';

const GalleryView = ({ imageName }) => {
  const [images, setImages] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showBtn, setShowBtn] = useState(false);
  const [perPage] = useState(12);

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setIsLoading(true);
    setPage(1);
    setShowBtn(false);

    ImageApi.fetchImage(imageName, 1, perPage).then(response => {
      setImages(response);
      if (response.length >= perPage) {
        setShowBtn(true);
      }
      setPage(state => (state += 1));
      setIsLoading(false);
    });
  }, [imageName, perPage]);

  const handleLoadMoreBtn = async () => {
    ImageApi.fetchImage(imageName, page, perPage).then(response => {
      if (response.length < perPage) {
        setShowBtn(false);
      }

      setImages(state => [...state, ...response]);
    });
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
    <>
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
    </>
  );
};

export default GalleryView;
