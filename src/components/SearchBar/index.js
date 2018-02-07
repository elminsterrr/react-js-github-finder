import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import './style.css';

import { search, loadFromStore } from '../../actions/';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '' };

    this.startSearch = _.debounce(this.startSearch, 2000);
  }

  componentDidMount() {
    const lastQuery = localStorage.getItem('lastSearch');
    if (lastQuery !== null) {
      this.startSearch(lastQuery);
    }
    return false;
  }

  startSearch(query) {
    const { searchedTerm } = this.props;
    const innerSearch = this.props.search;
    const innerLoadFromStore = this.props.loadFromStore;
    let foundDuplicate = false;

    if (searchedTerm.length === 0 && query) {
      localStorage.setItem('lastSearch', query);
      return innerSearch(query);
    }

    if (searchedTerm.length !== 0 && query) {
      const testDuplicate = searchedTerm.map((term, index) => {
        if (term === query) {
          localStorage.setItem('lastSearch', query);
          innerLoadFromStore(index);
          return true;
        }
        return false;
      });
      foundDuplicate = testDuplicate.some(element => element);
    }

    if (searchedTerm.length !== 0 && !query) {
      return false;
    }

    if (foundDuplicate) {
      return false;
    }

    localStorage.setItem('lastSearch', query);
    return innerSearch(query);
  }

  onChange = ({ target: { value } }) => {
    this.setState({ inputValue: value });
    if (value.length > 2) {
      this.startSearch(value);
    }
  };

  render() {
    return (
      <div className="SearchBar">
        <input
          className="SearchBar-input"
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
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ search, loadFromStore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
