import { useState } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/colorActions.js';

function HexMenu({ changeHex }) {
  // const dispatch = useDispatch();

  const [redColor, setRedColor] = useState(0);
  const [greenColor, setGreenColor] = useState(0);
  const [BlueColor, setBlueColor] = useState(0);

  const changeColorRed = evt => {
    const { value } = evt.currentTarget;
    setRedColor(value);
  };
  const changeColorGreen = evt => {
    const { value } = evt.currentTarget;
    setGreenColor(value);
  };
  const changeColorBlue = evt => {
    const { value } = evt.currentTarget;
    setBlueColor(value);
  };

  return (
    <div className="NexMenu">
      <span>{`${redColor},${greenColor},${BlueColor}`}</span>
      <form action="">
        <label className="RedSelect">
          R
          <input
            type="range"
            min="0"
            max="255"
            name="RED"
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
            onChange={changeColorBlue}
          ></input>
        </label>
        <button type="button" onClick={() => {}}>
          cancel
        </button>
        <button type="submit" onSubmit={changeHex}>
          OK
        </button>
      </form>
    </div>
  );
}

// const mapStateToProps = state => {
//   return {
//     red: state.RED,
//     green: state.GREEN,
//     blue: state.GREEN,
//   };
// };

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: value => dispatch(actions.changeRED(value)),
    // onChange: value => dispatch(actions.changeGREEN(value)),
    // onChange: value => dispatch(actions.changeBLUE(value)),
  };
};

export default connect(null, mapDispatchToProps)(HexMenu);
