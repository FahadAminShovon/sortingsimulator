import React, { useState, useEffect } from 'react';
import './Visualizer.css'

const Visualizer = () => {
    const [arr, setArr] = useState([])

    const randomNumberGenerator = (minn, maxx) => {
        return Math.floor(Math.random() * (maxx - minn) + minn);
    }
    const resetArray = () => {
        const arr = [];
        for(let i = 0; i < 200; i++){
            arr.push(randomNumberGenerator(5, 750))
        }
        setArr(arr);
    }
    
    useEffect(() => {
        resetArray();
    },[])

    return ( 
        <div>
            <div className="array-container">
                {arr.map((value, idx) => 
                <div key={idx} className="array-item" style={{height:`${value}px`}}></div>)}
            </div>
            <button className="reset-button btn btn-primary float-left mt-3 ml-3" onClick={resetArray}>reset</button>
        </div>
    );
}

export default Visualizer;