import { Box, Button, Container, Image, Input, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from 'react';
import style from './style.css';

import {AiTwotoneEdit} from 'react-icons/ai';



const User = () => {

    const [gender, setGender] = useState('1');
  return (
      <Container maxW={'1200px'} mt={'100px'} >
          <Box w={'full'} display={'flex'} flexDir={'column'}>
                <Box display={'flex'} position={'relative'} px={'30px'}>
                    <Image src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} w={'100px'}></Image>
                    <Box display={'flex'} flexDir={'column'} justifyContent={'end'} ml={'-20px'} cursor={'pointer'}>
                        <AiTwotoneEdit />
                    </Box>
                </Box>
                <Box mt={'40px'} display={'flex'} justifyContent={'space-around'} >
                    <Box  border={'1px solid #666'} px={'30px'} py={'20px'} w={'55%'}>
                        <Text fontWeight={'600'} fontSize={'20px'} mb={'14px'} color={'#006E7F'}>Profile</Text>
                        <Box >
                            <Text>Name</Text>
                            <input  className = {'inputUser'} value={'Phương Trâm'}></input>
                        </Box>
                        <Box >
                            <Text>Phone number</Text>
                            <input  className = {'inputUser'} value={'102190385'}></input>
                        </Box>
                        <Box >
                            <Text>Gender</Text>
                            <RadioGroup onChange={setGender} value={gender} mb={'16px'}>
                                <Stack direction='row'>
                                    <Radio value='1'>Male</Radio>
                                    <Radio value='2'>Felmal</Radio>                                    
                                </Stack>
                            </RadioGroup>
                        </Box>
                        <Box >
                            <Text>Date Of Birth</Text>
                            <input  className = {'inputUser'} type={'date'} value={'now'}></input>
                        </Box>
                        <button className='buttonChange'>Change</button>
                        <button className='buttonCancel'type={'button'}>Cancel</button>
                    </Box>

                    <Box border={'1px solid #666'} px={'30px'} py={'20px'} w={'36%'}>
                        <Text fontWeight={'600'} fontSize={'20px'} mb={'14px'}  color={'#006E7F'}>Edit Password</Text>
                        <Text>Enter Old Password</Text>
                        <input  className = {'inputUser'} type='password'></input>
                        <Text >Enter New Password</Text>
                        <input  className = {'inputUser'} type='password'></input>
                        <Text>Enter New Password</Text>
                        <input  className = {'inputUser'} type='password'></input>
                        <button className='buttonChange'>Change</button>
                    </Box> 
                </Box>
          </Box>
      </Container>
   
  )
}

export default User;
