/**
 * @param {number[][]} grid
 * @return {number[][]}
 */
var sortMatrix = function(grid) {
  const n = grid.length;
  const diagonals = new Map();

  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const d = j - i;
      if (!diagonals.has(d)) diagonals.set(d, []);
      diagonals.get(d).push(grid[i][j]);
    }
  }

  for (let [d, arr] of diagonals) {
    if (d <= 0) {
      
      arr.sort((a, b) => b - a);
    } else {
      
      arr.sort((a, b) => a - b);
    }
  }

  
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const d = j - i;
      grid[i][j] = diagonals.get(d).shift();
    }
  }

  return grid;

};