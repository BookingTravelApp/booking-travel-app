import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import CartApi from '../../api/cartApi';
import moment from 'moment';
import style from './style_cart.css';

const Carts = () => {
    const navigate = useNavigate();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        CartApi.getAll().then(res => {
            setCart(res.data.listCart);            
        });  
    }, []);
        
    const totalPrice = cart.reduce(
        (prePrice, item) => prePrice + item.service.price*item.numberOfChild/2 + 
                        item.service.price*(item.numberOfPeople - item.numberOfChild), 0
    );

    const ShowNotiFy = () => {
        alert("Bạn đã đặt dịch vụ thành công \nHệ thống sẽ liên hệ với bạn ngay bây giờ.")
    }

    const onRowClick = (item) => {
        switch (item.service.categoryId) {
            case '2858d9da-0964-4b82-b9fa-44b418807839': //Car rental
                navigate(`/carHireDetail/${item.service.slug}`);
                break;
            case '554f6885-7d8b-409d-8cbe-de03d12729ec': //Hotel
                navigate(`/hotelDetail/${item.service.slug}`);
                break;
            case '5a8309df-0a49-40e8-a700-8032e8ff58a6': //Hotel
                navigate(`/tourDetail/${item.service.slug}`);
                break;
            default:
                break;
        }
    }

  return (
    <div className="container">
        <table class="table">
            <thead>
                <tr>
                    <th>TÊN DỊCH VỤ</th>
                    <th>SỐ LƯỢNG</th>
                    <th>THỜI GIAN</th>
                    <th>GIÁ TIỀN</th>
                </tr>
            </thead>
            <tbody>
                {     
                        cart.map((item, index) => (
                            <tr key={index} onClick={() => onRowClick(item)}>
                                <th>{item.service.name}</th> 
                                {
                                    item.numberOfPeople == 0 ? 
                                    <th>Số lượng: {item.amount}</th> : 
                                    <th>Số lượng trẻ em: {item.numberOfChild} <br/>
                                        Số lượng người lớn: {item.numberOfPeople - item.numberOfChild}
                                    </th>
                                }
                                <th>{new Date(item.createdAt).toLocaleString('vi-VN', {
                                    day: 'numeric',
                                    month: 'long',
                                    year: 'numeric',
                                })}</th> 
                                <th>
                                    {(item.numberOfChild*item.service.price/2 + 
                                        (item.numberOfPeople - item.numberOfChild)*item.service.price ).
                                    toLocaleString('vi', {style : 'currency', currency : 'VND'})
                                    }
                                </th>
                            </tr>
                        ))
                } 
            </tbody>
        </table>    
        <div className="total-book">
            <div className="total-price">
                <label>TỔNG TIỀN: </label>
                {(totalPrice+0).toLocaleString('vi', {style : 'currency', currency : 'VND'})} 
            </div>
            <div className="book-service">
                <button onClick={ShowNotiFy}>Đặt ngay</button>
            </div>
        </div>  
    </div>
  )
}

export  default Carts;