import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ColorReducer from './colorsReducer';

const store = createStore(
  ColorReducer,
  composeWithDevTools(),
);

export default store;
