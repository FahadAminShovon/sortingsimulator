import React, { useState }  from 'react'
import PropTypes from 'prop-types';
import { selectionSortAnimate } from '../algorithms';
import { resetArray } from '../util';


function ButtonGroup({arr, setArr}) {
	const [buttonDisable, setButtonDisable] = useState(false);

	return (
		<div className='buttons'>
		<button
			disabled={buttonDisable}
			className='btn reset-btn'
			onClick={() =>resetArray(setArr)}
		>
			Reset
		</button>
		<div className='mr-auto'></div>
		<div className='btn-group'>
			<button
				disabled={buttonDisable}
				type='button'
				onClick={() => selectionSortAnimate(arr, setButtonDisable)}
				className='btn sort-btn'
			>
				Selection Sort
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
