import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/colorActions.js';

function HexMenu() {
  const dispatch = useDispatch();
  const hexModal = useSelector(state => state.hexModal);

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  const changeColorRed = evt => {
    const { value } = evt.currentTarget;
    setRed(value);
  };
  const changeColorGreen = evt => {
    const { value } = evt.currentTarget;
    setGreen(value);
  };
  const changeColorBlue = evt => {
    const { value } = evt.currentTarget;
    setBlue(value);
  };

  const rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  };

  const fullColorHex = (r, g, b) => {
    const red = rgbToHex(r);
    const green = rgbToHex(g);
    const blue = rgbToHex(b);
    return '#' + red + green + blue;
  };

  const changeHex = useCallback(e => {
    console.log('сабмит формы');
    e.preventDefault();
    const hex = fullColorHex(red, green, blue);

    dispatch(actions.changeCurrentColor(hex));
    dispatch(actions.changeHexModal(!hexModal));
  });

  const closeModal = () => {
    dispatch(actions.changeHexModal(!hexModal));
  };

  // const { red, green, blue } = this.state;
  return (
    <div className="NexMenu">
      {/* <span>{`${red}${green}${blue}`}</span> */}
      <form onSubmit={changeHex}>
        <label className="RedSelect">
          R
          <input
            type="range"
            min="0"
            max="255"
            name="RED"
            value={red}
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
            value={green}
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
            value={blue}
            onChange={changeColorBlue}
          ></input>
        </label>
        <button type="button" onClick={closeModal}>
          cancel
        </button>
        <button type="submit">OK</button>
      </form>
    </div>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: item =>
//     dispatch(actions.changeCurrentColor(item)),
// });

export default HexMenu;
