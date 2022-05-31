import { Container } from '@chakra-ui/react';
import React, { useState } from 'react';
import CartItem from './cartitem';
import style from './style.css';

const Cart = () => {

  const notify = () => {
    alert("Bạn đã đặt tour thành công!\nNhân viên sẽ gọi đến bạn ngay bây giờ.");
  }


  return (
    <div className='container'>
      <div className="title_cart">
        <div className="title_tour tittle_tour--name">TÊN SẢN PHẨM</div>
        <div className="title_tour title_tour--quanlity">SỐ LƯỢNG</div>
        <div className="title_tour title_tour--price">TỔNG TIỀN</div>
      </div>

      <div className='check_cartItem'>
        <input type={'checkbox'} id={'key'}></input>
        <CartItem />  
      </div>

      <div className='check_cartItem'>
        <input type={'checkbox'} id={'key'}></input>
        <CartItem />  
      </div>

      <div className='check_cartItem'>
        <input type={'checkbox'} id={'key'}></input>
        <CartItem />  
      </div>

      <div className="buy_tour">
        <div className="total_price">
          <h3>Tổng: 1,256,000 VNĐ</h3>
        </div>
        <button className="button_buy" type="submit" onClick={notify}>
          Đặt tour
        </button>
      </div>
    </div>
  );
};

export default Cart;
