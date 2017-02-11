import {
    RESET_GAME,
    SET_TITLE
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
    default:
        return state;
    }
};

export default reducer;
