import { combineReducers } from 'redux';
import SearchTermReducer from './reducer_search_term';
import SaveDataReducer from './reducer_save_data';
import ShowDataReducer from './reducer_show_data';

const rootReducer = combineReducers({
  searchedTerm: SearchTermReducer,
  savedData: SaveDataReducer,
  showData: ShowDataReducer,
});

export default rootReducer;
