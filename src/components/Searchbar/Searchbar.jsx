import React from 'react';

export default class Searchbar extends React.Component {
  render() {
    return (
      <header className="searchbar">
        <form className="form">
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>

          <input
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            value={this.props.value}
            onChange={this.props.onChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
