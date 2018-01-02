import React, { Component } from 'react';

import './style.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };
  }

  startSearch(query) {
    return this.props.search(query);
  }

  onChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
    if (value.length > 2) {
      this.startSearch(value);
    }
  };

  render() {
    return (
      <div className="Search-bar">
        <input
          placeholder="Type something to search GitHub"
          value={this.state.inputValue}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default SearchBar;
