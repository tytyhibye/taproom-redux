import formVisibleReducer from './form-visible-reducer';
import beerListReducer from './beer-list-reducer';
import selectedBeerReducer from './selected-beer-reducer';
import editingReducer from './editing-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBeerList: beerListReducer,
  selectedBeer: selectedBeerReducer,
  editing: editingReducer
});

export default rootReducer;