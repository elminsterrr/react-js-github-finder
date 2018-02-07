import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactTable from 'react-table';
import _ from 'lodash';
import './style.css';

class GithubDataTable extends Component {
  render() {
    const { showData, savedData } = this.props;
    let data = null;

    if (showData === 'last') {
      data = _.last(savedData);
    } else {
      data = savedData[showData];
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
                    Header: 'Link',
                    id: 'link',
                    accessor: d => d.html_url,
                    Cell: props => (
                      <a href={props.value} target="_blank">
                        {props.value}
                      </a>
                    ),
                  },
                  {
                    Header: 'Created at',
                    id: 'createdAt',
                    accessor: d => d.created_at.slice(0, 10),
                  },
                  {
                    Header: 'Updated at',
                    id: 'updatedAt',
                    accessor: d => d.updated_at.slice(0, 10),
                  },
                  {
                    Header: 'Stars',
                    id: 'stars',
                    accessor: d => d.stargazers_count,
                  },
                  {
                    Header: 'Forks',
                    id: 'forks',
                    accessor: d => d.forks_count,
                  },
                ],
              },
            ]}
            defaultPageSize={10}
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
    savedData: state.savedData,
    showData: state.showData,
  };
}
export default connect(mapStateToProps, null)(GithubDataTable);
