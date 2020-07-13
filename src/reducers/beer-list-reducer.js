import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  
  const { name, brand, price, abv, description, id, pintCount, formattedShelfLife, timeTapped } = action;
  
  switch (action.type) {
    case c.ADD_BEER:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          price: price,
          abv: abv,
          description: description,
          id: id,
          pintCount: pintCount,
          timeTapped: timeTapped,
          formattedShelfLife: formattedShelfLife
        },
      });

      case c.DELETE_BEER:
        const newState = { ...state };
        delete newState[id];
        return newState;

      case c.UPDATE_TIME:
        const newerState = { ...state };
        const timeState = Object.assign({}, newerState[id], { formattedShelfLife });
        const updatedNewState = Object.assign({}, newerState, {
          [id]: timeState
        });
        return updatedNewState;

      case c.SELL_PINT:
        const pintState = { ...state };
        pintState[id].pintCount = pintState[id].pintCount -1;
        return pintState;

      case c.RESTOCK_BEER:
        const restockState = { ...state };
        restockState[id].pintCount = 124;
        restockState[id].timeTapped = 0;
        return restockState;
        
      default:
        return state;
  }
};