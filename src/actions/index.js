import * as c from './../actions/ActionTypes';

export const addBeer = (beer) => {
  const { name, brand, price, abv, description, pintCount, timeTapped, id } = beer;
  
  return {
    type: c.ADD_BEER,
    name: name,
    brand: brand,
    price: price,
    abv: abv,
    description: description,
    pintCount: pintCount,
    timeTapped: timeTapped,
    formattedShelfLife: "Less than a hour ago",
    id: id
  };
}

export const deleteBeer = id => ({
  type: c.DELETE_BEER,
  id
});


export const sellPint = id => ({
    type: c.SELL_PINT,
    id: id
});


export const restockBeer = id => ({
  type: c.RESTOCK_BEER,
  id: id
});

  
export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});


export const toggleEditForm = () => ({
type: c.TOGGLE_EDIT_FORM
});


export const selectBeer = (id) => ({
  type: c.SELECT_BEER,
  id: id
});

export const deselectBeer = (id) => ({
  type: c.DESELECT_BEER,
  id: id
});

export const updateTime = (id, formattedShelfLife) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedShelfLife: formattedShelfLife
});