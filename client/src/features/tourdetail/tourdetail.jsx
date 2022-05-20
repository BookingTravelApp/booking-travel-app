import React, {useEffect, useState} from 'react'
import ImageSlider from '../tourdetail/slide/index.jsx'
import { SliderData } from './slide/slidedata.jsx'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Container, List, Text, ListIcon, ListItem, Button} from '@chakra-ui/react'
import {BsCheckCircle} from 'react-icons/bs'
import {MdCheckCircle} from 'react-icons/md'

const TourDetail = () => {

  const slug = useParams().slug;
  const [tour, setTour] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState()
  
  useEffect(()=>{
    axios.get("https://tranquil-shore-96391.herokuapp.com/service/"+slug)
          .then((res) => {
            const tour = res.data.service;
            setTour(tour);     
            setName(tour.name); 
            setPrice(tour.price);
            setDescription(tour.description);
          })        
          .catch((err) => {
            console.log(err);
          }) ;
  }, [])

  console.log(tour);
  console.log(name);

  return (
    <Container maxW={'1200px'}>
      <ImageSlider slides={SliderData} > </ImageSlider>
      <Box maxW={'full'} mt={'20px'}>
          <Text fontWeight={'600'} fontSize={'30px'} color={'#EC994B'}>Du lịch cố đô huế {name}</Text>    
          
          <Text>{description} Cố đô Huế là thủ phủ Đàng Trong dưới thời các chúa Nguyễn từ năm 1687 đến 1774, sau đó là thủ đô của triều đại Tây Sơn từ năm 1788 khi Hoàng đế Quang Trung tức Nguyễn Huệ lên ngôi. </Text>
          
          <Text fontWeight={'600'} mt={'20px'}>LỊCH TRÌNH BAO GỒM</Text>
          <List spacing={4} mt={'20px'}>
              <ListItem display={'inline-block'}>              
                  <ListIcon as={MdCheckCircle} color='black.500' />
                  01 bữa ăn trưa Buffet cao cấp trên tàu.
              </ListItem>
              <ListItem>
                  <ListIcon as={MdCheckCircle} color='black.500' />
                  Hướng dẫn viên tiếng Anh, tiếng Việt
              </ListItem>
              <ListItem>
                  <ListIcon as={MdCheckCircle} color='black.500' />
                  Các hoạt động: Thăm hang Sửng Sốt, chèo kayaking, tắm biển tại bãi biển đảo Titov, leo núi
              </ListItem>
              <ListItem>
                  <ListIcon as={MdCheckCircle} color='black.500' />
                  Lịch trình thăm quan 8 tiếng.
              </ListItem>
              <ListItem>
                  <ListIcon as={MdCheckCircle} color='black.500' />
                   Tổ chức sinh nhật cho khách trong chương trình Sunset party (miễn phí).
              </ListItem>           
          </List>
          <Box fontWeight={'600'} mt={'20px'} display={'flex'}>
              <Text mr={'5px'}>CHI PHÍ:</Text>
              <Text color={'red.600'} fontWeight={'400'}>{price} VNĐ</Text>
          </Box>    
          <Button bgColor={'#EC994B'} mt={'20px'} color={'white'}>Đặt tour</Button>          
      </Box>
    </Container>   
      
  )
}

export default TourDetail