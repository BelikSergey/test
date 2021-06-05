import { Component } from 'react';
import s from './ColorPicker.module.css';
import ColorButton from '../Buttons/ColorButton';
import HexButton from '../Buttons/HexButton';
import ColorMenu from '../ColorsMenu';
import colors from '../../data/colors';

class ColorPicker extends Component {
  state = {
    colors: [],
    modalColor: false,
    modalRGB: false,
    currentColor: '',
  };

  handleColorMenu = e => {
    this.setState(state => ({
      modalColor: !state.modalColor,
    }));
  };
  handleChooseColor = e => {
    console.log(e.target);
  };

  handleHexMenu = e => {
    this.setState(state => ({
      modalRGB: !state.modalRGB,
    }));
  };

  render() {
    const { modalColor, modalRGB } = this.state;
    return (
      <div className={s.container}>
        <h2 className={s.title}>Color Picker</h2>
        <p>Color</p>
        <ColorButton toggleMenu={this.handleColorMenu} />
        <HexButton showHexMenu={this.handleHexMenu} />
        {modalColor && (
          <ColorMenu
            colors={colors}
            chooseColor={this.handleChooseColor}
          />
        )}
      </div>
    );
  }
}

export default ColorPicker;
