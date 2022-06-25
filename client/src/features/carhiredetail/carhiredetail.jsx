import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ServiceApi from '../../api/serviceApi';
import style from './style_carhiredetail.css';
import tourApi from '../../api/tourApi';

const CareHireDetail = () => {

    const slug = useParams().slug;
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [guide, setGuide] = useState('');
    const [des, setDes] = useState('')
    const [price, setPrice] = useState();

    useEffect(() => {
        ServiceApi
          .getService(slug)
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
            <div className="car-img">
                <img src="http://product.hstatic.net/200000281285/product/sirius_phanh_co_trang_xanh_75dff4decc974e7393d2e6ef3f913c8c_grande.png"></img>
            </div>
            <div className="car-name">{name}</div>
            <div className="car-description">{des}</div>
            <div className="car-title">
            {   
                title.split('-').map((title) => (
                    <div>- {title}</div>
                ))}
            </div>
            <div className="car-guide">
                <label>Địa chỉ:</label>
                {guide}
            </div>
            <div className="car-price">
                <label>GIÁ CHO THUÊ: </label>{price} VNĐ/ngày
            </div>
            <div className="car-cart-book">
                <button className='car-cart'>Thêm vào giỏ hàng</button>
                <button className='car-book'>Đặt xe</button>
            </div>
        </div>
    )
}

export default CareHireDetail
