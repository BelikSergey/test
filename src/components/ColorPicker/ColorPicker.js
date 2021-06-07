import { Component, useState } from 'react';
import s from './ColorPicker.module.css';
import ColorButton from '../Buttons/ColorButton';
import HexButton from '../Buttons/HexButton';
import ColorMenu from '../ColorsMenu';
import ArrColors from '../../data/colors';
import HexMenu from '../HexMenu';

const ColorPicker = () => {
  const [colors, setColors] = useState(ArrColors);
  const [modalColor, setModalColor] = useState(false);
  const [modalRGB, setModalRGB] = useState(false);
  // const [currentColor, setcurrentColor] = useState('');

  const handleColorMenu = e => {
    setModalColor(!modalColor);
  };
  const handleChooseColor = e => {
    console.log(e.target);
  };

  const handleHexMenu = e => {
    setModalRGB(!modalRGB);
  };

  return (
    <div className={s.container}>
      <h2 className={s.title}>Color Picker</h2>
      <p>Color</p>
      <ColorButton toggleMenu={handleColorMenu} />
      <HexButton showHexMenu={handleHexMenu} />
      {modalColor && (
        <ColorMenu
          colors={colors}
          chooseColor={handleChooseColor}
        />
      )}
      {modalRGB && <HexMenu />}
    </div>
  );
};

export default ColorPicker;
