import { Box, Button, Container, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

export const Tour = ({ item }) => {
 
  return (
      <Box
        px={'15px'}
        maxW={'50%'}
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
            <Image maxW={'full'} src={item.image}></Image>
          </Box>
          <Box py={'10px'} px={'16px'} minH={'90px'}>
            <Text color={'rgb(33, 33, 33)'} fontWeight={'500'}>
              {item.title}
            </Text>
            <Text color={'#e8604c'}>{item.price}</Text>           
          </Box>
          <Box></Box>
          <Box py={'10px'} px={'16px'}>
            <Button>Xem chi tiết</Button>
          </Box>
        </Box>
      </Box>
  );
};

export default Tour;
