import {
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/colorActions.js';
import hexToRgb from '../../helpers/hexToRgb';
import rgbToHex from '../../helpers/rgbToHex';

function HexMenu() {
  const dispatch = useDispatch();
  const hexModal = useSelector(state => state.hexModal);
  const currentColor = useSelector(
    state => state.currentColor,
  );

  // const hexValue = useSelector(state => state.hexValue);

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const colorRef = useRef();

  const handleClickOutside = e => {
    if (!colorRef.current.contains(e.target)) {
      dispatch(actions.changeHexModal(!hexModal));
      dispatch(actions.changeHexValue(currentColor));
    }
  };

  useEffect(() => {
    document.addEventListener(
      'mousedown',
      handleClickOutside,
    );
    return () =>
      document.removeEventListener(
        'mousedown',
        handleClickOutside,
      );
  });

  useEffect(() => {
    const [R, G, B] = hexToRgb(currentColor);
    setRed(R);
    setGreen(G);
    setBlue(B);
  }, [currentColor]);

  useEffect(() => {
    const hex = rgbToHex(red, green, blue);

    dispatch(actions.changeHexValue(hex));
  });

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

  // eslint-disable-next-line
  const changeHex = useCallback(e => {
    // console.log('сабмит формы');
    e.preventDefault();
    const hex = rgbToHex(red, green, blue);

    dispatch(actions.changeCurrentColor(hex));
    dispatch(actions.changeHexValue(hex));
    dispatch(actions.changeHexModal(!hexModal));
  });

  const closeModal = () => {
    dispatch(actions.changeHexModal(!hexModal));
    dispatch(actions.changeHexValue(currentColor));
  };

  // const { red, green, blue } = this.state;
  return (
    <div ref={colorRef} className="NexMenu">
      <div
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
        }}
      >
        {red}, {green}, {blue}
      </div>
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
