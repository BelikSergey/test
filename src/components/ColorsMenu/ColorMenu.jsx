import PropTypes from 'prop-types'
import {useEffect, useCallback, useRef} from 'react'
import {useSelector,useDispatch,}  from 'react-redux';
import actions from '../../redux/colorActions'



function ColorMenu({ colors}) {
    const dispatch = useDispatch();

    const colorModal = useSelector((state) => state.colorModal);
    
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
  })

  // eslint-disable-next-line
    const handleColor = useCallback((evt) => {
        const value = evt.currentTarget.dataset.color;  
        dispatch(actions.changeHexValue(value))
        dispatch(actions.changeCurrentColor(value))
        dispatch(actions.changeColorModal(!colorModal))
        // setModal(!modal);
    })

    return (
        <div ref={myRef} >
            {colors.map(item => (
                <button style={{ backgroundColor: item.color }}
                    type="button"
                    key={item.label}
                    onClick={handleColor}
                    data-color={item.color}
                >
                    <span className="">
                        {item.label}
                    </span>
                    <div style={{ backgroundColor: item.color}}></div>
                    
                </button>
                
            ))}
        </div>
    )
}

ColorMenu.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.object),
    chooseColor: PropTypes.func,

}

// const mapDispatchToProps = dispatch => ({
//     chooseColor: (item) => dispatch(actions.changeCurrentColor(item))
// });




export default ColorMenu

