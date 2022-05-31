import React, { useState } from 'react';
import { AiTwotoneEdit } from 'react-icons/ai';
import { BiUserCircle } from 'react-icons/bi';
import { FaUserLock } from 'react-icons/fa';
import './style.css';

const Profile = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [editPassword, setEditPassword] = useState(false);


  return (
    <div className="container">
      <div className="title">Thông tin cá nhân</div>
      <div className="image_user">
        <img
          src="http://ativn.edu.vn/wp-content/uploads/2018/03/user.png"
          width={'100px'}
        ></img>
        <AiTwotoneEdit className="icon_edit_img" />
      </div>
      <div className="info">
        <div className="nav">
          <label>Trang tài khoản cá nhân</label>
          <div
            className="nav_info_user"
            onClick={() => {
              setShowInfo(true);
              setEditPassword(false);
            }}
          >
            <BiUserCircle className="icon" />
            <div>Thông tin cá nhân</div>
          </div>
          <div 
            className="nav_key_user"
            onClick={()=>{
                setShowInfo(false);
                setEditPassword(true);
            }}    
            >
            <FaUserLock className="icon" />
            <div>Bảo mật</div>
          </div>
        </div>
        <form className="form_info" style={{ display: showInfo ? 'block' : 'none' }}>
          <label className="title">Thông tin cá nhân</label>
          <div className="username">
            <label>Tên: </label>
            <input type="text" value={'Phương Trâm'}></input>
          </div>
          <div className="gender">
            <label>Giới tính</label>
            <div className="gender_radio">
              <div className="gender_male">
                <input type="radio" id="gender" value="Male"></input>
                <label>Nam</label>
              </div>
              <div className="gender_female">
                <input type="radio" id="gender" value="Female"></input>
                <label>Nữ</label>
              </div>
            </div>
          </div>
          <div className="birthday">
            <label>Ngày sinh</label>
            <input type="date"></input>
          </div>
          <div className="number_phone">
            <label>Số điện thoại</label>
            <input type="text" value="0799463926"></input>
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" value="ttptram562001@gmail.com"></input>
          </div>
          <div className="button">
            <button className="btn_edit" type="submit">
              Thay đổi
            </button>
            <button className="btn_reset" type="reset">
              Cancel
            </button>
          </div>
        </form>
        <form className="form_password" style={{ display: editPassword ? 'block' : 'none' }}>
          <label className="title">Thay đổi mật khẩu</label>
          <div className="old_password">
            <label>Mật khẩu cũ</label>
            <input type="password"></input>
          </div>
          <div className="new_password">
            <label>Mật khẩu mới</label>
            <input id="new_password_1" type="password"></input>
          </div>
          <div className="new_password">
            <label>Xác nhận mật khẩu mới</label>
            <input id="new_password_2" type="password"></input>    
          </div>
          <button className="btn_edit" type="submit">
            Xác nhận
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
