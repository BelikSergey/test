import {
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import { CSSTransition } from 'react-transition-group';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/colorActions.js';
import hexToRgb from '../../helpers/hexToRgb';
import rgbToHex from '../../helpers/rgbToHex';
import s from './HexMenu.module.css';

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
    <CSSTransition
      classNames={s}
      in={true}
      appear={true}
      timeout={500}
    >
      <div ref={colorRef}>
        <form className={s.HexMenu} onSubmit={changeHex}>
          <label className={s.inputRange}>
            R
            <input
              className={s.red}
              type="range"
              min="0"
              max="255"
              name="RED"
              value={red}
              onChange={changeColorRed}
            ></input>
          </label>
          <label className={s.inputRange}>
            G
            <input
              className={s.green}
              type="range"
              min="0"
              max="255"
              name="GREEN"
              value={green}
              onChange={changeColorGreen}
            ></input>
          </label>
          <label className={s.inputRange}>
            B
            <input
              className={s.blue}
              type="range"
              min="0"
              max="255"
              name="BLUE"
              value={blue}
              onChange={changeColorBlue}
            ></input>
          </label>
          <div className={s.buttonsContainer}>
            <button
              type="button"
              onClick={closeModal}
              className={s.cancelButton}
            >
              CANCEL
            </button>
            <button className={s.okButton} type="submit">
              OK
            </button>
          </div>
        </form>
      </div>
    </CSSTransition>
  );
}

// const mapDispatchToProps = dispatch => ({
//   onSubmit: item =>
//     dispatch(actions.changeCurrentColor(item)),
// });

export default HexMenu;
