/*
 You are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:

0 represents the obstacle can't be reached.
1 represents the ground can be walked through.
The place with number bigger than 1 represents a tree can be walked through, and this positive number represents the tree's height.
In one step you can walk in any of the four directions top, bottom, left and right also when standing in a point which is a tree you can decide whether or not to cut off the tree.

You are asked to cut off all the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1).

You will start from the point (0, 0) and you should output the minimum steps you need to walk to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.

You are guaranteed that no two trees have the same height and there is at least one tree needs to be cut off.

Example 1:

Input: 
[
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
Output: 6


Example 2:

Input: 
[
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
Output: -1
 
 */

/*
Python
import heapq

def function(grid):
  q = [(0,0)]
  trees = []
  steps = 0
  dirs = [(0,1), (0,-1), (1,0),(-1,0)]
  rows = len(grid)
  cols = len(grid[0])
  for row in range(rows):
    for col in range(cols):
      value = grid[row][col]
      if value > 1:
        heapq.heappush(trees, (value, row, col))
  while trees and q:
    target = trees[0]
    print(target)

    visited = set()
    step_counter = -1
    while q:
      breakFlag = False
      newQ = []
      step_counter += 1
      while q:
        cur_row, cur_col = q.pop(0)
        visited.add((cur_row, cur_col))
        # Check if target

        print(cur_row, cur_col)
        if cur_row == target[1] and cur_col == target[2]:
          heapq.heappop(trees)
          print('got target')
          grid[cur_row][cur_col] = 1
          q = [(cur_row, cur_col)]
          breakFlag = True
          break

        for dr, dc in dirs:
          nrow = cur_row + dr
          ncol = cur_col + dc

          if (0 <= nrow <rows and 
              0 <= ncol < cols and 
              (nrow, ncol) not in visited and
              grid[nrow][ncol] > 0):
            # BFS
            # Add to new queue
            newQ.append((nrow, ncol))
      
      if breakFlag:
        break
      q = newQ

    steps += step_counter

  if len(trees) > 0:
    return -1
  else:
    print(f'final answer: {steps}')
    return steps

test_case = [
 [1,2,3],
 [0,0,4],
 [7,6,5]
]
test_case2 = [
 [1,2,3],
 [0,0,0],
 [7,6,5]
]
test_case3 = [
  [4,3,5,2],
  [0,7,6,8],
  [9,0,0,0]
]
print(function(test_case))

*/
