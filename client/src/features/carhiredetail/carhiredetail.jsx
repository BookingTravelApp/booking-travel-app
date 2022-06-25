import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ServiceApi from '../../api/serviceApi';
import style from './style_carhiredetail.css';
import tourApi from '../../api/tourApi';
import FBComment from '../../components/social/FbComment';

const CareHireDetail = () => {
  const slug = useParams().slug;
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [guide, setGuide] = useState('');
  const [des, setDes] = useState('');
  const [price, setPrice] = useState();
  const [img, setImg] = useState('');

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
        setImg(car.images[0].path);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  console.log(typeof title);
  return (
    <div className="container">
      <div className="car-img">
        <img src={img}></img>
      </div>
      <div className="car-name">{name}</div>
      <div className="car-description">{des}</div>
      <div className="car-title">
        {title.split('-').map(title => (
          <div>- {title}</div>
        ))}
      </div>
      <div className="car-guide">
        <label>Địa chỉ:</label>
        {guide}
      </div>
      <div className="car-price">
        <label>GIÁ CHO THUÊ: </label>
        {price} VNĐ/ngày
      </div>
      <div className="car-cart-book">
        <button className="car-cart">Thêm vào giỏ hàng</button>
        <button className="car-book">Đặt xe</button>
      </div>
      <FBComment></FBComment>
    </div>
  );
};

export default CareHireDetail;
