import React, { useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';
import { Table, Space, Input, Modal, Button } from 'antd';

import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
const { Search } = Input;

const EmployeeManager = () => {

  const [listEmployee, setListEmployee] = useState([]); 

  const [isModalAddVisible, setIsModalAddVisible] = useState(false);

  useEffect(() => {
    userApi
      .getEmployeeList()
      .then(response => {
        setListEmployee(response.data.listEmployee);
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
  return 
  <>
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
  </>;
};

export default EmployeeManager;
