import { Square } from './Square.jsx'
export function Winner({ winner, resetGame }) {
    if (winner === null) return null
    const winnerText = winner === 'draw' ? 'Empate' : `Ganador: ${winner}`
    return (
        <section className='winner'>
            <div className='text'>
                <h2>
                    {winnerText}
                </h2>
                <header className='win'>
                    {
                        winner === 'draw' ? null : <Square>{winner}</Square>
                    }
                </header>
                <footer>
                    <button onClick={resetGame}>Reiniciar</button>
                </footer>
            </div>

        </section>

    )
}