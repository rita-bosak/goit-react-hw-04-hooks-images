import React, { useState } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { AppStyle } from './App.styled';
import GalleryView from './GalleryView/GalleryView';

const App = () => {
  const [imageName, setImageName] = useState('');

  return (
    <AppStyle>
      <Searchbar onSubmit={setImageName} />
      <GalleryView imageName={imageName} />
    </AppStyle>
  );
};

export default App;
