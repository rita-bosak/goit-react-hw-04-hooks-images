import React from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import { AppStyle } from './App.styled';

export default class App extends React.Component {
  state = {
    imageName: '',
  };

  handleImageName = searchingImage => {
    this.setState({ imageName: searchingImage });
  };

  render() {
    return (
      <AppStyle>
        <Searchbar onSubmit={this.handleImageName} />
        <ImageGallery imageName={this.state.imageName} />
        <Button />
        <Loader />
        {/* <Modal /> */}
      </AppStyle>
    );
  }
}
