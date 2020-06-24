import React, { useState, useEffect } from 'react';
import './Visualizer.css'

const Visualizer = () => {
    const [arr, setArr] = useState([])

    const randomNumberGenerator = (minn, maxx) => {
        return Math.floor(Math.random() * (maxx - minn) + minn);
    }
    const resetArray = () => {
        const arr = [];
        for(let i = 0; i < 250; i++){
            arr.push(randomNumberGenerator(5, 800))
        }
        setArr(arr);
    }

    const selectionSort = () => {
        const elements = document.getElementsByClassName("array-item");
        // elements[0].style.backgroundColor = "red"
        // console.log("to be continued")
        for(let i = 0; i < elements.length ; i++){
            setTimeout(() => {
                elements[i].style.backgroundColor = "red";
            }, i* 10)
            // setTimeout(() => {
            //     elements[i].style.backgroundColor = "rgb(15, 117, 117)";
            // }, i* 15)
            // for(let j = 0; j< elements.length; j++){
            //     setTimeout(() => {
            //         elements[i].style.backgroundColor = "red"
            //         elements[j].style.backgroundColor = "red"
            //     }, i*10000)
            // }
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
                <div key={idx} className="array-item" style={{height: `${value}px`}}></div>)}
            </div>
        </div>
    );
}

export default Visualizer;