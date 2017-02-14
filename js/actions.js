export const RESET_GAME = 'RESET_GAME';
export const SET_TITLE = 'SET_TITLE';
export const SET_GRID = 'SET_GRID';
export const MAKE_MOVE = 'MAKE_MOVE';
export const END_GAME = 'END_GAME';

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

/**
 * move - performs a move on behalf of the current player
 * @param  {Number} xIndex - grid index on x axis
 * @param  {Number} yIndex - grid index on y axis
 * @param  {String} player - player letter ('X' or 'O')
 * @return {Object}
 */
export const move = (row, col, player) => {
    return {
        type: MAKE_MOVE,
        row,
        col,
        player
    };
};

export const endGame = (winner) => {
    return {
        type: END_GAME,
        winner
    };
};
