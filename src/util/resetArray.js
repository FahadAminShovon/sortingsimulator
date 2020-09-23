import { NUM_OF_BARS, UNSORTED_COLOR, MAXX } from "../consts";


const randomNumberGenerator = (minn, maxx) => {
	return Math.random() * (maxx - minn) + minn;
};

export const resetArray = (setArr) => {
	const arr = [];
	for (let i = 0; i < NUM_OF_BARS; i++) {
		arr.push(randomNumberGenerator(1, MAXX));
	}
	setArr(arr);

	const elements = document.getElementsByClassName('array-item');
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = UNSORTED_COLOR;
	}
};
