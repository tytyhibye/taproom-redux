import beerListReducer from "../../reducers/beer-list-reducer";
import Moment from 'moment';
import * as c from './../../actions/ActionTypes';

describe("beerListReducer", () => {

  let action;

  const currentState = {
    1: {
      name: "RPM",
      brand: "Boneyard",
      price: "7",
      abv: "6",
      description: "perfectly dank",
      pintCount: 124,
      timeTapped: 0,
      id: 1
    },
    2: {
    name: "Irish Death",
    brand: "Ironhorse",
    price: "7",
    abv: "8",
    description: "body of an ale, flavor of a stout",
    pintCount: 124,
    timeTapped: 0,
    id: 2
    }
  };

  const beerDetail ={
    name: "RPM",
    brand: "Boneyard",
    price: "7",
    abv: "6",
    description: "perfectly dank",
    pintCount: 124,
    timeTapped: 0,
    formattedShelfLife: "A few seconds ago",
    id: 1
  };

  const updatedBeerDetail = {
    name: "RPM",
    brand: "Boneyard",
    price: "7",
    abv: "6",
    description: "a balanced blend of citrus and pine",
    pintCount: 124,
    timeTapped: 0,
    id: 1
  };

  test("Should return default state if there is no action type passed into the reducer", () => {
    expect(beerListReducer({}, { type: null })).toEqual({});
  });

  test('Should add a formatted shelf life to a tapped beer', () => {
    const { name, brand, price, abv, description, pintCount, timeTapped, id} = beerDetail;
    action = {
      type: c.UPDATE_TIME,
      formattedShelfLife: '4 days ago',
      id: id
    };
    expect(beerListReducer({ [id] : beerDetail }, action)).toEqual({
      [id] : {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        description: description,
        pintCount: pintCount,
        timeTapped: timeTapped,
        id: id,
        formattedShelfLife: '4 days ago'
      }
    });
  });

  test("Should successfully add new beer to the beer list with formatted shelf life timer starting at 0", () => {
    const { name, brand, price, abv, description, pintCount, timeTapped, id} = beerDetail;
    action ={
      type: c.ADD_BEER,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      description: description,
      pintCount: pintCount,
      timeTapped: timeTapped,
      id: id,
      formattedShelfLife: new Moment().fromNow()
    };
    expect(beerListReducer({}, action)).toEqual({
      1: {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        description: description,
        pintCount: pintCount,
        timeTapped: timeTapped,
        id: id,
        formattedShelfLife: "a few seconds ago"
      }
    });
  });

  test("Should update beer detail if key already exists using the same ADD_BEER Reducer", () => {
    const { name, brand, price, abv, description, pintCount, id } = updatedBeerDetail;
    action = {
      type: c.ADD_BEER,
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      description: description,
      pintCount: pintCount,
      id: id
    };

    expect(beerListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        price: price,
        abv: abv,
        description: description,
        pintCount: pintCount,
        id: id
      },
    });
  });


  test("Should successfully delete a beer from list", () => {
    action = {
      type: c.DELETE_BEER,
      id: 1,
    };
    expect(beerListReducer(currentState, action)).toEqual({
      2: {
        name: "Irish Death",
        brand: "Ironhorse",
        price: "7",
        abv: "8",
        description: "body of an ale, flavor of a stout",
        pintCount: 124,
        timeTapped: 0,
        id: 2
      },
    });
  });
});