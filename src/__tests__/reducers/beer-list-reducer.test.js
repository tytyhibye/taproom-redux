import beerListReducer from "../../reducers/beer-list-reducer";
import Moment from 'moment';

describe("beerListReducer", () => {

  let action;

  const beerDetail ={
    name: "RPM",
    brand: "Boneyard",
    price: "7",
    abv: "6",
    description: "perfectly dank",
    timeTapped: 0,
    id: 1
  };
})

const updatedBeerDetail = {
  name: "RPM",
  brand: "Boneyard",
  price: "7",
  abv: "6",
  description: "a balanced blend of citrus and pine",
  timeTapped: 0,
  id: 1
};

const currentState = {
  1: {
    name: "RPM",
    brand: "Boneyard",
    price: "7",
    abv: "6",
    description: "perfectly dank",
    timeTapped: 0,
    id: 1
  },
  2: {
  name: "Irish Death",
  brand: "Ironhorse",
  price: "7",
  abv: "8",
  description: "body of an ale, flavor of a stout",
  timeTapped: 0,
  id: 1
  },
};

test('Should add a formatted shelf life to a tapped beer', () => {
  const { name, brand, price, abv, description, timeTapped, id} = beerDetail;
  action = {
    type: c.UPDATE_TIME,
    formattedWaitTime: '4 minutes',
    id: id
  };
  expect(ticketListReducer({ [id] : beerDetail }, action)).toEqual({
    [id] : {
      name: name,
      brand: brand,
      price: price,
      abv: abv,
      description: description,
      timeTapped: timeTapped,
      id: id,
      formattedWaitTime: '4 minutes'
    }
  });
});
