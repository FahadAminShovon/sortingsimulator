import React, { useState, useEffect } from 'react';
import Bar from './bar';
import { motion } from 'framer-motion';
const baseVariant = {
    hidden: {
        width: "0vw",
        opacity: 0
    },
    visible : {
        width: "85vw",
        opacity: 1,
        transition: {
            delay: 0.9,
            type: 'spring',
            stiffness: 50,
            when: "beforeChildren",
            staggerChildren: 0.3
        }
    }
}



export const SortContainer = () => {
    const uniqid = require('uniqid');
    const [numbers,setNumbers] = useState([])

    useEffect(()=>{
        const arr = [];
        for(let i=1; i<=64; i++){
            arr.push(Math.round((Math.random()*64)+1))
        }
        setNumbers(arr);
    },[])

    const sortArray = () => {
        var i = 0;                  //  set your counter to 1
        const arr = numbers.slice();

        function myLoop() {         //  create a loop function
          setTimeout(function() {   //  call a 3s setTimeout when the loop is called
            console.log('hello');   //  your code here
            if (i < 63) {
                for(let j = i+1; j<64; j++){
                    if(arr[i] > arr[j]){
                        const temp = arr[i];
                        arr[i] = arr[j];
                        arr[j] = temp
                        setNumbers(arr)
                        console.log("swaping")
                    }
                    console.log(i,j)
                }
                i++;
                myLoop();             
            }                       
            }, 4000)
        }
        
        myLoop();   
    }

    return ( 
        <div>
            {/* <div style={{height:"100px", width:"100px", background:"red", zIndex:"1"}}></div> */}
            <button onClick = {sortArray} style={{color:"red", background:"red"}}>sort</button>
            <div className="base"
                variants={baseVariant}
                initial="hidden"
                animate="visible">
                {numbers.map(number => <Bar key={uniqid()} height={number}/>)}
            </div>
        </div>

    );
}
