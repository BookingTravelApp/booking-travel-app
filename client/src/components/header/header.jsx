import React, { useEffect, useState } from 'react';
import {
  Box,
  Container,
  Flex,
  HStack,
  Input,
  StackDivider,
  Text,
  VStack,
  Link
} from '@chakra-ui/react';

import { BsSearch } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { FaRegUser } from 'react-icons/fa';
import { ImArrowLeft2, ImArrowRight2 } from 'react-icons/im';

import logo from "../../assets/images/logo.png";
import {
  SliderHeaderStart,
  SliderHeaderCenter,
  SliderHeaderEnd,
} from './slide-header/index';

const MENU_BAR = ['Tour', 'Planes', 'Hotel', 'Contact'];

const HeaderHome = () => {
  const [slide, setSlide] = useState(0);

  const [showMenu, setShowMenu] = useState(false);

  const [opionUser, setOptionUser] = useState(false);

  const slickLeft = () => {
    if (slide === 0) setSlide(2);
    else setSlide(slide - 1);
  };

  const slickRight = () => {
    if (slide === 2) setSlide(0);
    else setSlide(slide + 1);
  };

  const ScrollShowMenu = () => {
    window.scrollY >= 530 ? setShowMenu(true) : setShowMenu(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', ScrollShowMenu);
  });

  return (
    <Container maxW={'full'} centerContent p={0} position={'relative'}>
      <VStack
        divider={<StackDivider borderColor="gray.300" />}
        w={'full'}
        spacing={0}
        position={'absolute'}
        inset={0}
        zIndex={1}
        h={'169px'}
      >
        <Box
          py={showMenu ? '0px' : '22px'}
          w={'full'}
          display={'flex'}
          justifyContent={'center'}
          bgColor={showMenu ? 'white' : 'unset'}
          position={showMenu ? 'fixed' : 'unset'}
          top={showMenu ? '0px' : '-84px'}
          left={showMenu ? '0px' : 'unset'}
          boxShadow={showMenu ? '0 10px 50px 0 rgb(46 56 220 / 20%)' : 'unset'}
          transition={'all 0.3s ease'}
          zIndex={999}
        >
          <Box
            maxW={'1200px'}
            w={'full'}
            color={'#5C727D'}
            fontSize={'15px'}
            fontFamily={'sans-serif'}
            p={'10px'}
            bgColor={"unset"}
            shadow={showMenu ? 'sm' : "unset"}
          >
            <Flex
              display={'flex'}
              alignItems={'center'}
              mx={'-15px'}
              px={'10px'}
            >
              <Box minW={'185px'} px={'15px'} flex={1} w={'full'}>
                <Link to={'/'}>
                  <Box
                    style={{ backgroundImage: `url(${logo})` }}
                    h={'38px'}
                    w={'165px'}
                    bgSize={'cover'}
                    bgPosition={'center'}
                    bgRepeat={'no-repeat'}
                  ></Box>
                </Link>
              </Box>

              <Box px={'15px'} flex={1}>
                <HStack
                  justifyContent={'center'}
                  color={'black'}
                  fontWeight={'bold'}
                  fontSize={'16px'}
                  spacing={8}
                >
                  {MENU_BAR.map((menu, index) => (
                    <Box
                      transition={'all 0.2s ease-in-out'}
                      px={'10px'}
                      py={'20px'}
                      key={index}
                      cursor={'pointer'}
                      _hover={{ color: '#0A9A73' }}
                      color={showMenu ? "black": "white"}
                    >
                      {menu}
                    </Box>
                  ))}
                </HStack>
              </Box>

              <Box minW={'185px'} px={'15px'}>
                <Box ml={'auto'} display={'flex'}>
                  <Box position={'relative'}>
                    <Box
                      mx={'15px'}
                      position={'relative'}
                      color={'#071c1f'}
                      shadow={'0 16px 32px 0 rgba(7, 28, 31, 0.1)'}
                    >
                      <Input
                        type={'text'}
                        h={'50px'}
                        pr={'50px'}
                        border={'1px'}
                        rounded={'none'}
                        placeholder={'Search here...'}
                        bg={"white"}
                        color={'#5C727D'}
                        _placeholder={{
                          color: '#5C727D',
                        }}
                        _focus={{ borderColor: '#0a9a7a', border: '1px' }}
                      />
                      <Box
                        color={'#071c1f'}
                        position={'absolute'}
                        top={'50%'}
                        transform={'translateY(-50%)'}
                        right={'10px'}
                      >
                        <BsSearch size={19} />
                      </Box>
                    </Box>
                  </Box>
                  <Box
                    shadow={'0 16px 32px 0 rgba(7, 28, 31, 0.1)'}
                    position={'relative'}
                    bgColor={'white'}
                    color={'#071c1f'}
                    minW={'25px'}
                    h={'50px'}
                    w={'50px'}
                    mr={'10px'}
                    transition={'all 0.3s linear'}
                    cursor={'pointer'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    _hover={{
                      color: 'white',
                      backgroundColor: '#0A9A73',
                    }}
                    onClick={() => setOptionUser(!opionUser)}
                  >
                    <Box
                      position={'absolute'}
                      top={opionUser ? '102%' : "115%"}
                      right={'0px'}
                      minW={'150px'}
                      py={'10px'}
                      bg={'white'}
                      boxShadow={'sm'}
                      fontSize={'16px'}
                      color={'#5C727D'}
                      transition={'all 0.5s ease'}
                      opacity={opionUser ? "1" : "0"}
                    >
                      <Box px={'15px'} py={'7px'} role={'group'}>
                        <Text
                          _groupHover={{
                            color: '#0A9A73',
                          }}
                        >
                          Sign in
                        </Text>
                      </Box>
                      <Box px={'15px'} py={'7px'} role={'group'}>
                        <Text
                          _groupHover={{
                            color: '#0A9A73',
                          }}
                        >
                          Register
                        </Text>
                      </Box>
                      <Box px={'15px'} py={'7px'} role={'group'}>
                        <Text
                          _groupHover={{
                            color: '#0A9A73',
                          }}
                        >
                          My Account
                        </Text>
                      </Box>
                      <Box px={'15px'} py={'7px'} role={'group'}>
                        <Text
                          _groupHover={{
                            color: '#0A9A73',
                          }}
                        >
                          Wishlist
                        </Text>
                      </Box>
                    </Box>
                    <FaRegUser size={20} />
                  </Box>
                  <Box
                    shadow={'0 16px 32px 0 rgba(7, 28, 31, 0.1)'}
                    bgColor={'white'}
                    color={'#071c1f'}
                    minW={'25px'}
                    h={'50px'}
                    w={'50px'}
                    transition={'all 0.3s linear'}
                    cursor={'pointer'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    _hover={{
                      color: 'white',
                      backgroundColor: '#0A9A73',
                    }}
                  >
                    <AiOutlineShoppingCart size={23} />
                  </Box>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      </VStack>
      <Box
        transition={'all 0.3s ease'}
        w={'full'}
        position={'relative'}
        role={'group'}
      >
        {
          {
            0: <SliderHeaderStart />,
            1: <SliderHeaderCenter />,
            2: <SliderHeaderEnd />,
          }[slide]
        }
        <Box
          position={'absolute'}
          left={'40px'}
          top={'50%'}
          transform={'translateY(-50%)'}
          w={'60px'}
          h={'60px'}
          border={'1px'}
          borderColor={'#e5eaee'}
          color={'#27272a'}
          display={'flex'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'all 0.3s ease'}
          opacity={0}
          cursor={'pointer'}
          _hover={{
            color: 'white',
            bgColor: '#0a9a73',
          }}
          _groupHover={{
            left: '60px',
            opacity: 1,
          }}
          onClick={slickLeft}
        >
          <ImArrowLeft2 size={21} />
        </Box>
        <Box
          position={'absolute'}
          right={'40px'}
          top={'50%'}
          transform={'translateY(-50%)'}
          w={'60px'}
          h={'60px'}
          border={'1px'}
          borderColor={'#e5eaee'}
          color={'#27272a'}
          display={'flex'}
          cursor={'pointer'}
          alignItems={'center'}
          justifyContent={'center'}
          transition={'all 0.3s ease'}
          opacity={0}
          _hover={{
            color: 'white',
            bgColor: '#0a9a73',
          }}
          _groupHover={{
            right: '60px',
            opacity: 1,
          }}
          onClick={slickRight}
        >
          <ImArrowRight2 size={21} />
        </Box>
      </Box>

      <Box w={'full'} position={'absolute'} bottom={0} zIndex={998}>
        <HStack
          spacing={'10px'}
          alignItems={'center'}
          justifyContent={'center'}
          h={'100px'}
        >
          <Box
            h={'10px'}
            w={'10px'}
            rounded={'full'}
            bgColor={slide === 0 ? '#0a9a7a' : '#c0c0c0'}
            transform={slide === 0 ? 'scale(1.5)' : 'unset'}
            transition={'all 0.2s ease'}
            cursor={'pointer'}
            _hover={{
              transform: 'scale(1.5)',
              bgColor: '#0a9a7a',
            }}
            onClick={() => setSlide(0)}
          ></Box>
          <Box
            h={'10px'}
            w={'10px'}
            rounded={'full'}
            bgColor={slide === 1 ? '#0a9a7a' : '#c0c0c0'}
            transform={slide === 1 ? 'scale(1.5)' : 'unset'}
            transition={'all 0.2s ease'}
            cursor={'pointer'}
            _hover={{
              transform: 'scale(1.5)',
              bgColor: '#0a9a7a',
            }}
            onClick={() => setSlide(1)}
          ></Box>
          <Box
            h={'10px'}
            w={'10px'}
            rounded={'full'}
            bgColor={slide === 2 ? '#0a9a7a' : '#c0c0c0'}
            transform={slide === 2 ? 'scale(1.5)' : 'unset'}
            transition={'all 0.2s ease'}
            cursor={'pointer'}
            _hover={{
              transform: 'scale(1.5)',
              bgColor: '#0a9a7a',
            }}
            onClick={() => setSlide(2)}
          ></Box>
        </HStack>
      </Box>
    </Container>
  );
};

export default HeaderHome;
