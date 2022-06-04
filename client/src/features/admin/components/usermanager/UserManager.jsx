import React, { useEffect, useState } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import userApi from '../../../../api/userApi';
import './usermanager.scss';
import 'antd/dist/antd.css';
import { ClassNames } from '@emotion/react';
import moment from 'moment';
import { Table, Space, Input, Modal, Button } from 'antd';
const { Search } = Input;


const UserManager = () => {
  const [listUser, setListUser] = useState([]);

  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalShowVisible, setIsModalShowVisible] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [modelCurrentAction, setModelCurrentAction] = useState(false);

  useEffect(() => {
    userApi
      .getAll()
      .then(response => {
        setListUser(response.data.listUser);
      })
      .catch(error => {
        console.log('Failed to fetch UserList:',error);
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
      title: 'Action',
      key: 'action',
      render: (index, record) => (
        <Space className="action-button" size="middle">
          <button
            type="button"
            class="btn btn-primary"
            onClick={() => {
              setModelCurrentAction(record);
              showShowModal();
            }}
          >
            Show
          </button>
          <button
            type="button"
            class="btn btn-success"
            onClick={() => {
              setModelCurrentAction(record);
              showUpdateModal();
            }}
          >
            Update
          </button>
          <button
            type="button"
            class="btn btn-danger"
            onClick={() => {
              setModelCurrentAction(record);
              showDeleteModal();
            }}
          >
            Delete
          </button>
        </Space>
      ),
    },
  ]

  return (
    <>
      <Modal
        title="Add Modal"
        visible={isModalAddVisible}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >
        <p>Model Add</p>
      </Modal>
      <Modal
        title="Show Modal"
        visible={isModalShowVisible}
        onOk={handleShowOk}
        onCancel={handleShowCancel}
      >
        <p>Show Image</p>
        {modelCurrentAction.id}
        {modelCurrentAction.name}
      </Modal>
      <Modal
        title="Update Modal"
        visible={isModalUpdateVisible}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
      >
        <p>Model Update</p>
        {modelCurrentAction.name}
      </Modal>
      <Modal
        title="Delete Modal"
        visible={isModalDeleteVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>Model Delete</p>
        {modelCurrentAction.name}
      </Modal>
      <div className="user-utilities">
        <div className="btn-add-user" onClick={showAddModal}>
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
      <div className="user-table-container">
        <Table
          className="user-table"
          scroll={{
            x: 1200,
          }}
          columns={columns}
          dataSource={listUser}
        />
      </div>
    </>
  );
};

export default UserManager;
