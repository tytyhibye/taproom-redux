import * as c from './../../actions/ActionTypes';

describe('editingReducer', () => {

  test('Should toggle editing state to true', () => {
    expect(editingReducer(false, { type: c.TOGGLE_EDIT_FORM })).toEqual(true);
  });
});