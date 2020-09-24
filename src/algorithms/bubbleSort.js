/* eslint-disable no-param-reassign */

import {
	UNSORTED_COLOR,
	START_COLOR,
	SELECTED_COLOR,
	ITERATE_COLOR,
	SORTED_COLOR,
} from '../consts/colors';

import { ANIMATION_SPEED_MS } from '../consts/animation';
import { sortPaint } from '../util';

const bubbleSort = (arr) => {
	const animations = [];
	for (let i = 0; i < arr.length - 1; i++) {
		let sorted = true;
		for (let j = 0; j < arr.length - 1 - i; j++) {
			const startIdx = j;
			const endIdx = j + 1;

			const obj = {
				startIdx,
				endIdx,
				start: arr[startIdx],
				end: arr[endIdx],
			};

			animations.push({ ...obj }, { ...obj });

			if (arr[endIdx] < arr[startIdx]) {
				animations[animations.length - 1].swap = true;
				const temp = arr[endIdx];
				arr[endIdx] = arr[startIdx];
				arr[startIdx] = temp;
				sorted = false;
			}

			animations.push({
				...obj,
				start: arr[startIdx],
				end: arr[endIdx],
			});
		}

		if (sorted) break;
	}

	return animations;
};

export const bubbleSortAnimate = async (arr, setButtonDisable, setIsSorted) => {
	await setButtonDisable(true);
	await setIsSorted(true);

	const elements = document.getElementsByClassName('array-item');
	const animations = bubbleSort(arr);

	for (let i = 0; i < animations.length; i++) {
		const { startIdx, endIdx, start, end } = animations[i];
		if (i % 3 === 0) {
			setTimeout(() => {
				elements[startIdx].style.backgroundColor = START_COLOR;
				elements[endIdx].style.backgroundColor = ITERATE_COLOR;
				if (startIdx === 0 && i !== 0)
					elements[
						animations[i - 1].endIdx
					].style.backgroundColor = SORTED_COLOR;
			}, i * ANIMATION_SPEED_MS);
		} else if (animations[i].swap) {
			setTimeout(() => {
				elements[endIdx].style.backgroundColor = SELECTED_COLOR;
			}, i * ANIMATION_SPEED_MS);
		} else {
			setTimeout(() => {
				elements[startIdx].style.height = `${start}vh`;
				elements[endIdx].style.height = `${end}vh`;
				elements[startIdx].style.backgroundColor = UNSORTED_COLOR;
				elements[endIdx].style.backgroundColor = START_COLOR;
			}, i * ANIMATION_SPEED_MS);
		}
	}
	sortPaint(animations, setButtonDisable);
};
