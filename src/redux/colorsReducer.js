import { combineReducers } from 'redux';

const currentColorReducer = (
  state = '',
  { type, payload },
) => {
  switch (type) {
    case 'CHANGE_CURRENT_COLOR':
      return payload;

    default:
      return state;
  }
};

const REDReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'CHANGE_RED':
      return payload;

    default:
      return state;
  }
};

const GREENReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'CHANGE_GREEN':
      return payload;

    default:
      return state;
  }
};

const BLUEReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case 'CHANGE_BLUE':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  currentColor: currentColorReducer,
  RED: REDReducer,
  GREEN: GREENReducer,
  BLUE: BLUEReducer,
});
