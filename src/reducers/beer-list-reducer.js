import * as c from './../actions/ActionTypes';
import Moment from 'moment';

export default (state = {}, action) => {
  
  const { name, brand, price, abv, description, pintCount, timeTapped, formattedShelfLife, id } = action;
  
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
        return Object.assign({}, restockState, {
          [id]: 
            Object.assign({}, restockState[id], {
            pintCount: 124,
            timeTapped: new Moment(),
            formattedShelfLife: new Moment().fromNow()
          })
        });
      
      default:
        return state;
  }
};