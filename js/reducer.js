import {
    RESET_GAME,
    SET_TITLE,
    SET_GRID
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
    default:
        return state;
    }
};

export default reducer;
