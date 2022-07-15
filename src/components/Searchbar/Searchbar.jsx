import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  SearchbarStyle,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [imageName, setImageName] = useState('');

  const handleNameChange = e => {
    e.preventDefault();
    setImageName(e.currentTarget.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(imageName.toLowerCase().trim());
  };

  return (
    <SearchbarStyle>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          value={imageName}
          onChange={handleNameChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarStyle>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
