/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const rw = Array.from({ length: 9 }, () => new Set());
    const cl = Array.from({ length: 9 }, () => new Set());
    const boxes = Array.from({ length: 9 }, () => new Set());

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const val = board[i][j];
            if (val === ".") continue;
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            if (rw[i].has(val) || cl[j].has(val) || boxes[boxIndex].has(val)) {
                return false;
            }
            rw[i].add(val);
            cl[j].add(val);
            boxes[boxIndex].add(val);
        }
    }
    return true;
};