import { Box } from '@chakra-ui/react';
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TourCard from './tourcard';
import tourApi from '../../api/tourApi';

const Tours = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    tourApi.getTourList().then((res) => {
      const list = res.data.tourList;
      console.log(res.data.tourList);
      setList(res.data.tourList);
    });
},[]);
  return (
    <Box display={"flex"} flexWrap={"wrap"}  px={"15px"} >  
        {list.map((item)=>(
          <Box maxW={'50%'}>
              <TourCard item={item} key={item.id} w={'full'}/>
          </Box>
        ))}
    </Box>
  )
}

export default Tours;
