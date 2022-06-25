import React, { useState } from 'react';
import style from './style_carlist.css';
import {BiGridSmall} from 'react-icons/bi';
import {AiOutlineEye} from 'react-icons/ai';
import {AiOutlineReload} from 'react-icons/ai';
import {AiFillCar} from 'react-icons/ai';
import { useEffect } from 'react';
import ServiceApi from '../../api/serviceApi';
import { Link } from 'react-router-dom';
const CarHireList = () => {

    const [list, setList] = useState([]);

    useEffect(() => {
        ServiceApi.getCarHireList().then( res => {
            setList(res.data.carRentalList);
        })
    }, []);

  return (
    <div className="container">
        <div className="introduce">
            <div className="introduce-list">
                <div className="introduce-item">
                    <BiGridSmall className="introduce-icon"/>
                    <div className="introduce-title">
                        Mạng lưới rộng lớn
                    </div>
                    <div className="introduce-inner">
                        Quy mô lớn với hơn 2.000 xe trên toàn quốc.
                    </div>
                </div>

                <div className="introduce-item">
                    <AiOutlineEye className="introduce-icon"/>
                    <div className="introduce-title">
                        Minh bạch về giá
                    </div>
                    <div className="introduce-inner">
                        Xem trước chi phí để khách hàng thoải mái lựa chọn.
                    </div>
                </div>

                <div className="introduce-item">
                    <AiOutlineReload className="introduce-icon"/>
                    <div className="introduce-title">
                        Dịch vụ linh hoạt
                    </div>
                    <div className="introduce-inner">
                        Khách hàng dễ dàng đặt & hủy dịch vụ.
                    </div>
                </div>
                <div className="introduce-item">
                    <AiFillCar className="introduce-icon"/>
                    <div className="introduce-title">
                        Chất lượng hàng đầu
                    </div>
                    <div className="introduce-inner">
                        Máy móc vận hành ổn định - tiết kiệm xăng.
                    </div>
                </div>
            </div>
        </div>
        <div className="car-list">
            {
                list.map((item, index) => (                    
                        <div className="car-item" key={index}>
                            <div className="car-image">                            
                                <img src="http://product.hstatic.net/200000281285/product/sirius_phanh_co_trang_xanh_75dff4decc974e7393d2e6ef3f913c8c_grande.png" alt="" width={"200px"}/>
                            </div>
                            <div className="car-info">
                                <div className="car-name">{item.name}</div>
                                <div className="car-title">
                                    {
                                        item.title.split('-').map((title) => (
                                            <div>{title}</div>
                                        ))
                                    }
                                </div>
                                <div className="car-price"><label>GIÁ:</label>{item.price} VNĐ/ Ngày</div>
                                <Link to={`/carHireDetail/${item.slug}`}>
                                    <button className='detail-btn'>Xem chi tiết</button>
                                </Link>
                            </div>
                        </div>         
                ))
            }
        </div>
    </div>
    
  )
}

export default CarHireList;
