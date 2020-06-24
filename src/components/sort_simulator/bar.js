import React from 'react';
import { motion } from 'framer-motion';



const Bar = ({height}) => {
    const childVarient = {
        hidden:{
            height: "0vh"
        },
        visible:{
            height: `${height}vh`
        }
    }
    return ( 
        <div className="numberBar">
        <div className="number">{height}</div>
        <div
        style= {{height:`${height}vh`}}
        className="item">
        </div>
        </div>

    );
}

export default Bar;