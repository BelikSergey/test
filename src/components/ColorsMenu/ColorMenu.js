import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import { useEffect, useCallback, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actions from '../../redux/colorActions';
import s from './ColorMenu.module.css';

function ColorMenu({ colors }) {
  const dispatch = useDispatch();

  const colorModal = useSelector(state => state.colorModal);

  const myRef = useRef();

  const handleClickOutside = e => {
    if (!myRef.current.contains(e.target)) {
      dispatch(actions.changeColorModal(!colorModal));
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

  // eslint-disable-next-line
  const handleColor = useCallback(evt => {
    const value = evt.currentTarget.dataset.color;
    dispatch(actions.changeHexValue(value));
    dispatch(actions.changeCurrentColor(value));
    dispatch(actions.changeColorModal(!colorModal));
  });

  return (
    <CSSTransition
      classNames={s}
      in={true}
      appear={true}
      timeout={500}
    >
      <div ref={myRef} className={s.menu}>
        {colors.map(item => (
          <button
            className={s.colorButton}
            type="button"
            key={item.label}
            onClick={handleColor}
            data-color={item.color}
          >
            <span className="">{item.label}</span>
            <svg
              style={{ fill: item.color }}
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 32 32"
            >
              <title>stop2</title>
              <path d="M4 4h24v24h-24z"></path>
            </svg>
          </button>
        ))}
      </div>
    </CSSTransition>
  );
}

ColorMenu.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.object),
  chooseColor: PropTypes.func,
};

export default ColorMenu;
