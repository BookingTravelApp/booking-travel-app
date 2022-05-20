import { Box, Button, Container, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {AiFillStar} from 'react-icons/ai';
import tour from '../../assets/tour-img/tour-1.jpg'
const TourCard = ({ item }) => {

  const randomStar = () => {
    return  Math.floor(Math.random()*6)+1;  
  }

  const resRandom = randomStar();
 

  return (
      <Box
        px={'15px'}
        w={'full'}
        mb="20px"        
      >
        <Box      
          overflow={'hidden'}
          rounded={'5px'}
          display={'flex'}
          flexDir={'column'}
          textAlign={'start'}
          border={'1px solid #888780'}
          cursor={'pointer'}
          _hover={{
            boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
            transform: 'translateY(-1%)',
            transition: 'all 0.1s linear',
          }}
        >
          <Box>
            <Image maxW={'full'} src={tour}></Image>
          </Box>
          <Box py={'10px'} px={'16px'} minH={'90px'}>
            <Text color={'rgb(33, 33, 33)'} fontWeight={'500'}>
              {item.name}
            </Text>
            <Text color={'#e8604c'}>{item.price}</Text>           
          </Box>
          <Box px={'16px'} display={'flex'}>
              <Box color={resRandom > 0 ? "#FFCD38" : "unset"}>
                <AiFillStar/>
              </Box>
              <Box color={resRandom > 1 ? "#FFCD38" : "unset"}>
                <AiFillStar/>
              </Box>
              <Box color={resRandom > 2 ? "#FFCD38" : "unset"}>
                <AiFillStar/>
              </Box>
              <Box color={resRandom > 3 ? "#FFCD38" : "unset"}>
                <AiFillStar/>
              </Box>
              <Box color={resRandom > 4 ? "#FFCD38" : "unset"}>
                <AiFillStar/>
              </Box>
          </Box>
          <Link to={`/tourDetail/${item.slug}`}>
            <Box py={'10px'} px={'16px'}>
              <Button>Xem chi tiết</Button>
            </Box>
          </Link>
        </Box>
      </Box>
  );
};

export default TourCard;
