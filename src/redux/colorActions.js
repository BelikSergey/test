const changeCurrentColor = value => {
  return {
    type: 'CHANGE_CURRENT_COLOR',
    payload: value,
  };
};

const changeColorModal = value => {
  return {
    type: 'CHANGE_COLOR_MODAL',
    payload: value,
  };
};

const changeHexModal = value => {
  return {
    type: 'CHANGE_HEX_MODAL',
    payload: value,
  };
};

const actions = {
  changeCurrentColor,
  changeColorModal,
  changeHexModal,
  // changeBLUE,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default actions;
