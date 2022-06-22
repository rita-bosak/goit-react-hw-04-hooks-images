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

  handleImageName = e => {
    this.setState({ imageName: e.currentTarget.value });
  };

  render() {
    return (
      <>
        <Searchbar
          value={this.state.imageName}
          onChange={this.handleImageName}
        />
        <ImageGallery />
        <Button />
        <Loader />
        <Modal />
      </>
    );
  }
}
