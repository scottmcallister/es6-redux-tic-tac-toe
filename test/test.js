/* eslint-disable no-undef */
import { createStore } from 'redux';
import jsdom from 'mocha-jsdom';
import assert from 'assert';
import reducer from '../js/reducer';
import Game from '../js/game';

describe('Test reducer', () => {
    // default
    it('should return given state in default case', () => {
        const givenState = {
            xTurn: false,
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(givenState, {type: 'SOME_RANDOM_ACTION'});
        assert(givenState === output);
    });
    // MAKE_MOVE
    it('should switch turns after making a move', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'MAKE_MOVE',
            row: 1,
            col: 1,
            player: 'O'
        });
        assert(output.xTurn === true);
    });
    it('should add player symbol to empty square after move', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'MAKE_MOVE',
            row: 1,
            col: 1,
            player: 'O'
        });
        assert(output.grid[1][1] === 'O');
    });
    it('should not change grid when trying to take a claimed square', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','X',''],
                ['O','X',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'MAKE_MOVE',
            row: 1,
            col: 1,
            player: 'O'
        });
        assert(output.grid[1][1] === 'X');
    });
    it('should not switch moves when trying to take a claimed square', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','X',''],
                ['O','X',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'MAKE_MOVE',
            row: 1,
            col: 1,
            player: 'O'
        });
        assert(output.xTurn === false);
    });
    it('should not change title when trying to take a claimed square', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','X',''],
                ['O','X',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'MAKE_MOVE',
            row: 1,
            col: 1,
            player: 'O'
        });
        assert(output.title === 'O Turn');
    });
    it('should update title after move', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'MAKE_MOVE',
            row: 1,
            col: 1,
            player: 'O'
        });
        assert(output.title === 'X Turn');
    });
    // SET_TITLE
    it('should update title when dispatching SET_TITLE', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const testTitle = 'Some random title';
        const output = reducer(initialState, {
            type: 'SET_TITLE',
            title: testTitle
        });
        assert(output.title === testTitle);
    });
    // SET_GRID
    it('should update grid when dispatching SET_GRID', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const testGrid = [
            ['X','X','O'],
            ['O','O','X'],
            ['X','O','X']
        ];
        const output = reducer(initialState, {
            type: 'SET_GRID',
            grid: testGrid
        });
        assert(output.grid === testGrid);
    });
    // END_GAME
    it('should handle O winning', () => {
        const initialState = {
            xTurn: true,
            grid: [
                ['O','X',''],
                ['O','X',''],
                ['O','','']
            ],
            gameOver: false,
            winner: '',
            title: 'X Turn'
        };
        const output = reducer(initialState, {
            type: 'END_GAME',
            winner: 'O'
        });
        assert(output.winner === 'O');
        assert(output.gameOver === true);
        assert(output.title === 'Player O Wins!');
    });
    it('should handle X winning', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['O','X',''],
                ['O','X',''],
                ['','X','']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'END_GAME',
            winner: 'X'
        });
        assert(output.winner === 'X');
        assert(output.gameOver === true);
        assert(output.title === 'Player X Wins!');
    });
    it('should handle tie game', () => {
        const initialState = {
            xTurn: false,
            grid: [
                ['O','X','X'],
                ['X','O','O'],
                ['O','X','X']
            ],
            gameOver: false,
            winner: '',
            title: 'O Turn'
        };
        const output = reducer(initialState, {
            type: 'END_GAME',
            winner: 'tie'
        });
        assert(output.winner === 'tie');
        assert(output.gameOver === true);
        assert(output.title === 'Tie Game!');
    });
});

