import * as c from './../actions/ActionTypes';

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addBeer = (beer) => {
  const { name, brand, price, abv, description, pintCount, timeTapped, formattedShelfLife, id } = beer;
  return {
    type: c.ADD_BEER,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    description: description,
    pintCount: pintCount,
    timeTapped: timeTapped,
    formattedShelfLife,
    id: id
  }
}

export const sellPint = (beer) => {
  const { name, brand, price, abv, description, pintCount, timeTapped, formattedShelfLife, id } = beer;
  return {
    type: c.SELL_PINT,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    description: description,
    pintCount: pintCount -1,
    timeTapped: timeTapped,
    formattedShelfLife: formattedShelfLife,
    id: id
  }
}

export const updateTime = (id, formattedShelfLife) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedShelfLife: formattedShelfLife
});