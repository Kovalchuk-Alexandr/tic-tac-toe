import { useState } from "react";
// import Square from "./components/Square";
// import './css/App.css'

function Square({ value, onSquareClick, winnerClass }) {
    // const  [ value, setValue ] = useState(null);

    // function handleClick() {
    // setValue('X');
    // 	console.log("clicked value: ", value);
    // }

    return (
        <button className={`square ${winnerClass}`} onClick={onSquareClick}>
            {value}
        </button>
    );
};


function Board({ xIsNext, squares, onPlay }) {
    // const [squares, setSquares] = useState(Array(9).fill(null));
    // const [xIsNext, setXIsNext] = useState(true);
    const [winner, winnerSquares] = calculateWinner(squares);

    function handleClick(i) {
        // Если поле уже заполнено или есть победитель, выходим
        if (squares[i] || winner) {
            return;
        }

        // Делаем ход, если поле пустое
        const nextSquares = squares.slice();

        if (xIsNext) {
            nextSquares[i] = "X";
        } else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
        // setSquares(nextSquares);
        // setXIsNext(!xIsNext);
    }

    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <>
            <h4 className="status">{status}</h4>
            <div className="board-wrapper">
                {squares.map((square, index) => {
                    const winnerClass = winnerSquares.includes(index)
                        ? "accent"
                        : "";
                    return (
                        <Square
                            winnerClass={winnerClass}
                            value={square}
                            onSquareClick={() => handleClick(index)}
                            key={index}
                        />
                    );
                })}
            </div>
        </>
    );
}

function PreviewBoard({ squares }) {
    const [, winnerSquares] = calculateWinner(squares);
    return (
        <div className="board-wrapper preview-board">
            {squares.map((square, index) => {
                return (
                    <Square
                        winnerClass={
                            winnerSquares.includes(index) ? "accent" : ""
                        }
                        value={square}
                        onSquareClick={() => {}}
                        key={index}
                    />
                );
            })}
        </div>
    );
}

function Game() {
	const [history, setHistory] = useState([Array(9).fill(null)]);
	const [currentMove, setCurrentMove] = useState(0);
	// const [xIsNext, setXIsNext] = useState(true);
	const xIsNext = currentMove % 2 === 0;
	const currentSquares = history[currentMove];
	const [hoveredMove, setHoveredMove] = useState(null);

	function handlePlay (nextSquares) {
		const nextHistory = ([...history.slice(0, currentMove + 1), nextSquares]);
		setHistory(nextHistory);
		setCurrentMove(nextHistory.length - 1);
		// setXIsNext(!xIsNext);
	}

	function jumpTo (nextMove) {
		setCurrentMove(nextMove);
		// setXIsNext(nextMove % 2 === 0);
	}

	const moves = history.map((squares, move) => {
		let description;
		if (move > 0) {
			description = 'Go to move #' + move;
		} else {
			description = 'Go to game start';
		}

		return (
            <li key={move}>
                <button
                    className="button-inset"
                    onClick={() => jumpTo(move)}
                    onMouseEnter={() => setHoveredMove(move)}
                    onMouseLeave={() => setHoveredMove(null)}
                >
                    {description}
                </button>
            </li>
        );
	})

	return (
        <div className="game">
            <div className="game-board">
                <Board
                    xIsNext={xIsNext}
                    squares={currentSquares}
                    onPlay={handlePlay}
                />
            </div>
            <div className="game-info">
                <ol className="game-info-list">{moves}</ol>
            </div>
            <div className="game-preview">
                {hoveredMove !== null && (
                    <>
                        <p className="status">Ход {hoveredMove}</p>
                        <PreviewBoard squares={history[hoveredMove]} />
                    </>
                )}
            </div>
        </div>
    );
}

function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            // console.log("Winner Lines: ", lines[i]);
            return [squares[a], lines[i]];
        }
	}
	return [null, []];
}

export default Game;
