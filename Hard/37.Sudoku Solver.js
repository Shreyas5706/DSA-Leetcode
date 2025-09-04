/**
 * @param {character[][]} board
 * @return {void} Modifies the board in-place
 */
var solveSudoku = function(grid) {
    const boxSize = 3;
    const dimension = boxSize * boxSize;

    // Track numbers placed in rows, columns and boxes
    const rowCheck = Array.from({ length: dimension }, () => Array(dimension + 1).fill(0));
    const colCheck = Array.from({ length: dimension }, () => Array(dimension + 1).fill(0));
    const boxCheck = Array.from({ length: dimension }, () => Array(dimension + 1).fill(0));

    let solved = false;

    // Helper to find box index by row, col
    function getBoxIndex(r, c) {
        return Math.floor(r / boxSize) * boxSize + Math.floor(c / boxSize);
    }

    // Can we put num at given row and col?
    function isSafe(num, r, c) {
        const boxIdx = getBoxIndex(r, c);
        return rowCheck[r][num] + colCheck[c][num] + boxCheck[boxIdx][num] === 0;
    }

    // Place number on the sudoku board and track it
    function putNumber(num, r, c) {
        const boxIdx = getBoxIndex(r, c);
        rowCheck[r][num]++;
        colCheck[c][num]++;
        boxCheck[boxIdx][num]++;
        grid[r][c] = num.toString();
    }

    // Remove number and update tracking (backtracking step)
    function removeNumber(num, r, c) {
        const boxIdx = getBoxIndex(r, c);
        rowCheck[r][num]--;
        colCheck[c][num]--;
        boxCheck[boxIdx][num]--;
        grid[r][c] = '.';
    }

    // Move to next cell or mark solution found
    function nextCell(r, c) {
        if (r === dimension - 1 && c === dimension - 1) {
            solved = true;
        } else if (c === dimension - 1) {
            backtrack(r + 1, 0);
        } else {
            backtrack(r, c + 1);
        }
    }

    
    function backtrack(r, c) {
        if (grid[r][c] === '.') {
            for (let num = 1; num <= 9; num++) {
                if (isSafe(num, r, c)) {
                    putNumber(num, r, c);
                    nextCell(r, c);
                    if (!solved) removeNumber(num, r, c);
                }
            }
        } else {
            nextCell(r, c);
        }
    }

    // Initialize tracking arrays based on the starting board
    for (let r = 0; r < dimension; r++) {
        for (let c = 0; c < dimension; c++) {
            if (grid[r][c] !== '.') {
                putNumber(Number(grid[r][c]), r, c);
            }
        }
    }

    backtrack(0, 0);
};
