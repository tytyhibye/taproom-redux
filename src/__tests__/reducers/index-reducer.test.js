import rootReducer from "../../reducers/index";
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import beerListReducer from '../../reducers/beer-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterBeerList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of beerListReducer matches root reducer', () => {
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined,{ type: null }));
  });

  test('Check that initial state of beerListReducer matches root reducer', () => {
    const action = {
      type: c.ADD_BEER,
      name: "RPM",
      brand: "Boneyard",
      price: "7",
      abv: "6",
      description: "perfectly dank",
      pintCount: 124,
      timeTapped: 0,
      id: 1
    }
    store.dispatch(action);
    expect(store.getState().masterBeerList).toEqual(beerListReducer(undefined, action));
  });
  
  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });

});