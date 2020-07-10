import * as c from './../actions/ActionTypes';

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addBeer = (beer) => {
  const { name, brand, price, abv, description, timeTapped } = beer;
  return {
    type: c.ADD_BEER,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    description: description,
    timeTapped: timeTapped
  }
}

export const updateTime = (id, formattedWaitTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedWaitTime: formattedWaitTime
});