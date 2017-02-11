export const RESET_GAME = 'RESET_GAME';
export const SET_TITLE = 'SET_TITLE';

export const setTitle = (newTitle) => {
    return {
        type: SET_TITLE,
        title: newTitle
    };
};

export const resetGame = () => {
    return {
        type: RESET_GAME
    };
};
