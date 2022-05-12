import { Box } from '@chakra-ui/react';
import React from 'react';
import {tours} from '../../assets/data/data.js';
import {Tour} from './tour.jsx';

export const Tours = () => {
  return (
    <Box display={"flex"} flexWrap={"wrap"} w={"full"} px={"15px"}>
        {
            tours.map((item, index) => (
                <Tour item={item} key={index} />
            ))            
        }
    </Box>
  )
}

export default Tours;