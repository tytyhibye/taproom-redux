import * as c from './../../actions/ActionTypes';
import selectedBeerReducer from './../../reducers/selected-beer-reducer';

let action;

const currentState = {
  1: {
    name: "RPM",
    brand: "Boneyard",
    price: 7,
    abv: 6,
    description: "perfectly dank",
    pintCount: 124,
    timeTapped: 0,
    id: 1
  }
  // 2: {
  // name: "Irish Death",
  // brand: "Ironhorse",
  // price: 7,
  // abv: 8,
  // description: "body of an ale, flavor of a stout",
  // pintCount: 124,
  // timeTapped: 0,
  // id: 2
  // }
};

describe('selectedBeerReducer', () => {
  test('Should successfully return selected beer', () => {
    action = {
      type: c.SELECT_BEER,
      id: 1
    };
    expect(selectedBeerReducer(currentState, action)).toEqual({
      name: "RPM",
      brand: "Boneyard",
      price: 7,
      abv: 6,
      description: "perfectly dank",
      pintCount: 124,
      timeTapped: 0,
      id: 1
    });
  });

  test('Should successfully deselect beer and return null id', () => {
    const currentState = {
      id: 1
    }
    action = {
      type: c.DESELECT_BEER
    };
    expect(selectedBeerReducer(currentState, action)).toEqual(null);
  });
});