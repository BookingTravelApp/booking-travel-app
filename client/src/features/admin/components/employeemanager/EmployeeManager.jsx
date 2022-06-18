import React, { useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';
import { Table, Space, Input, Modal, Button } from 'antd';

import './employeemanager.scss';
import 'antd/dist/antd.css';
import { ClassNames } from '@emotion/react';
import moment from 'moment';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
const { Search } = Input;

const EmployeeManager = () => {

  const [listEmployee, setListEmployee] = useState([]); 

  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalShowVisible, setIsModalShowVisible] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [modelCurrentAction, setModelCurrentAction] = useState(false);

  useEffect(() => {
    userApi
      .getEmployeeList()
      .then(response => {
        setListEmployee(response.data.employeeList);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Failed to fetch EmployeeList:', error);
      });
  }, []);

  const showAddModal = () => {
    setIsModalAddVisible(true);
  };
  const handleAddOk = () => {
    setIsModalAddVisible(false);
  };
  const handleAddCancel = () => {
    setIsModalAddVisible(false);
  };

  const showShowModal = () => {
    setIsModalShowVisible(true);
  };
  const handleShowOk = () => {
    setIsModalShowVisible(false);
  };
  const handleShowCancel = () => {
    setIsModalShowVisible(false);
  };

  const showUpdateModal = () => {
    setIsModalUpdateVisible(true);
  };
  const handleUpdateOk = () => {
    setIsModalUpdateVisible(false);
  };
  const handleUpdateCancel = () => {
    setIsModalUpdateVisible(false);
  };

  const showDeleteModal = () => {
    setIsModalDeleteVisible(true);
  };
  const handleDeleteOk = () => {
    setIsModalDeleteVisible(false);
  };
  const handleDeleteCancel = () => {
    setIsModalDeleteVisible(false);
  };

  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
      filterMode: 'tree',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Is active',
      dataIndex: 'active',
      render: text => String(text),
      sorter: (a, b) => a.active - b.active,
    },
    {
      title: 'Phone number',
      dataIndex: 'phone_number',
      render: text => String(text),
      sorter: (a, b) => a.active - b.active,
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      render: text => String(text),
      sorter: (a, b) => a.gender - b.gender,
    },
    {
      title: 'Date of birth',
      dataIndex: 'date_of_birth',
      render: text => String(text),
      sorter: (a, b) => a.date_of_birth - b.date_of_birth,
    },
  ]
  return (
    <>
    <Modal
      title="Add new employee"
      visible={isModalAddVisible}
      onOk={handleAddOk}
      onCancel={handleAddCancel}
    >               
      {/* <div class="form-group">
        <label for="name">Name: </label>
        <input type="name" class="form-control" id="name" placeholder="Enter username"></input>
      </div>
      
      <div class="form-group">
        <label for="name">Phone number: </label>
        <input type="phone_number" class="form-control" id="phone_number" placeholder="Enter phone number"></input>
      </div>

      <label>Is active: </label>
      <select name="isactive" id="isactive">
        <option value="nam">True</option>
        <option value="nu">False</option>
      </select>
      
      <label>Gender: </label>
      <select name="gender" id="gender">
        <option value="nam">Nam</option>
        <option value="nu">Nữ</option>
      </select>
      
      <label for="birthday">Birthday:</label>
        <input id="birthday" type="date"  name="birthday"></input> */}

    </Modal>
    <Modal
      title="Show employee's informations" 
      visible={isModalShowVisible}
      onOk={handleShowOk}
      onCancel={handleShowCancel}
    >
      <p>Show {modelCurrentAction.name}'s informations</p>
      {/* <div class="form-group">
        <label for="name">Name: </label>
        <input type="text" class="form-control" id="name" value={modelCurrentAction.name}></input>
      </div>
      
      <div class="form-group">
        <label for="name">Phone number: </label>
        <input type="text" class="form-control" id="phone_number" value={modelCurrentAction.phone_number}></input>
      </div>
      
      
      <label>Gender: </label>
      <select name="gender" id="gender" value={modelCurrentAction.gender}>
        <option value="nam">Nam</option>
        <option value="nu">Nữ</option>
      </select>
      
      <label for="birthday">Date of birth: </label>
        <input id="birthday" type="date"  name="birthday" value={modelCurrentAction.date}></input> */}
    </Modal>
    <Modal
      title="Update employee's informations"
      visible={isModalUpdateVisible}
      onOk={handleUpdateOk}
      onCancel={handleUpdateCancel}
    >
      {/* <p>Update {modelCurrentAction.name}'s informations</p>
      <label>
        Name: 
        <input type="text" name="name" value={modelCurrentAction.name}/>
      </label>
      
      <label>
        Phone number: 
        <input type="text" name="name" value={modelCurrentAction.phone_number}/>
      </label>
      
      <label>Gender: </label>
      <select name="gender" id="gender" value={modelCurrentAction.gender}>
        <option value="nam">Nam</option>
        <option value="nu">Nữ</option>
      </select>
      
      <label for="birthday">Date of birth: </label>
        <input id="birthday" type="date"  name="birthday" value={modelCurrentAction.date}></input> */}

    </Modal>
    <Modal
      title="Delete Modal"
      visible={isModalDeleteVisible}
      onOk={handleDeleteOk}
      onCancel={handleDeleteCancel}
    >
      <p>Are you sure to delete {modelCurrentAction.name}</p>
      {modelCurrentAction.name}
    </Modal>
    <div className="employee-utilities">
      <div className="btn-add-employee" onClick={showAddModal}>
        <div className="left">
          <div className="percentage positive">
            <AddCircleIcon />
          </div>
          <BookmarksIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}
          />
        </div>
        <div className="right">
          <span className="counter">Add new</span>
        </div>
      </div>
      <Search
        className="search"
        placeholder="Input search text"
        enterButton
      />
    </div>
    <div className="employee-table-container">
      <Table
        className="employee-table"
        scroll={{
          x: 1200,
        }}
        columns={columns}
        dataSource={listEmployee}
      />
    </div>
  </>
  )

};

export default EmployeeManager;
