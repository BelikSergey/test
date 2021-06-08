import { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/colorActions.js';

function HexMenu({
  red,
  green,
  blue,
  changeColorRed,
  changeColorGreen,
  changeColorBlue,
  changeHex,
}) {
  // const dispatch = useDispatch();

  // const [redColor, setRedColor] = useState(0);
  // const [greenColor, setGreenColor] = useState(0);
  // const [BlueColor, setBlueColor] = useState(0);

  // const changeColorRed = evt => {
  //   const { value } = evt.currentTarget;
  //   setRedColor(value);
  // };
  // const changeColorGreen = evt => {
  //   const { value } = evt.currentTarget;
  //   setGreenColor(value);
  // };
  // const changeColorBlue = evt => {
  //   const { value } = evt.currentTarget;
  //   setBlueColor(value);
  // };

  return (
    <div className="NexMenu">
      <span>{`${red},${green},${blue}`}</span>
      <form onSubmit={changeHex}>
        <label className="RedSelect">
          R
          <input
            type="range"
            min="0"
            max="255"
            name="RED"
            // value={red}
            onChange={changeColorRed}
          ></input>
        </label>
        <label className="GreenSelect">
          G
          <input
            type="range"
            min="0"
            max="255"
            name="GREEN"
            // value={green}
            onChange={changeColorGreen}
          ></input>
        </label>
        <label className="BlueSelect">
          B
          <input
            type="range"
            min="0"
            max="255"
            name="BLUE"
            // value={blue}
            onChange={changeColorBlue}
          ></input>
        </label>
        <button type="button" onClick={() => {}}>
          cancel
        </button>
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

function componentToHex(c) {
  let hex = c.toString(16);
  return hex.length === 1 ? '0' + hex : hex;
}

function rgbToHex(r, g, b) {
  console.log('есть ргб хекс', r, g, b);
  return (
    '#' +
    componentToHex(r) +
    componentToHex(g) +
    componentToHex(b)
  );
}

function onSubmit(e) {
  e.preventDefault();
  console.log(e);
  // rgbToHex();
}

const mapStateToProps = state => {
  return {
    red: state.RED,
    green: state.GREEN,
    blue: state.BLUE,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeColorRed: evt =>
      dispatch(actions.changeRED(evt.target.value)),
    changeColorGreen: evt =>
      dispatch(actions.changeGREEN(evt.target.value)),
    changeColorBlue: evt =>
      dispatch(actions.changeBLUE(evt.target.value)),
    changeHex: e =>
      dispatch(actions.changeCurrentColor(onSubmit(e))),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HexMenu);
