// import * as actions from './actions';

class Game {
    constructor(options) {
        this.ui = options.ui;
        this.store = options.store;
        this.store.subscribe(this.update.bind(this));
    }

    update() {
        /* eslint-disable */
        console.log(this.store.getState());
    }

    render() {
        this.update();
    }
}

export default Game;
