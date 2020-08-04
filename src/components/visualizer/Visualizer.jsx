import React, { useState, useEffect } from 'react';
import './Visualizer.css'
import { selectionSortAnimations } from '../algorithms/selectionSort';

let ANIMATION_SPEED_MS = 30;
let NUM_OF_BARS = 50;
let MAXX = 72;


const Visualizer = () => {
    const [arr, setArr] = useState([]);
    const [buttonDisable, setButtonDisable] = useState(false);
    
    const randomNumberGenerator = (minn, maxx) => {
        return Math.floor(Math.random() * (maxx - minn) + minn);
    }
    const resetArray = () => {
        const arr = [];
        for(let i = 0; i < NUM_OF_BARS; i++){
            arr.push(randomNumberGenerator(1, MAXX))
        }
        setArr(arr);

        const elements = document.getElementsByClassName("array-item");
        for(let i = 0; i < elements.length ; i++){
            elements[i].style.backgroundColor = '#5fa8d3'
        }

    }

    const selectionSort = async () => {
        await setButtonDisable(true)

        const elements = document.getElementsByClassName("array-item");
        const {animations} = selectionSortAnimations(arr)

        let counter = arr.length - 1;
        let incr = counter ;

        for(let i = 0; i < animations.length ; i++){

            if(i === counter){
                const {start: startIndex, minIndex, startVal, minVal} = animations[i];
                setTimeout(() => {
                    elements[startIndex].style.height = `${minVal}vh`
                    elements[startIndex].style.backgroundColor = `#70c1b3`
                    elements[minIndex].style.height = `${startVal}vh`
                    if(minIndex !== startIndex )elements[minIndex].style.backgroundColor = "#5fa8d3"
                    if(startIndex === arr.length-2 ){
                        elements[arr.length -1].style.backgroundColor = "#70c1b3"
                        setButtonDisable(false)
                    }

                }, i* ANIMATION_SPEED_MS)
                counter+= incr;
                incr-=1
            }
            else {
                const {start, minIndex,iter, oldMinIndex} = animations[i];
                setTimeout(()=>{
                    if(start === iter-1)elements[arr.length-1].style.backgroundColor = "#5fa8d3";
                    elements[start].style.backgroundColor = "#eb5e28";
                    elements[iter].style.backgroundColor = "#f25f5c";
                    if(iter!==0)elements[iter - 1].style.backgroundColor = "#5fa8d3";
                    if(oldMinIndex!==start)elements[oldMinIndex].style.backgroundColor = "#5fa8d3";
                    elements[minIndex].style.backgroundColor = "#f4d35e";

                }, i * ANIMATION_SPEED_MS)
            }

        }
    }
    console.log(window.innerWidth)
    useEffect(() => {
        resetArray();
        console.log(window.innerWidth)
    },[])

    return ( 
        <div className="">
        <div className="buttons">
            <button disabled = {buttonDisable} className="btn reset-btn" onClick={resetArray}>Reset</button>
            <div className="mr-auto"></div>
            <div className="btn-group">
                <button disabled = {buttonDisable} type="button" 
                onClick = {selectionSort} className="btn sort-btn">Selection Sort</button>
            </div>
        </div>


            <div className="array-container">
                {arr.map((value, idx) => 
                <div key={idx} className="array-item" 
                style={{
                    height: `${value}vh`, 
                    color:`#5fa8d3` ,
                    }}>
                </div>)}
            </div>
        </div>
    );
}

export default Visualizer;