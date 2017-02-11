import {createStore} from 'redux';
import reducer from './reducer';

document.querySelector('#target').innerHTML = 'hello';

const store = createStore(reducer);

/* eslint-disable */
console.log(store.getState());
