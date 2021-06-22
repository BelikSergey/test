import { CSSTransition } from 'react-transition-group';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../redux/selectors';
import ColorButton from '../Buttons/ColorButton';
import HexButton from '../Buttons/HexButton';
import ColorMenu from '../ColorsMenu';
import HexMenu from '../HexMenu';
import actions from '../../redux/colorActions';
import s from './ColorPicker.module.css';

const ColorPicker = ({ value, colors, onChange }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.changeCurrentColor(value));
    dispatch(actions.changeHexValue(value));
  }, [dispatch, value]);

  const currenColor = useSelector(
    selectors.getCurrentColor,
  );

  useEffect(() => {
    onChange(currenColor);
  }, [onChange, currenColor]);

  const modalColor = useSelector(selectors.getModalColor);
  const hexModal = useSelector(selectors.getHexModal);
  const hexValue = useSelector(selectors.getHexValue);

  const handleColorMenu = e => {
    dispatch(actions.changeColorModal(!modalColor));
    dispatch(actions.changeHexModal(false));
  };

  const handleHexMenu = e => {
    dispatch(actions.changeHexModal(!hexModal));
    dispatch(actions.changeColorModal(false));
  };

  return (
    <CSSTransition
      classNames={s}
      in={true}
      appear={true}
      timeout={500}
    >
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <div className={s.content}>
          <div className={s.hexValue}>{currenColor}</div>
          <ColorButton
            showHexMenu={handleHexMenu}
            color={hexValue}
          />
          <HexButton showColorMenu={handleColorMenu} />
          {modalColor && <ColorMenu colors={colors} />}
          {hexModal && <HexMenu />}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ColorPicker;
