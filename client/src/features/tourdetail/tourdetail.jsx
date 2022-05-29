import React, {useEffect, useState} from 'react'
import ImageSlider from '../tourdetail/slide/index.jsx'
import { SliderData } from './slide/slidedata.jsx'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Box, Container, List, Text, ListIcon, ListItem, Button, FormControl} from '@chakra-ui/react'
import {BiMinus} from 'react-icons/bi'
import {BiPlus} from 'react-icons/bi'
import {MdCheckCircle} from 'react-icons/md'
import style from './style.css'

const TourDetail = () => {

  const slug = useParams().slug;
  const [tour, setTour] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState()
  let [numChild, setNumChild] = useState(0);
  let [numAdults, setNumAdults] = useState(0);

  let [show, setShow] = useState(false);
  
  let incNumChild = () => {
    setNumChild(Number(numChild) + 1);
  }

  let decNumChild = () => {
      if(numChild>0) {
        setNumChild(numChild-1)
      }
  }

  let handleChangeChild = (e) => {
      setNumChild(e.target.value);
  }

  let incNumAdults = () => {
    setNumAdults(Number(numAdults) + 1);
  }

  let decNumAdults = () => {
    if(numAdults > 0) {
        setNumAdults(Number(numAdults) - 1);
    }
  }

  let handleChangeAdults = (e) => {
    setNumAdults(e.target.value);
  }

  let showModal = () => {
      
    setShow(!show);
  }
 
  
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



  return (
    <Container maxW={'1200px'}>
      <ImageSlider slides={SliderData} > </ImageSlider>
      <Box maxW={'full'} mt={'20px'}>
              <Text fontWeight={'600'} fontSize={'30px'} color={'var(--text-color)'}>Du lịch cố đô huế {name}</Text>    
          
              <Text>{description} Cố đô Huế là thủ phủ Đàng Trong dưới thời các chúa Nguyễn từ năm 1687 đến 1774, sau đó là thủ đô của triều đại Tây Sơn từ năm 1788 khi Hoàng đế Quang Trung tức Nguyễn Huệ lên ngôi. </Text>
          
              <Text fontWeight={'600'} mt={'20px'} color={'var(--text-color)'}>LỊCH TRÌNH BAO GỒM</Text>
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
                  <Text color={"var(--primary-color)"} fontWeight={'400'} fontSize={"18px"}>{price} VNĐ</Text>
              </Box>    
              <Box display={"flex"}>
                  <Box maxWidth={"150px"} 
                        px={"30px"} 
                        py={"8px"} 
                        mt={"16px"}
                        mr={"20px"}
                        textAlign={"center"}
                        bgColor='var(--highlight-color)'
                        color={"#fff"} 
                        cursor={"pointer"}        
                        _hover={
                          {
                            backgroundColor: "var(--text-color)",

                          }
                        } 
                        onClick={showModal}>Đặt tour</Box> 
                  <Box maxWidth={"190px"} 
                            px={"20px"} 
                            py={"8px"} 
                            mt={"16px"}
                            textAlign={"center"}
                            bgColor='var(--button-color)'
                            color={"blackAlpha.900"} 
                            cursor={"pointer"}
                    
                            _hover={
                              {
                                backgroundColor: "var(--hover-color)",

                              }
                            } 
                            onClick={showModal}>Thêm vào giỏ hàng</Box>  
                  </Box>          
      </Box>
          
  
      {/* Modal layout*/}
      <Box className='modal' 
                         position={'fixed'} 
                         top={'0'} 
                         right={'0'} 
                         bottom={'0'} 
                         left={'0'}
                         display={show == true ? "flex" : "none"}
                          >
          <Box className='modal_overlay'
                          position={'absolute'}
                          width={'100%'}
                          height={'100%'}
                          bgColor={'rgba(0, 0, 0, 0.4)'}
                          zIndex = {'1'}
                          ></Box>
          <Box className='modal_body' id='modal_body'
                          width={'460px'}
                          height={'400px'}
                          bgColor={'white'}
                          margin={'auto'}
                          zIndex={'2'}
                          >
              <Box className="modal_inner">
                  <form className='form_order'> 
                      <div>
                          <Text fontWeight={'500'} fontSize={'18px'} color={'var(--primary-color)'}>Khu du lịch {name}</Text>
                          <hr></hr>                    
                          <div className='input_time'>
                              <div className="title_input">Ngày khởi hành</div>
                        
                              <input type="date"></input>
                          </div>
                          <div className='input_amount_child'>
                              <div className="title_input">Số lượng trẻ lớn: </div>
                              <button type="button" onClick={decNumChild}><BiMinus/></button>
                              <input  type="number" value={numChild} onChange={handleChangeChild}></input>
                              <button type="button" onClick={incNumChild}><BiPlus/></button>
                          </div>
                          <div className='input_amount_adults'>
                              <div className="title_input">Số lượng người lớn: </div>
                              <button type="button" onClick={decNumAdults}><BiMinus/></button>
                              <input  type="number" value={numAdults} onChange={handleChangeAdults}></input>
                              <button type="button" onClick={incNumAdults}><BiPlus/></button>
                          </div>
                          <div className='input_amount_price'>
                              <div className="title_input">Giá trị thanh toán: </div>
                              <input value="1,000,000 VNĐ"></input>
                          </div>
                          <button className='button_cancel' onClick={setShow}>Cancel</button>
                          <button className='button_buy' type='submit'>Đặt tour</button>

                      </div>                                           
                  </form>
              </Box>
          </Box>
      </Box>
    </Container>   
      
  )
}

export default TourDetail