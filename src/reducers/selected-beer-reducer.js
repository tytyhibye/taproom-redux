import * as c from './../actions/ActionTypes';

export default (state = null, action) => {
  const { id } = action;
  switch (action.type) {
    case c.SELL_BEER:
      const selectedBeer = id;
      return selectedBeer;
      case c.DESELECT_BEER:
        const thisState = null;
        return thisState;
      default:
        return state;
  }
};