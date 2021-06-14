import PropTypes from 'prop-types';
import s from './ColorButton.module.css';

function ColorButton({ showHexMenu, color}) {
  return (
    <div className={s.Button} >
      <button
        className={s.ColorButton}
        type="button"
        name={s.colorButton}
        onClick={showHexMenu}
      >
        <svg style={{ fill: color }} version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30"  viewBox="0 0 32 32">
        <title>stop2</title>
        <path d="M4 4h24v24h-24z"></path>
        </svg>
      </button>

   </div>
        
  );
}

ColorButton.propTypes = {
  toggleMenu: PropTypes.func,
};

export default ColorButton;
