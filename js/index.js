import {createStore} from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

/* eslint-disable */
console.log(store.getState());
