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


    return ( 
        <motion.div className="base"
            variants={baseVariant}
            initial="hidden"
            animate="visible">
            {numbers.map(number => <Bar key={uniqid()} height={number}/>)}
        </motion.div>
    );
}
