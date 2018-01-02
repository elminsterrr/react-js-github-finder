import { SEARCH_TERM } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SEARCH_TERM:
      return [...state, action.payload];
    default:
      return state;
  }
}
