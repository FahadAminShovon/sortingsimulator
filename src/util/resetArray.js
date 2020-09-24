import { NUM_OF_BARS, MAXX } from "../consts/animation";
import { UNSORTED_COLOR } from "../consts/colors";

// Generates unsorted array
const randomNumberGenerator = (minn, maxx) => {
	return Math.random() * (maxx - minn) + minn;
};

export const resetArray = (setArr, setIsSorted) => {
	const arr = [];
	for (let i = 0; i < NUM_OF_BARS; i++) {
		arr.push(randomNumberGenerator(1, MAXX));
	}
	setArr(arr);

	const elements = document.getElementsByClassName('array-item');
	for (let i = 0; i < elements.length; i++) {
		elements[i].style.backgroundColor = UNSORTED_COLOR;
	}

	if(setIsSorted)setIsSorted(false)
};
