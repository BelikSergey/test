import { combineReducers } from 'redux';
import types from './actions-type';

const currentColorReducer = (
  state = '',
  { type, payload },
) => {
  switch (type) {
    case types.currentColor:
      return payload;

    default:
      return state;
  }
};

const hexValueReducer = (state = '', { type, payload }) => {
  switch (type) {
    case types.hexValue:
      // console.log('есть редюсер');
      return payload;

    default:
      return state;
  }
};

const changeColorReducer = (
  state = false,
  { type, payload },
) => {
  switch (type) {
    case types.colorModal:
      return payload;

    default:
      return state;
  }
};

const changeHexReducer = (
  state = false,
  { type, payload },
) => {
  switch (type) {
    case types.rgbModal:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  currentColor: currentColorReducer,
  colorModal: changeColorReducer,
  hexModal: changeHexReducer,
  hexValue: hexValueReducer,
});
