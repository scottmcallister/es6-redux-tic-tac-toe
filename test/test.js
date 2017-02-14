/* eslint-disable no-undef */
import assert from 'assert';
import reducer from '../js/reducer';

describe('Test reducer', () => {
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
});
