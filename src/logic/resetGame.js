import { TURNS } from "../constants/constants"
import { resetGameStorage } from "./storage"
export const resetGame = (setBoard, setTurn, setWinner) => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.x)
    setWinner(null)
    resetGameStorage()
}