// import * as actions from './actions';

class Game {
    constructor(options) {
        this.ui = options.ui;
        this.store = options.store;
        this.store.subscribe(this.update.bind(this));
    }

    renderTitle(state) {
        this.ui
            .querySelector('.title')
            .innerHTML = state.title;
    }

    update() {
        /* eslint-disable */
        const state = this.store.getState();
        console.log(state);
        this.renderTitle(state);
    }

    render() {
        this.update();
    }
}

export default Game;
