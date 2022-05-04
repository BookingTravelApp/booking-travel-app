import { Box, Container, Image, List, ListIcon, ListItem, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import './style.css';

import img1 from "../../assets/images/tour-img/tour-1.jpg";
import img2 from "../../assets/images/tour-img/tour-2.jpg";
import img3 from "../../assets/images/tour-img/tour-3.jpg";
import img4 from "../../assets/images/tour-img/tour-4.jpg";



function Home(props) {
  return (
    <Container maxW={'1200px'} px={'15px'} pt="120px">
      <Box display="flex" flexDir={"column"} textAlign={"center"} w="full" mb="20px">
        <Box fontSize={"20px"} color={"#e8604c"}>
          <Text>Danh sách địa điểm</Text>
        </Box>
        <Box fontSize={"40px"} fontWeight={"700"}>
          <Text >Khám Phá Địa Điểm Mới Lạ !</Text>
        </Box>
      </Box>
      <Box display="flex" alignItems="center" w="full" mb="10px">
        <Box maxW={'25%'} px="5px" role="group">
          <Box overflow={"hidden"} rounded={'10px'}>
            <Image
              w={'full'}
              transition={"all 0.5s ease"}
              cursor="pointer"
              _groupHover={{
                transform: 'scale(1.1)',
              }}
              src={
                'https://tevily-nextjs.vercel.app/_next/static/media/destination-1-1.f32b89c3.png'
              }
            />
          </Box>
        </Box>
        <Box maxW={'50%'} px="5px" role="group">
            <Box overflow={"hidden"} rounded={'10px'}>
                <Image
                    w={'full'}
                    transition={"all 0.5s ease"}
                    cursor={"pointer"}
                    _groupHover={{
                        transform: 'scale(1.1)'
                    }}
                    rounded={'10px'}
                    src={
                    'https://tevily-nextjs.vercel.app/_next/static/media/destination-1-2.6b007ca8.png'
                    }
                />
            </Box>          
        </Box>
        <Box maxW={'25%'} px="5px" role="group">
          <Box overflow={"hidden"} rounded={'10px'}>
            <Image
              w={'full'}
              transition={"all 0.5s ease"}
              cursor="pointer"
              _groupHover={{
                transform: 'scale(1.1)',
              }}
              src={
                'https://tevily-nextjs.vercel.app/_next/static/media/destination-1-3.d37d50e6.png'
              }
            />
          </Box>
        </Box>
      </Box>

      <Box display="flex" alignItems="center" w="full" mb="10px">
        <Box maxW={'50%'} px="5px" role="group">
          <Box overflow={"hidden"} rounded={'10px'}>
            <Image
              w={'full'}
              transition={"all 0.5s ease"}
              cursor="pointer"
              _groupHover={{
                transform: 'scale(1.1)',
              }}
              src={
                'https://tevily-nextjs.vercel.app/_next/static/media/destination-1-4.0ba8a85a.png'
              }
            />
          </Box>
        </Box>  
        <Box maxW={'50%'} px="5px" role="group">
          <Box overflow={"hidden"} rounded={'10px'}>
            <Image
              w={'full'}
              transition={"all 0.5s ease"}
              cursor="pointer"
              _groupHover={{
                transform: 'scale(1.1)',
              }}
              src={
                'https://tevily-nextjs.vercel.app/_next/static/media/destination-1-5.a1a8d71b.png'
              }
            />
          </Box>
        </Box>      
      </Box> 

      <Box display="flex" alignItems="center" w="full" pt="105px" pb="111px">
          {/* left */}
          <Box w={"50%"} ml={"-45px"} mr={"-10px"} position={"relative"}>
              <Box>
                  <Image src="https://tevily-nextjs.vercel.app/_next/static/media/about-one-img-1.e526a0a5.png" bs={"border-box"}></Image>
              </Box>
              <Box position={"absolute"} top={"120px"} right={"0px"}>
                  <Text fontSize={"60px"} fontWeight={"600"}color={"#e8604c"}>30%</Text>
                  <Text fontSize={"50px"} fontWeight={"600"}>Discount</Text>
              </Box>
              <Box bgColor={"#ffffff"} position={"absolute"} top={"250px"} left={"-90px"} display={"flex"} justifyContent={"center"} px={"40px"} py={"25px"} boxShadow={"0 10px 60px 0 rgb(0 0 0 / 10%)"} w={"264px"} h={"82px"} br={"10px"} rounded={"10px"}>
                <Box m={"auto"} color={"#e8604c"} >
                  <FiPhoneCall fontSize={"30px"}/>
                </Box>
                <Box>
                  <Text fontSize={"10px"} color={"#777"}>BOOK TOUR NOW</Text>
                  <Text fontSize={"20px"} fontWeight={"700"}>666-345-002</Text>
                </Box>
              </Box>
          </Box>
          {/* right */}
          <Box w={"50%"} px={"50px"}>
              <Box>
                <Text fontSize={"50px"} fontWeight={"700"}>Du Lịch Paris</Text>
              </Box>
              <Box>
                <Text color={"#787780"} lineHeight={"8"}>Paris lãng mạng, Thành phố Ánh sáng nơi có Arc de Triomphe và Tháp Eiffel, bánh mì baguette và thời trang cao cấp. Hãy đội mũ nồi, buộc khăn và đắm mình thưởng thức ẩm thực, thỏa sức mua sắm và ghé thăm các bảo tàng nơi đây. Bon voyage! Chúc bạn một chuyến đi vui vẻ!</Text>
              </Box>
              <Box>
                <Text></Text>
              </Box>
              <Box>
                <List spacing={4} mt={"20px"}>
                  <ListItem >
                    <ListIcon as={AiOutlineCheckCircle} color='#e8604c' />
                    Một trong những thành phố lãng mạn nhất thế giới.
                  </ListItem>
                  <ListItem >
                    <ListIcon as={AiOutlineCheckCircle} color='#e8604c' />
                    Paris là một vùng đất của nghệ thuật và nghệ sĩ. 
                  </ListItem>
                  <ListItem >
                    <ListIcon as={AiOutlineCheckCircle} color='#e8604c' />
                    Paris cũng là một thành phố thủ đô nổi tiếng với viện bảo tàng.
                  </ListItem>                                
                </List>
              </Box>
              <Box mt={"50px"}>
                <Button px={"30px"} py={"8px"} bgColor='#e8604c'color={"#fff"}>Xem chi tiết</Button>
              </Box>
          </Box>
      </Box>
      
      <Box display="flex" flexDir={"column"} textAlign={"center"} w="full" mb="20px">
        <Box fontSize={"20px"} color={"#e8604c"}>
          <Text>Tour nổi bật</Text>
        </Box>
        <Box fontSize={"40px"} fontWeight={"700"}>
          <Text >Tour Du Lịch Phổ Biến Nhất</Text>
        </Box>
      </Box>
      
      <Box display="flex" textAlign={"center"} w="full" mb="20px" justifyContent={"space-between"}>
        <Box w={"275px"} overflow={"hidden"} rounded={"5px"} display={"flex"} 
             flexDir={"column"} textAlign={"start"} border={"1px solid #888780"} 
             cursor={"pointer"} 
             _hover={{                
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",            
              transform: "translateY(-1%)",
              transition: 'all 0.1s linear'
             }}>
          <Box>
            <Image src={img1}></Image>
          </Box>
          <Box py={"10px"} px={"16px"}>
            <Text color={"rgb(33, 33, 33)"} fontWeight={"500"}>Vé Cáp Treo Sun World Bà Nà Hills Đà Nẵng</Text>
            <Text color={"#e8604c"}>700,000 VND</Text>
          </Box>
        </Box>

        <Box w={"275px"} overflow={"hidden"} rounded={"5px"} display={"flex"} 
             flexDir={"column"} textAlign={"start"} border={"1px solid #888780"} 
             cursor={"pointer"} 
             _hover={{                
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",            
              transform: "translateY(-1%)",
              transition: 'all 0.1s linear'
             }}>
          <Box>
            <Image src={img2}></Image>
          </Box>
          <Box py={"10px"} px={"16px"}>
            <Text color={"rgb(33, 33, 33)"} fontWeight={"500"}>Vé Vinpearl Safari Phú Quốc</Text>
            <Text color={"#e8604c"}>650,000 VND</Text>
          </Box>
        </Box>
        <Box w={"275px"} overflow={"hidden"} rounded={"5px"} display={"flex"} 
             flexDir={"column"} textAlign={"start"} border={"1px solid #888780"} 
             cursor={"pointer"} 
             _hover={{                
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",            
              transform: "translateY(-1%)",
              transition: 'all 0.1s linear'
             }}>
          <Box>
            <Image src={img3}></Image>
          </Box>
          <Box py={"10px"} px={"16px"}>
            <Text color={"rgb(33, 33, 33)"} fontWeight={"500"}>Vé Cáp Treo Sun World Fansipan Legend</Text>
            <Text color={"#e8604c"}>715,000 VND</Text>
          </Box>
        </Box>
        <Box w={"275px"} overflow={"hidden"} rounded={"5px"} display={"flex"} 
             flexDir={"column"} textAlign={"start"} border={"1px solid #888780"} 
             cursor={"pointer"} 
             _hover={{                
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",            
              transform: "translateY(-1%)",
              transition: 'all 0.1s linear'
             }}>
          <Box>
            <Image src={img4}></Image>
          </Box>
          <Box py={"10px"} px={"16px"}>
            <Text color={"rgb(33, 33, 33)"} fontWeight={"500"}>Vé Công Viên Suối Khoáng Nóng Núi Thần Tài Đà Nẵng</Text>
            <Text color={"#e8604c"}>260,000 VND</Text>
          </Box>
        </Box>
        
      </Box>
             
    </Container>
    
  );
}

export default Home;
