/* eslint-disable no-param-reassign */

import {
    UNSORTED_COLOR,
    SORTED_COLOR,
    START_COLOR,
    SELECTED_COLOR,
    ITERATE_COLOR,
} from '../consts/colors';

import {
    ANIMATION_SPEED_MS
} from '../consts/animation';


const selectionSort = (arr) => {
    const animations = []
    const swap = []
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        let oldMinIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] <= arr[minIndex]) {
                oldMinIndex = minIndex;
                minIndex = j;
            }
            const obj = {
                start: i,
                minIndex,
                oldMinIndex,
                iter: j,
            }
            animations.push(obj)
        }
        const obj = {
            start: i,
            minIndex,
            startVal: arr[i],
            minVal: arr[minIndex],
        }
        arr[i] = arr[minIndex];
        arr[minIndex] = obj.startVal;
        animations.push(obj)
    }

    return {
        animations,
        swap
    };
}


export const selectionSortAnimate = async (arr, setButtonDisable) => {
    await setButtonDisable(true);

    const elements = document.getElementsByClassName('array-item');
    const {
        animations
    } = selectionSort(arr);

    let counter = arr.length - 1;
    let incr = counter;

    for (let i = 0; i < animations.length; i++) {
        if (i === counter) {
            const {
                start: startIndex,
                minIndex,
                startVal,
                minVal,
            } = animations[i];
            setTimeout(() => {
                elements[startIndex].style.height = `${minVal}vh`;
                elements[startIndex].style.backgroundColor = SORTED_COLOR;
                elements[minIndex].style.height = `${startVal}vh`;
                if (minIndex !== startIndex)
                    elements[
                        minIndex
                    ].style.backgroundColor = UNSORTED_COLOR;
                if (startIndex === arr.length - 2) {
                    elements[
                        arr.length - 1
                    ].style.backgroundColor = SORTED_COLOR;
                    setButtonDisable(false);
                }
            }, i * ANIMATION_SPEED_MS);
            counter += incr;
            incr -= 1;
        } else {
            const {
                start,
                minIndex,
                iter,
                oldMinIndex
            } = animations[i];
            setTimeout(() => {
                if (start === iter - 1)
                    elements[
                        arr.length - 1
                    ].style.backgroundColor = UNSORTED_COLOR;
                elements[start].style.backgroundColor = START_COLOR;
                elements[iter].style.backgroundColor = ITERATE_COLOR;
                if (iter !== 0)
                    elements[
                        iter - 1
                    ].style.backgroundColor = UNSORTED_COLOR;
                if (oldMinIndex !== start)
                    elements[
                        oldMinIndex
                    ].style.backgroundColor = UNSORTED_COLOR;
                elements[minIndex].style.backgroundColor = SELECTED_COLOR;
            }, i * ANIMATION_SPEED_MS);
        }
    }
};
