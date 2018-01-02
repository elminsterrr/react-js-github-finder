import { SAVE_DATA } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case SAVE_DATA:
      return [...state, action.payload];
    default:
      return state;
  }
}
