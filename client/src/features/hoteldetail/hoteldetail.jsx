import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceApi from '../../api/serviceApi';
import style from './style_hoteldetail.css';
import FBComment from '../../components/social/FbComment';
const HotelDetail = () => {
  const slug = useParams().slug;
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [guide, setGuide] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState();

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
  console.log(typeof title);
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
            <button className="hotel-cart">Thêm vào giỏ hàng</button>
            <button className="hotel-book">Đặt phòng</button>
          </div>
        </div>
      </div>
      <FBComment />
    </div>
  );
};

export default HotelDetail;
