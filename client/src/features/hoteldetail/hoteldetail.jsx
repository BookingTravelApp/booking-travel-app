import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceApi from '../../api/serviceApi';
import CartApi from '../../api/cartApi.js';
import {
  Box,
  Text,
} from '@chakra-ui/react';
import { BiMinus, BiPlus } from 'react-icons/bi';
import FBComment from '../../components/social/FbComment';

import style from './style_hoteldetail.css';

const HotelDetail = () => {
  const slug = useParams().slug;
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [guide, setGuide] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState();

  let [numChild, setNumChild] = useState(0);
  let [numAdults, setNumAdults] = useState(0);
  let [show, setShow] = useState(false);

  let incNumChild = () => {
    setNumChild(Number(++numChild));
    console.log(numChild);
  };

  let decNumChild = () => {
    if (numChild > 0) {
      setNumChild(--numChild);
    }
  };

  let handleChangeChild = e => {
    setNumChild(e.target.value);
  };

  let incNumAdults = () => {
    setNumAdults(Number(++numAdults));
  };

  let decNumAdults = () => {
    if (numAdults > 0) {
      setNumAdults(--numAdults);
    }
  };

  let handleChangeAdults = e => {
    setNumAdults(e.target.value);
  };

  let showModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    ServiceApi.getService(slug)
      .then(res => {
        const car = res.data.service;
        setId(car.id);
        setName(car.name);
        setTitle(car.title);
        setGuide(car.guide);
        setDes(car.description);
        setPrice(car.price);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    const child = numChild;

    const adults = Number(
      document.getElementById('numberOfAdults_input').value
    );

    const quanlity = child + adults;

    const service = {
      amount: 1,
      serviceId: id,
      numberOfPeople: quanlity,
      numberOfChild: child,
    };

    CartApi.addCart(service)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });

    setShow(!show);
  };

  return (
    <div className="container">
      <div className="hotel-detail">
        <div className="hotel-img">
          <img
            src="https://hotel84.com/userfiles/image/hotel/hanoi/LaSiestaDiamond/best-view-La-Siesta-Diamond.jpg"
            width={'500px'}
          ></img>
        </div>
        <div className="hotel-info">
          <div className="hotel--name">{name}</div>
          <div className="hotel--title">{title}</div>
          <div className="hotel--description">{des}</div>
          <div className="hotel--guide">
            <label>Địa chỉ:</label>
            {guide}
          </div>
          <div className="hotel-price">
            <label>GIÁ CHO THUÊ: </label>
            {price} VNĐ/ngày
          </div>
          <div className="hotel-cart-book">
            <button className="hotel-cart" onClick={showModal}>Thêm vào giỏ hàng</button>
            <button className="hotel-book">Đặt phòng</button>
          </div>
        </div>
      </div>

      {/* Modal layout*/}
      <Box
        className="modal"
        position={'fixed'}
        top={'0'}
        right={'0'}
        bottom={'0'}
        left={'0'}
        display={show === true ? 'flex' : 'none'}
      >
        <Box
          className="modal_overlay"
          position={'absolute'}
          width={'100%'}
          height={'100%'}
          bgColor={'rgba(0, 0, 0, 0.4)'}
          zIndex={'1'}
        ></Box>
        <Box
          className="modal_body"
          id="modal_body"
          width={'460px'}
          height={'400px'}
          bgColor={'white'}
          margin={'auto'}
          zIndex={'2'}
        >
          <Box className="modal_inner">
            <form className="form_order">
              <div>
                <Text
                  fontWeight={'500'}
                  fontSize={'18px'}
                  color={'var(--primary-color)'}
                >
                  Khách sạn {name}
                </Text>
                <hr></hr>
                <div className="input_time">
                  <div className="title_input">Ngày checkin:</div>

                  <input type="date" id="time_input"></input>
                </div>
                <div className="input_amount_child">
                  <div className="title_input">Số lượng trẻ em: </div>
                  <button type="button" onClick={decNumChild}>
                    <BiMinus />
                  </button>
                  <input
                    type="number"
                    value={numChild}
                    onChange={handleChangeChild}
                    id="numberOfChild_input"
                  ></input>
                  <button type="button" onClick={incNumChild}>
                    <BiPlus />
                  </button>
                </div>
                <div className="input_amount_adults">
                  <div className="title_input">Số lượng người lớn: </div>
                  <button type="button" onClick={decNumAdults}>
                    <BiMinus />
                  </button>
                  <input
                    type="number"
                    value={numAdults}
                    onChange={handleChangeAdults}
                    id="numberOfAdults_input"
                  ></input>
                  <button type="button" onClick={incNumAdults}>
                    <BiPlus />
                  </button>
                </div>
                <div className="input_amount_price">
                  <div className="title_input">Giá trị thanh toán: </div>
                  <input value={price} id="price_input"></input>
                </div>
                <button className="button_cancel" onClick={setShow}>
                  Cancel
                </button>
                <button
                  type="button"
                  className="button_buy"
                  onClick={handleClick}
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </form>
          </Box>
        </Box>
      </Box>
      <FBComment />
    </div>
  );
};

export default HotelDetail;
