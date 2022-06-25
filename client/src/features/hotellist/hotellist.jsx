import style from './style_hotellist.css';
import {IoMdLaptop} from 'react-icons/io';
import {AiOutlineWifi} from 'react-icons/ai';
import {FaParking} from 'react-icons/fa';
import {GrCafeteria} from 'react-icons/gr';
import {GiCoffeeCup} from 'react-icons/gi'
import { useEffect, useState } from 'react';
import ServiceApi from '../../api/serviceApi';
import Item from 'antd/lib/list/Item';
import { Link } from 'react-router-dom';
const HotelList = () => {

    const [listHotel, setListHotel] = useState([]);

    useEffect(() => {
        ServiceApi.getHotelList().then( res => {
            setListHotel(res.data.hotelBookingList);
        })
    }, []);
    console.log(listHotel);
  return (
    <div className="container">
        <div className="introduce-one">
            <div className="introduce-title">Tìm kiếm khách sạn với 
            dịch vụ tốt nhất</div>
            <div className="introduce-des">Để có một phòng ngủ thoải mái trên diện tích chỉ 
                15m2 không phải là điều dễ dàng đối với bất kỳ nhà thiết kế nào.
            </div>
            <div className="introduce-img">
                <div className="introduce-img--left">
                    <img src="https://pix10.agoda.net/hotelImages/2817185/-1/4406a970306a452300f94532410dab2c.jpg?ca=10&ce=1&s=1024x768" alt="" width={'740px'}/>
                </div>
                <div className="introduce-img--right">
                    <img src="https://giadinh.mediacdn.vn/296230595582509056/2021/4/17/photo-1-16186575563361235122970.jpg" alt="" width={'350px'} />
                    <img src="https://www.vietnambooking.com/wp-content/uploads/2018/06/tieu-chuan-xep-hang-sao-khach-san-4-1-2019-e1578107835581.jpg" alt="" width={'350px'}/>
                </div>
            </div>
        </div>
        <div className="introduce-two">
            <div className="introduce-title">Cơ sở vật chất & dịch vụ</div>
            <div className="introduce-des">Để có một phòng ngủ thoải mái trên diện tích chỉ 
                15m2 không phải là điều dễ dàng đối với bất kỳ nhà thiết kế nào.
            </div>
            <div className="introduct-list">
                <div className="introduce-card">
                    <IoMdLaptop className='card-icon'/>
                    <div className="introduce-card-title">
                        Không gian riêng tư
                    </div>
                    <div className="introduce-cart-txt">
                        Để có một phòng ngủ thoải mái trên diện tích chỉ 
                    </div>
                </div>
                <div className="introduce-card">
                    <AiOutlineWifi className='card-icon'/>   
                    <div className="introduce-card-title">
                        Wifi miễn phí
                    </div>
                    <div className="introduce-cart-txt">
                        Để có một phòng ngủ thoải mái trên diện tích chỉ 
                    </div>
                </div>
                <div className="introduce-card">
                    <FaParking className='card-icon'/>
                    <div className="introduce-card-title">
                        Bãi đỗ xe
                    </div>
                    <div className="introduce-cart-txt">
                        Để có một phòng ngủ thoải mái trên diện tích chỉ 
                    </div>
                </div>
                <div className="introduce-card">
                    <GiCoffeeCup className='card-icon'/>
                    <div className="introduce-card-title">
                        Ăn sáng
                    </div>
                    <div className="introduce-cart-txt">
                        Để có một phòng ngủ thoải mái trên diện tích chỉ 
                    </div>
                </div>
                
            </div>    
        </div>
        {/* */}
        <div className="hotel">
            <div className="introduce-title">
                Một số khách sạn nổi tiếng
            </div>
            <div className="hotel-list">
                {
                    listHotel.map((item, index) => (
                        <div className="hotel-card">
                            <div className="hotel-img">
                                <img src="https://hotel84.com/userfiles/image/hotel/hanoi/LaSiestaDiamond/best-view-La-Siesta-Diamond.jpg" alt="" width={"230px"}/>
                            </div>
                            <div className="hotel-info">
                                <div className="hotel-name">{item.name}</div>
                                <div className="hotel-guide">{item.guide}</div>
                                <div className="hotel-price">
                                    <label>GIÁ: </label>
                                    {item.price} VNĐ
                                </div>
                                <Link to={`/hotelDetail/${item.slug}`}>
                                        <button className='detail-btn'>Xem chi tiết</button>
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default HotelList;
