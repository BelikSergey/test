import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ColorReducer from './colorsReducer';
// import {
//   currentColorReducer,
//   REDReducer,
//   GREENReducer,
//   BLUEReducer,
// // } from './colorsReducer';

// const initialState = {
//   currentColor: '',
//   RED: 0,
//   GREEN: 0,
//   BLUE: 0,
// };

// const rootReducer = combineReducers({
//   color: ColorReducer,
// });

// const reducer = (
//   state = initialState,
//   { type, payload },
// ) => {
//   switch (type) {
//     case 'CHANGE_CURRENT_COLOR':
//       return { payload };
//     case 'CHANGE_RED':
//       console.log('1111');
//       return {
//         RED: payload,
//       };
//     case 'CHANGE_GREEN':
//       return {
//         GREEN: payload,
//       };
//     case 'CHANGE_BLUE':
//       return {
//         BLUE: payload,
//       };

//     default:
//       return state;
//   }
// };

const store = createStore(
  ColorReducer,
  composeWithDevTools(),
);

export default store;

// import { configureStore } from '@reduxjs/toolkit';
// import contactsReducer from './contacts/contacts-reducer';

// const store = configureStore({
//   reducer: {
//     contacts: contactsReducer,
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// // eslint-disable-next-line import/no-anonymous-default-export
// export default { store };
