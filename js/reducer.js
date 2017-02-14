import {
    RESET_GAME,
    SET_TITLE,
    SET_GRID,
    MAKE_MOVE,
    END_GAME
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
    title: 'O Turn'
};

// reducer
const reducer = (state=initialState, action) => {
    switch(action.type) {
    case RESET_GAME:
        return Object.assign({}, state, {
            grid: [
                ['','',''],
                ['','',''],
                ['','','']
            ],
            gameOver: false,
            winner: '',
            title: `${state.xTurn ? 'X' : 'O'} Turn`
        });
    case SET_TITLE:
        return Object.assign({}, state, {
            title: action.title
        });
    case SET_GRID:
        return Object.assign({}, state, {
            grid: action.grid
        });
    case MAKE_MOVE: {
        const box = state.grid[action.row][action.col];
        const nextTurnIsX = (state.xTurn && box !== '')
            || (!state.xTurn && box === '');
        let newGrid = state.grid;
        newGrid[action.row][action.col] = box === '' ?
            action.player : box;
        return Object.assign({}, state, {
            xTurn: nextTurnIsX,
            grid: newGrid,
            title: `${nextTurnIsX ? 'X' : 'O'} Turn`
        });
    }
    case END_GAME: {
        const newTitle = action.winner === 'tie' ?
            'Tie Game!' : `Player ${action.winner} Wins!`;
        return Object.assign({}, state, {
            winner: action.winner,
            gameOver: true,
            title: newTitle
        });
    }
    default:
        return state;
    }
};

export default reducer;
