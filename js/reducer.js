import {
    RESET_GAME,
    SET_TITLE,
    SET_GRID,
    MAKE_MOVE
} from './actions';

const initialState = {
    xTurn: false,
    grid: [
        ['','',''],
        ['','',''],
        ['','','']
    ],
    gameOver: false,
    winner: '',
    title: 'Test'
};

// reducer
const reducer = (state=initialState, action) => {
    switch(action.type) {
    case RESET_GAME:
        return initialState;
    case SET_TITLE:
        return Object.assign({}, state, {
            title: action.title
        });
    case SET_GRID:
        return Object.assign({}, state, {
            grid: action.grid
        });
    case MAKE_MOVE: {
        const box = state.grid[action.xIndex][action.yIndex];
        const nextTurnIsX = (state.xTurn && box !== '')
            || (!state.xTurn && box === '');
        let newGrid = state.grid;
        newGrid[action.xIndex][action.yIndex] = box === '' ?
            action.player : box;
        return Object.assign({}, state, {
            xTurn: nextTurnIsX,
            grid: newGrid
        });
    }
    default:
        return state;
    }
};

export default reducer;
