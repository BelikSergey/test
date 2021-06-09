import { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../redux/colorActions.js';

class HexMenu extends Component {
  state = {
    red: 0,
    green: 0,
    blue: 0,
  };

  changeColorRed = evt => {
    const { value } = evt.currentTarget;
    this.setState({ red: value });
  };
  changeColorGreen = evt => {
    const { value } = evt.currentTarget;
    this.setState({ green: value });
  };
  changeColorBlue = evt => {
    const { value } = evt.currentTarget;
    this.setState({ blue: value });
  };

  rgbToHex = function (rgb) {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  };

  fullColorHex = (r, g, b) => {
    const red = this.rgbToHex(r);
    const green = this.rgbToHex(g);
    const blue = this.rgbToHex(b);
    return '#' + red + green + blue;
  };

  changeHex = e => {
    console.log('сабмит формы');
    e.preventDefault();
    const { red, green, blue } = this.state;

    this.props.onSubmit(
      this.fullColorHex(red, green, blue),
    );
    this.props.onClick();
  };
  render() {
    // const { red, green, blue } = this.state;
    return (
      <div className="NexMenu">
        {/* <span>{`${red}${green}${blue}`}</span> */}
        <form onSubmit={this.changeHex}>
          <label className="RedSelect">
            R
            <input
              type="range"
              min="0"
              max="255"
              name="RED"
              // value={red}
              onChange={this.changeColorRed}
            ></input>
          </label>
          <label className="GreenSelect">
            G
            <input
              type="range"
              min="0"
              max="255"
              name="GREEN"
              // value={green}
              onChange={this.changeColorGreen}
            ></input>
          </label>
          <label className="BlueSelect">
            B
            <input
              type="range"
              min="0"
              max="255"
              name="BLUE"
              // value={blue}
              onChange={this.changeColorBlue}
            ></input>
          </label>
          <button
            type="button"
            onClick={this.props.onClick}
          >
            cancel
          </button>
          <button type="submit">OK</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSubmit: item =>
    dispatch(actions.changeCurrentColor(item)),
});

export default connect(null, mapDispatchToProps)(HexMenu);
