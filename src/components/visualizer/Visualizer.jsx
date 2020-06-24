import React, { useState, useEffect } from 'react';
import './Visualizer.css'
import { selectionSortAnimations } from '../algorithms/selectionSort';

const ANIMATION_SPEED_MS = 10;


const Visualizer = () => {
    const [arr, setArr] = useState([]);
    const randomNumberGenerator = (minn, maxx) => {
        return Math.floor(Math.random() * (maxx - minn) + minn);
    }
    const resetArray = () => {
        const arr = [];
        for(let i = 0; i < 50; i++){
            arr.push(randomNumberGenerator(5, 800))
        }
        setArr(arr);
    }

    const selectionSort = () => {
        const elements = document.getElementsByClassName("array-item");
        const {animations} = selectionSortAnimations(arr)

        let counter = arr.length * 2 -2;
        let incr = counter -1 ;
        let toggler = 0;

        for(let i = 0; i < animations.length ; i++){

            if(i === counter){
                const {start: startIndex, minIndex, startVal, minVal} = animations[i];
                setTimeout(() => {
                    elements[startIndex].style.height = `${minVal}px`
                    elements[startIndex].style.backgroundColor = `green`
                    elements[minIndex].style.height = `${startVal}px`
                    if(minIndex !== startIndex )elements[minIndex].style.backgroundColor = "rgb(15, 117, 117)"
                    if(startIndex === arr.length-2 )elements[arr.length -1].style.backgroundColor = "green"

                }, i* ANIMATION_SPEED_MS)
                console.log("pre counter",counter)
                console.log("post incr",incr)
                counter+= incr;
                incr-=2
                console.log("post counter",counter)
                console.log("post incr",incr)
                toggler = toggler ? 0 : 1;
            }
            else {
                const {start, minIndex,iter, oldMinIndex} = animations[i];
                setTimeout(()=>{
                    if(start === iter-1)elements[arr.length-1].style.backgroundColor = "rgb(15, 117, 117)";
                    elements[start].style.backgroundColor = "black";
                    elements[iter].style.backgroundColor = "red";
                    if(iter!==0)elements[iter - 1].style.backgroundColor = "rgb(15, 117, 117)";
                    if(oldMinIndex!==start)elements[oldMinIndex].style.backgroundColor = "rgb(15, 117, 117)";
                    elements[minIndex].style.backgroundColor = "blue";

                }, i * ANIMATION_SPEED_MS)
            }

        }
    }
    
    useEffect(() => {
        resetArray();
    },[])

    return ( 
        <div className="container-fluid">
        <div className="d-flex m-5">
            <button className="btn btn-primary " onClick={resetArray}>Reset</button>
            <div className="mr-auto"></div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" onClick = {selectionSort} className="btn btn-primary">Selection Sort</button>
            </div>
        </div>


            <div className="d-flex justify-content-center align-items-end flex-wrap array-container">
                {arr.map((value, idx) => 
                <div key={idx} className="array-item" style={{height: `${value}px`, color:`rgb(15, 117, 117)`}}></div>)}
            </div>
        </div>
    );
}

export default Visualizer;