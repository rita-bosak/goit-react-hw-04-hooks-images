import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

export default class App extends React.Component {
  state = {
    imageName: '',
  };

  handleImageName = searchingImage => {
    this.setState({ imageName: searchingImage });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleImageName} />
        <ImageGallery imageName={this.state.imageName} />
        <Button />
        <Loader />
        <Modal />
      </>
    );
  }
}
