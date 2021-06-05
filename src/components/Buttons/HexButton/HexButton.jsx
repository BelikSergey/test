import PropTypes from 'prop-types';
import s from './HexButton.module.css';

function HexButton({ showHexMenu }) {
  return (
    <div className={s.ColorButton}>
      <button
        className=""
        type="button"
        name={s.colorButton}
        onClick={showHexMenu}
      >
        HEX
      </button>
    </div>
  );
}

HexButton.propTypes = {
  showHexMenu: PropTypes.func,
};

export default HexButton;
