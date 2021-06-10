import { combineReducers } from 'redux';

const currentColorReducer = (
  state = '#FFFF00',
  { type, payload },
) => {
  switch (type) {
    case 'CHANGE_CURRENT_COLOR':
      console.log('есть редюсер');

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
    case 'CHANGE_COLOR_MODAL':
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
    case 'CHANGE_HEX_MODAL':
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  currentColor: currentColorReducer,
  colorModal: changeColorReducer,
  hexModal: changeHexReducer,
  //   GREEN: GREENReducer,
  //   BLUE: BLUEReducer,
});
