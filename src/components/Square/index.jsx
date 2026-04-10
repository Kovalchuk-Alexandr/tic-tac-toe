import { useState } from 'react';
import './style.css'

const Square = ({ value, onSquareClick }) => {
	// const  [ value, setValue ] = useState(null);

	function handleClick() {
		// setValue('X');
		console.log('clicked value: ', value);

	}

	return (
		// <button className="square" onClick={()=>handleClick({value})}>{ value }</button>
		<button className="square" onClick={onSquareClick}>{ value }</button>
	);
}

export default Square;
