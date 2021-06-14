import { CSSTransition } from 'react-transition-group';
import { useDispatch, useSelector } from 'react-redux';
import ColorButton from '../Buttons/ColorButton';
import HexButton from '../Buttons/HexButton';
import ColorMenu from '../ColorsMenu';
import arrColors from '../../data/colors';
import HexMenu from '../HexMenu';
import actions from '../../redux/colorActions';
import s from './ColorPicker.module.css';

const ColorPicker = () => {
  const dispatch = useDispatch();

  const modalColor = useSelector(state => state.colorModal);
  const hexModal = useSelector(state => state.hexModal);
  const hexValue = useSelector(state => state.hexValue);

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
          <div className={s.hexValue}>{hexValue}</div>
          <ColorButton
            showHexMenu={handleHexMenu}
            color={hexValue}
          />
          <HexButton showColorMenu={handleColorMenu} />
          {modalColor && (
            <ColorMenu
              colors={arrColors}
              className="button"
            />
          )}
          {hexModal && <HexMenu className="button" />}
        </div>
      </div>
    </CSSTransition>
  );
};

export default ColorPicker;
