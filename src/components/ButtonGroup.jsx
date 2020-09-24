import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import { selectionSortAnimate, bubbleSortAnimate } from '../algorithms';
import { resetArray } from '../util';


function ButtonGroup({arr, setArr}) {
	const [buttonDisable, setButtonDisable] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	return (
		<div className='buttons'>
		<button
			disabled={buttonDisable}
			className='btn reset-btn'
			onClick={() =>resetArray(setArr, setIsSorted)}
		>
			Reset
		</button>
		<div className='mr-auto'></div>
		<div className='btn-group'>
			<button
				disabled={buttonDisable || isSorted}
				type='button'
				onClick={() => selectionSortAnimate(arr, setButtonDisable, setIsSorted)}
				className='btn sort-btn'
			>
				Selection Sort
			</button>

			<button
				disabled={buttonDisable || isSorted}
				type='button'
				onClick={() => bubbleSortAnimate(arr, setButtonDisable, setIsSorted)}
				className='btn sort-btn'
			>
				Bubble Sort
			</button>
		</div>
	</div>
	)
}

ButtonGroup.propTypes = {
	arr : PropTypes.array.isRequired,
	setArr: PropTypes.func.isRequired
}

export default ButtonGroup
