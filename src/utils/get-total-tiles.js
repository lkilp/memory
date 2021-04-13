const getTotalTiles = (difficulty) => {
    if (difficulty === 'easy') {
        return 8;
    } else if (difficulty === 'medium') {
        return 16;
    } else {
        return 24;
    }
}

export default getTotalTiles;