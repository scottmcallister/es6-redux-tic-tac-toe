import { createStore } from 'redux';
import reducer from './reducer';
import Game from './game';

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

document.addEventListener('DOMContentLoaded', () => {
    const game = new Game({
        ui: document.querySelector('#game'),
        store: store
    });
    game.render();
});
