import * as actions from './actions';

class Game {
    constructor(options) {
        this.ui = options.ui;
        this.store = options.store;
        this.store.subscribe(this.update.bind(this));
        this.ui
            .querySelector('#reset')
            .addEventListener('click',
                this.resetGame.bind(this)
            );
    }

    renderTitle(state) {
        this.ui
            .querySelector('.title')
            .innerHTML = state.title;
    }

    renderGrid(state) {
        const { grid } = state;
        const boxes = this.ui
                          .querySelectorAll('td');
        boxes.forEach((box, index) => {
            const value = grid[Math.floor(index/3)][index % 3];
            box.innerHTML = value;
        });
    }

    resetGame() {
        this.store.dispatch(actions.resetGame());
    }

    update() {
        /* eslint-disable */
        const state = this.store.getState();
        console.log(state);
        this.renderTitle(state);
        this.renderGrid(state);
    }

    render() {
        this.update();
    }
}

export default Game;
