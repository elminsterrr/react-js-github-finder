import { SHOW_DATA } from '../actions/index';

export default function(state = null, action) {
  switch (action.type) {
    case SHOW_DATA:
      return action.payload;
    default:
      return state;
  }
}
