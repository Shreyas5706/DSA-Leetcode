class Solution(object):
    def luckyNumbers(self, matrix):
        """
        :type matrix: List[List[int]]
        :rtype: List[int]
        """
        for row in (matrix):
            row_min = min(row)
            col = row.index(row_min)
            is_max = True

            for r in range(len(matrix)):
                if matrix[r][col] > row_min:
                    is_max = False
                    break
            if is_max:
                return [row_min]
        return []