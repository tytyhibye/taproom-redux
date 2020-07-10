import * as c from './../../actions/ActionTypes';
import * as actions from "./../../actions";

describe('tapRoom actions', () => {
  it('deleteBeer should create DELETE_BEER action', () => {
    expect(actions.deleteBeer(1)).toEqual({
      type: c.DELETE_BEER,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addBeer should create ADD_BEER action', () => {
    expect(actions.addBeer({name: "RPM", brand: "Boneyard", price: "7", abv: "6", description: "perfectly dank", pintCount: 124, timeTapped: 0, id: 1})).toEqual({
      type: c.ADD_BEER,
      name: "RPM",
      brand: "Boneyard",
      price: "7",
      abv: "6",
      description: "perfectly dank",
      pintCount: 124,
      timeTapped: 0,
      id: 1
    });
  });

  it('updateTime should create UPDATE_TIME action', () => {
    expect(actions.updateTime(1, "A few seconds")).toEqual({
      type: c.UPDATE_TIME,
      id: 1,
      formattedShelfLife: "A few seconds"
    });
  });
});