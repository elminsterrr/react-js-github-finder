import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import _ from 'lodash';
import './style.css';

class GithubDataTable extends Component {
  render() {
    let data = null;

    if (this.props.showData === 'last') {
      data = _.last(this.props.savedData);
    } else {
      data = this.props.savedData[this.props.showData];
    }

    return (
      <div>
        {data && (
          <ReactTable
            data={data.items}
            columns={[
              {
                Header: 'Data from GitHub',
                columns: [
                  {
                    Header: 'Id',
                    id: 'id',
                    accessor: d => d.id,
                  },
                  {
                    Header: 'Repo Title',
                    id: 'repoTitle',
                    accessor: d => d.name,
                  },
                  {
                    Header: 'Owner',
                    id: 'owner',
                    accessor: d => d.owner.login,
                  },
                  {
                    Header: 'Stars',
                    id: 'stars',
                    accessor: d => d.stargazers_count,
                  },
                  {
                    Header: 'Created at',
                    id: 'createdAt',
                    accessor: d => d.created_at.slice(0, 10),
                  },
                ],
              },
            ]}
            defaultPageSize={5}
            pageSizeOptions={[5, 10, 15, 20]}
            className="-striped -highlight"
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    searchedTerm: state.searchedTerm,
    savedData: state.savedData,
    showData: state.showData,
  };
}
export default connect(mapStateToProps, null)(GithubDataTable);
