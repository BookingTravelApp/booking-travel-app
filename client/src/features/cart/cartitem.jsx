import React, { useState } from 'react';
import { BiMinus } from 'react-icons/bi';
import { BiPlus } from 'react-icons/bi';
import {ImCancelCircle} from 'react-icons/im'
import style from './style.css';

const CartItem = ({ tour }) => {
  const [numChild, setNumChild] = useState(0);
  const [numAdults, setNumAdults] = useState(0);

  const incNumChild = () => {
    setNumChild(Number(numChild) + 1);
  };

  const decNumChild = () => {
    if (numChild > 0) {
      setNumChild(numChild - 1);
    }
  };

  const handleChangeChild = e => {
    setNumChild(e.target.value);
  };

  const incNumAdults = () => {
    setNumAdults(Number(numAdults) + 1);
  };

  const decNumAdults = () => {
    if (numAdults > 0) {
      setNumAdults(Number(numAdults) - 1);
    }
  };

  const handleChangeAdults = e => {
    setNumAdults(e.target.value);
  };

  return (
      <div className="cartItem">
        <h5 className="tour_name">Du lịch huế cố đô huế khu du lich co do hue</h5>
        <div className="tour_amount">
          <div className="tour_amount--child">
            <div className="title_input">Trẻ em: </div>
            <button type="button" onClick={decNumChild}>
              <BiMinus />
            </button>
            <input
              type="number"
              value={numChild}
              onChange={handleChangeChild}
            ></input>
            <button type="button" onClick={incNumChild}>
              <BiPlus />
            </button>
          </div>
          <div className="tour_amount--adults">
            <div className="title_input">Người lớn: </div>
            <button type="button" onClick={decNumAdults}>
              <BiMinus />
            </button>
            <input
              type="number"
              value={numAdults}
              onChange={handleChangeAdults}
            ></input>
            <button type="button" onClick={incNumAdults}>
              <BiPlus />
            </button>
          </div>
        </div>
        <div className="tour_price">1,000,000 VNĐ</div>
        <div className='delete_button'>
          <ImCancelCircle ></ImCancelCircle>
        </div>
        
      </div>
  );
};

export default CartItem;
