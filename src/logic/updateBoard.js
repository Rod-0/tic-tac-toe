import { TURNS } from '../constants/constants'
import confetti from 'canvas-confetti'
import { checkWinner } from './board'
import { saveGameToStorage } from './storage'

export const updateBoard = (board, setBoard, turn, setTurn, winner, setWinner, index) => {

    if (winner || board[index] !== null) {
        return;
    }

    const newBoard = [...board]
    if (newBoard[index] !== null) {
        return
    }
    newBoard[index] = turn
    const newTurn = turn === TURNS.x ? TURNS.o : TURNS.x
    setBoard(newBoard)
    setTurn(newTurn)
    //save game
    saveGameToStorage({ newBoard: newBoard, turn: newTurn })



    const currentWinner = checkWinner(newBoard)
    if (currentWinner) {

        confetti()
        console.log(currentWinner)
        setWinner(currentWinner)
    }
}