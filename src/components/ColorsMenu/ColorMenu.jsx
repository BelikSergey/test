import PropTypes from 'prop-types'

function ColorMenu({colors, chooseColor}) {
    return (
        <div>
            {colors.map(item => (
                <button type="button" key={item.label} onClick={chooseColor}>
                    <span className="">
                        {item.label}
                    </span>
                    {item.color}
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

