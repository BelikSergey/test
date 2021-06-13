import s from './ColorPicker.module.css';
import { useDispatch, useSelector } from 'react-redux';
import ColorButton from '../Buttons/ColorButton';
import HexButton from '../Buttons/HexButton';
import ColorMenu from '../ColorsMenu';
import arrColors from '../../data/colors';
import HexMenu from '../HexMenu';
import actions from '../../redux/colorActions';

const ColorPicker = () => {
  const dispatch = useDispatch();
  const modalColor = useSelector(state => state.colorModal);
  const currentColor = useSelector(
    state => state.currentColor,
  );
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
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <div>{hexValue}</div>
      <div style={{ backgroundColor: hexValue }}>rrr</div>
      <ColorButton toggleMenu={handleColorMenu} />
      <HexButton showHexMenu={handleHexMenu} />
      {modalColor && <ColorMenu colors={arrColors} />}
      {hexModal && <HexMenu />}
    </div>
  );
};

export default ColorPicker;
