const changeCurrentColor = value => {
  return {
    type: 'CHANGE_CURRENT_COLOR',
    payload: value,
  };
};

const changeRED = value => {
  // console.log('hbcaskhbdvfcahb');
  return {
    type: 'CHANGE_RED',
    payload: value,
  };
};

const changeGREEN = value => {
  return {
    type: 'CHANGE_GREEN',
    payload: value,
  };
};

const changeBLUE = value => {
  return {
    type: 'CHANGE_BLUE',
    payload: value,
  };
};

const actions = {
  changeCurrentColor,
  changeRED,
  changeGREEN,
  changeBLUE,
};
// eslint-disable-next-line import/no-anonymous-default-export
export default actions;
