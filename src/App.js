import ColorPicker from './components/ColorPicker';
import data from './data/colors';

let value = '#FF0000';

function App() {
  const onChange = hex => {
    // приходит цвет при изменении
    // console.log(hex);
  };
  return (
    <div>
      <ColorPicker
        onChange={onChange}
        value={value}
        colors={data}
      />
    </div>
  );
}

export default App;
