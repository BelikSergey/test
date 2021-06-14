import types from './actions-type';

const changeCurrentColor = value => {
  return {
    type: types.currentColor,
    payload: value,
  };
};
const changeHexValue = value => {
  return {
    type: types.hexValue,
    payload: value,
  };
};

const changeColorModal = value => {
  return {
    type: types.colorModal,
    payload: value,
  };
};

const changeHexModal = value => {
  return {
    type: types.rgbModal,
    payload: value,
  };
};

const actions = {
  changeCurrentColor,
  changeColorModal,
  changeHexModal,
  changeHexValue,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default actions;
