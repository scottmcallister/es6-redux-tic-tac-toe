import * as actions from './actions';

// all possible winning coordinates for each box in the grid
const winConditions = [
    [
        [[0,0],[0,1],[0,2]],
        [[0,0],[1,1],[2,2]],
        [[0,0],[1,0],[2,0]]
    ],
    [
        [[0,0],[0,1],[0,2]],
        [[0,1],[1,1],[2,1]]
    ],
    [
        [[0,0],[0,1],[0,2]],
        [[2,0],[1,1],[0,2]],
        [[2,2],[1,2],[0,2]]
    ],
    [
        [[0,0],[1,0],[2,0]],
        [[1,0],[1,1],[1,2]]
    ],
    [
        [[0,0],[1,1],[2,2]],
        [[1,0],[1,1],[1,2]],
        [[0,1],[1,1],[2,1]],
        [[2,0],[1,1],[0,2]]
    ],
    [
        [[0,2],[1,2],[2,2]],
        [[1,0],[1,1],[1,2]]
    ],
    [
        [[2,2],[2,1],[2,0]],
        [[0,2],[1,1],[2,0]],
        [[0,0],[1,0],[2,0]]
    ],
    [
        [[0,1],[1,1],[2,1]],
        [[2,0],[2,1],[2,2]]
    ],
    [
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,2],[2,2]]
    ]
];

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
        const boxes = this.ui.querySelectorAll('td button');
        boxes.forEach((box, index) => {
            const row = Math.floor(index/3);
            const col = index % 3;
            box.addEventListener('click',
                this.makeMove.bind(this, row, col)
            );
        });
    }

    renderTitle(state) {
        this.ui
            .querySelector('.title')
            .innerHTML = state.title;
    }

    renderGrid(state) {
        const { grid } = state;
        const boxes = this.ui.querySelectorAll('td button');
        boxes.forEach((box, index) => {
            const value = grid[Math.floor(index/3)][index % 3];
            box.innerHTML = value;
        });
    }

    isWinner(row, col, player) {
        const state = this.store.getState();
        let gameOver = false;
        const boxIndex = row * 3 + col;
        winConditions[boxIndex].map((wc) => {

            // check if win condition coordinates match player
            if (state.grid[wc[0][0]][wc[0][1]] === player &&
                state.grid[wc[1][0]][wc[1][1]] === player &&
                state.grid[wc[2][0]][wc[2][1]] === player) {
                gameOver = true;
            }

        });
        return gameOver;
    }

    makeMove(row, col) {
        const player = this.store.getState().xTurn ? 'X' : 'O';
        if(this.store.getState().gameOver) { return; }
        this.store.dispatch(actions.move(row, col, player));
        if(this.isWinner(row, col, player)) {
            this.store.dispatch(actions.endGame(player));
        }
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
