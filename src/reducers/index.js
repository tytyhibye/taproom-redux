import formVisibleReducer from './form-visible-reducer';
import beerListReducer from './beer-list-reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  masterBeerList: beerListReducer
});

export default rootReducer;