export const RESET_GAME = 'RESET_GAME';
export const SET_TITLE = 'SET_TITLE';
export const SET_GRID = 'SET_GRID';

/**
 * resetGame - load the initial game state
 */
export const resetGame = () => {
    return {
        type: RESET_GAME
    };
};

/**
 * setTitle - set new game info above game grid
 * @param {String} newTitle
 */
export const setTitle = (newTitle) => {
    return {
        type: SET_TITLE,
        title: newTitle
    };
};

/**
 * setGrid - update the contents of the game grid
 * @param {Array} newGrid - a 2 dimensional 3x3 array
 */
export const setGrid = (newGrid) => {
    return {
        type: SET_GRID,
        title: newGrid
    };
};
