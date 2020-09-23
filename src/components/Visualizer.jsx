import React, { useState, useEffect } from 'react';
import './Visualizer.css';
import PropTypes from 'prop-types';

import {
	UNSORTED_COLOR,
} from '../consts/colors';
import { resetArray } from '../util';
import ButtonGroup from './ButtonGroup';

function Bars({arr}) {
	return (
		<div className='array-container'>
		{arr.map((value, idx) => (
			<div
				key={idx}
				className='array-item'
				style={{
					height: `${value}vh`,
					color: UNSORTED_COLOR,
				}}
			></div>
		))}
	</div>
	)
}

Bars.propTypes = {
	arr : PropTypes.array.isRequired
}

const Visualizer = () => {
	const [arr, setArr] = useState([]);

	useEffect(() => {resetArray(setArr)}, []);

	return (
		<div className='' style={{display:'flex'}}>
			<ButtonGroup arr={arr} setArr={setArr}/>
			<Bars arr={arr}/>
		</div>
	);
};

export default Visualizer;
