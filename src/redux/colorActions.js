const changeCurrentColor = value => {
  return {
    type: 'CHANGE_CURRENT_COLOR',
    payload: value,
  };
};

const changeHEX = value => {
  console.log('hbcaskhbdvfcahb');
  return {
    type: 'CHANGE_RED',
    payload: value,
  };
};

const actions = {
  changeCurrentColor,
  changeHEX,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default actions;
