import { useState, useEffect } from 'react';
import { Square } from './components/Square.jsx'
import { TURNS } from './constants/constants.js'
import { Winner } from './components/Winner.jsx'
import { BoardMap } from './components/BoardMap.jsx'
import { updateBoard } from './logic/updateBoard.js'
import { resetGame } from './logic/resetGame.js'

import './App.css'

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) :
      Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.x
  })
  const [winner, setWinner] = useState(null)

  const handleUpdateBoard = (index) => {
    updateBoard(board, setBoard, turn, setTurn, winner, setWinner, index)
  }
  useEffect(() => {
    console.log('useEffect')
  }, [turn, board]) //ejecuta cada vez que cambia el parametro entre corchetes

  //reset game
  const handleResetGame = () => {
    resetGame(setBoard, setTurn, setWinner)
  }



  return (
    <main className='board'>

      <h1>Tic Tac Toe</h1>

      <section className='game'>
        <BoardMap board={board} updateBoard={handleUpdateBoard} />
      </section>

      <section className='turn'>

        <Square isSelected={turn === TURNS.x}>{TURNS.x}</Square>
        <Square isSelected={turn === TURNS.o}>{TURNS.o}</Square>
      </section>

      <Winner winner={winner} resetGame={handleResetGame} />
    </main>
  )
}

export default App
