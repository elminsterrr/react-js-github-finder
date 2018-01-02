import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './style.css';

import { search } from '../../actions/';

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

function mapStateToProps(state) {
  return {
    searchedTerm: state.searchedTerm,
    savedData: state.savedData,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
