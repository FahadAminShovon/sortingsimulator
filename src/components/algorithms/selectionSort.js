export const selectionSortAnimations = (arr) => {
    const animations = []
    const swap = []
    for (let i = 0; i < arr.length - 1; i++){
        let minIndex = i;
        let oldMinIndex = i;
        for(let j = i+1; j < arr.length; j++){
            let obj = {
                start: i,
                minIndex,
                oldMinIndex,
                iter: j
            }
            animations.push(obj)
            if(arr[j] <= arr[minIndex]){
                oldMinIndex = minIndex;
                minIndex = j;
            }
            obj = {
                start: i,
                minIndex,
                oldMinIndex,
                iter: j,
            }
            animations.push(obj)
        }
        const obj = {
            start:i,
            minIndex: minIndex,
            startVal: arr[i],
            minVal: arr[minIndex],
        }
        arr[i] = arr[minIndex];
        arr[minIndex] = obj.startVal;
        animations.push(obj)
        console.log(animations.length);
    }

    return {animations,swap};
}