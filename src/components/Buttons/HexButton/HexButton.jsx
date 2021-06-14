import PropTypes from 'prop-types';
import s from '../ColorButton/ColorButton.module.css';

function HexButton({ showColorMenu }) {
  return (
    <div className={s.Button}>
      <button
        className={s.ColorButton}
        type="button"
        name={s.colorButton}
        onClick={showColorMenu}
      >
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="grey" viewBox="0 0 20 20">
        <title>triangle-down</title>
        <path d="M5 6h10l-5 9-5-9z"></path>
        </svg>
      </button>
      </div>
  );
}

HexButton.propTypes = {
  showHexMenu: PropTypes.func,
};

export default HexButton;
