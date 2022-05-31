import { Box } from '@chakra-ui/react';
import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import TourCard from './tourcard';

const Tours = () => {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('https://tranquil-shore-96391.herokuapp.com/service').then((res) => {
    const list = res.data.listService;
    setList(list);
});
},[]);
  console.log(list);
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
