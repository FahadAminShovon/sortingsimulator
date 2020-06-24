import React from 'react';
import { motion } from 'framer-motion';

const Bar = () => {
    return ( 
        <motion.div
        // whileHover={{ scale: 1.2 }} 
        className="item"></motion.div>
    );
}

export default Bar;