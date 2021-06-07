import PropTypes from 'prop-types'

function ColorMenu({colors, chooseColor}) {
    return (
        <div>
            {colors.map(item => (
                <button style={{ backgroundColor: item.color}} type="button" key={item.label} onClick={chooseColor}>
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

export default ColorMenu

