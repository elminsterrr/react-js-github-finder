import axios from 'axios';

export const SEARCH_TERM = 'SEARCH_TERM';
export const SAVE_DATA = 'SAVE_DATA';

export function search(query) {
  const githubApi = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc`;
  const request = axios.get(githubApi);
  return dispatch => {
    request.then(({ data: dataFromGithub }) => {
      dispatch({ type: SEARCH_TERM, payload: query });
      dispatch({ type: SAVE_DATA, payload: dataFromGithub });
    });
  };
}
