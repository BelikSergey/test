import PropTypes from 'prop-types';
import s from './ColorButton.module.css';

function ColorButton({ toggleMenu }) {
  return (
    <div className={s.ColorButton}>
      <button
        className=""
        type="button"
        name={s.colorButton}
        onClick={toggleMenu}
      >
        color
      </button>
    </div>
  );
}

ColorButton.propTypes = {
  toggleMenu: PropTypes.func,
};

export default ColorButton;