const gameHTML = `<div id="game">
    <h1 class="title"></h1>
    <div class="wrapper">
        <table class="grid">
            <tbody>
                <tr>
                    <td><button></button></td>
                    <td><button></button></td>
                    <td><button></button></td>
                </tr>
                <tr>
                    <td><button></button></td>
                    <td><button></button></td>
                    <td><button></button></td>
                </tr>
                <tr>
                    <td><button></button></td>
                    <td><button></button></td>
                    <td><button></button></td>
                </tr>
            </tbody>
        </table>
    </div>
    <button id="reset">Start Over</button>
</div>`;

describe('test game', () => {
    jsdom();

    const store = createStore(
        reducer
    );
    let game;
    let xTurn;

    before(() => {
        document.body.innerHTML = gameHTML;
        const options = {
            ui: document.querySelector('#game'),
            store
        };
        game = new Game(options);
        game.render();
    });

    beforeEach(() => {
        game.resetGame();

        // resetting game does not affect player order!
        xTurn = store.getState().xTurn;
    });

    it('has title', () => {
        const title = document.querySelector('.title').innerHTML;
        assert(title === `${xTurn ? 'X':'O'} Turn`);
    });

    it('should update grid after moves', () => {
        game.makeMove(0, 0);
        const topLeftBox = document.querySelector('td button').innerHTML;
        assert(topLeftBox === xTurn ? 'X':'O');
    });

    it('should update title after moves', () => {
        const expectedTitle = xTurn ? 'O Turn':'X Turn';
        game.makeMove(0, 0);
        const title = document.querySelector('.title').innerHTML;
        assert(title === expectedTitle);
    });

    it('should handle O winning', () => {
        if(xTurn) {
            game.makeMove(0, 0); // X top left
            game.makeMove(0, 1); // O top middle
            game.makeMove(1, 0); // X middle left
            game.makeMove(1, 1); // O center
            game.makeMove(2, 2); // X bottom right
            game.makeMove(2, 1); // O bottom middle
        } else {
            game.makeMove(0, 0); // O top left
            game.makeMove(0, 1); // X top middle
            game.makeMove(1, 0); // O middle left
            game.makeMove(1, 1); // X center
            game.makeMove(2, 0); // O bottom left
        }
        const title = document.querySelector('.title').innerHTML;
        assert(title === 'Player O Wins!');
    });

    it('should handle X winning', () => {
        if(xTurn) {
            game.makeMove(0, 0); // X top left
            game.makeMove(0, 1); // O top middle
            game.makeMove(1, 0); // X middle left
            game.makeMove(1, 1); // O center
            game.makeMove(2, 0); // X bottom left
        } else {
            game.makeMove(0, 0); // O top left
            game.makeMove(0, 1); // X top middle
            game.makeMove(1, 0); // O middle left
            game.makeMove(1, 1); // X center
            game.makeMove(2, 2); // O bottom right
            game.makeMove(2, 1); // X bottom middle
        }
        const title = document.querySelector('.title').innerHTML;
        assert(title === 'Player X Wins!');
    });

    it('should handle tie game', () => {
        game.makeMove(0, 0); // first player top left
        game.makeMove(0, 1); // second player top middle
        game.makeMove(1, 0); // first player middle left
        game.makeMove(1, 1); // second player center
        game.makeMove(2, 1); // first player bottom center
        game.makeMove(2, 0); // second player bottom left
        game.makeMove(0, 2); // first player top right
        game.makeMove(1, 2); // second player middle right
        game.makeMove(2, 2); // first player bottom right

        const title = document.querySelector('.title').innerHTML;
        assert(title === 'Tie Game!');
    });

    it('should not switch turns when claiming an owned square', () => {
        game.makeMove(1, 1);
        const expectedTitle = document.querySelector('.title').innerHTML;
        game.makeMove(1, 1);
        const title = document.querySelector('.title').innerHTML;
        assert(title === expectedTitle);
    });
    it('should not switch turns when resetting game', () => {
        const expectedTitle = document.querySelector('.title').innerHTML;
        game.resetGame();
        const title = document.querySelector('.title').innerHTML;
        assert(title === expectedTitle);
    });
});
