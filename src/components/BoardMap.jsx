import { Square } from './Square.jsx'
export function BoardMap({ board, updateBoard }) {
    return (
        board.map((square, index) => {
            return (
                <Square key={index} index={index} updateBoard={updateBoard} >
                    {square}
                </Square>
            )


        })
    )
}