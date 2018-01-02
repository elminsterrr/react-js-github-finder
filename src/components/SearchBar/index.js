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
    const storedTerms = this.props.searchedTerm;
    let foundDuplicate = false;

    if (storedTerms.length === 0 && query) {
      localStorage.setItem('lastSearch', query);
      return this.props.search(query);
    }

    if (storedTerms.length !== 0 && query) {
      const testDuplicate = storedTerms.map((term, index) => {
        if (term === query) {
          localStorage.setItem('lastSearch', query);
          this.props.loadFromStore(index);
          return true;
        }
        return false;
      });
      foundDuplicate = testDuplicate.some(element => element);
    }

    if (storedTerms.length !== 0 && !query) {
      return false;
    }

    if (foundDuplicate) {
      return false;
    }

    localStorage.setItem('lastSearch', query);
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
  return bindActionCreators({ search, loadFromStore }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
