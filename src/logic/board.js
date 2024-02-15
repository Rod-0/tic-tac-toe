import { lines } from '../constants/constants';
export const checkWinner = (newBoard) => {


    for (let line of lines) {
        const [a, b, c] = line;
        if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return newBoard[a]; // Retorna el ganador
        }
    }

    if (newBoard.every(square => square !== null)) {

        return 'draw'; // Retorna empate si todas las casillas están llenas

    }

    return null; // Retorna null si no hay ganador ni empate
}