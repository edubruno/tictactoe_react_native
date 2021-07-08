const isRowFilled = (row, board) => {
  console.log('xxx' + board.length)

  if (board.length == 5) {
    // console.log('xxx' + board)
    return (
      board[row][0] !== 0 &&
      board[row][0] === board[row][1] &&
      board[row][1] === board[row][2] &&
      board[row][2] === board[row][3] &&
      board[row][3] === board[row][4]
    )
  }
  return (
    board[row][0] !== 0 &&
    board[row][0] === board[row][1] &&
    board[row][1] === board[row][2]
  )
}

const isColumnFilled = (column, board) => {
  if (board.length == 5) {
    return (
      board[0][column] !== 0 &&
      board[0][column] === board[1][column] &&
      board[1][column] === board[2][column] &&
      board[2][column] === board[3][column] &&
      board[3][column] === board[4][column]
    )
  }
  return (
    board[0][column] !== 0 &&
    board[0][column] === board[1][column] &&
    board[1][column] === board[2][column]
  )
}

const isDiagonalFilled = (diagonal, board) => {
  if (board.length == 5) {
    if (diagonal === 1) {
      return (
        board[0][0] !== 0 &&
        board[0][0] === board[1][1] &&
        board[1][1] === board[2][2] &&
        board[2][2] === board[3][3] &&
        board[3][3] === board[4][4]
      )
    } else {
      return (
        board[2][0] !== 0 &&
        board[4][0] === board[3][1] &&
        board[3][1] === board[2][2] &&
        board[2][2] === board[1][3] &&
        board[1][3] === board[0][4]
      )
    }
  }

  if (diagonal === 1) {
    return (
      board[0][0] !== 0 &&
      board[0][0] === board[1][1] &&
      board[1][1] === board[2][2]
    )
  } else {
    return (
      board[2][0] !== 0 &&
      board[2][0] === board[1][1] &&
      board[1][1] === board[0][2]
    )
  }
}

export const getTheWinner = board => {
  if (isRowFilled(0, board)) {
    return {
      label: board[0][0],
      row: 0
    }
  }
  if (isRowFilled(1, board)) {
    return {
      label: board[1][0],
      row: 1
    }
  }
  if (isRowFilled(2, board)) {
    return {
      label: board[2][0],
      row: 2
    }
  }

  if (board.length == 5) {
    if (isRowFilled(3, board)) {
      return {
        label: board[3][0],
        row: 3
      }
    }

    if (isRowFilled(4, board)) {
      return {
        label: board[4][0],
        row: 4
      }
    }

    if (isColumnFilled(3, board)) {
      return {
        label: board[0][3],
        column: 3
      }
    }
    if (isColumnFilled(4, board)) {
      return {
        label: board[0][4],
        column: 4
      }
    }
  }

  if (isColumnFilled(0, board)) {
    return {
      label: board[0][0],
      column: 0
    }
  }
  if (isColumnFilled(1, board)) {
    return {
      label: board[0][1],
      column: 1
    }
  }
  if (isColumnFilled(2, board)) {
    return {
      label: board[0][2],
      column: 2
    }
  }

  if (isDiagonalFilled(1, board)) {
    return {
      label: board[0][0],
      diagonal: 1
    }
  }
  if (isDiagonalFilled(2, board)) {
    if (board.length == 5) {
      return {
        label: board[4][0],
        diagonal: 2
      }
    }
    return {
      label: board[2][0],
      diagonal: 2
    }
  }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        return -1
      }
    }
  }
  return 'equal'
}
