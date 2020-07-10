import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, price, abv, description, id, formattedWaitTime, timeTapped } = action;
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
          timeTapped: timeTapped,
          formattedWaitTime: formattedWaitTime
        }
      });
      case c.DELETE_BEER:
        const newState = { ...state };
        delete newState[id];
        return newState;
      case c.UPDATE_TIME:
        const newBeer = Object.assign({}, state[id], { formattedWaitTime });
        const updatedState = Object.assign({}, state, {
          [id]: newBeer
        });
        return updatedState;
      default:
        return state;
  }
}