/* eslint-disable no-undef */
import assert from 'assert';
import reducer from '../js/reducer';

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
});
