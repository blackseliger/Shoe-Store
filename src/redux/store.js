
import { configureStore } from '@reduxjs/toolkit';



import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducer';
import epic from './epics';

const epicMiddleware = createEpicMiddleware();


const store = configureStore({
  reducer,
  middleware: [epicMiddleware]
})

epicMiddleware.run(epic);

export default store;
