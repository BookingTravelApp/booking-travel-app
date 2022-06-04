import React, { useState, useEffect } from 'react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';

import billApi from '../../../../api/billApi';
import './billmanager.scss';
import { ClassNames } from '@emotion/react';
import moment from 'moment';
import { Table, Space, Input, Modal, Button } from 'antd';
const { Search } = Input;

const BillManager = () => {

  const [listBill, setListBill] = useState([]);

  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalShowVisible, setIsModalShowVisible] = useState(false);
  const [isModalConfirmVisible, setIsModalConfirmVisible] = useState(false);
  const [isModalCancelVisible, setIsModalCancelVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [modelCurrentAction, setModelCurrentAction] = useState(false);

  useEffect(() => {
    billApi
      .getAll()
      .then(response => {
        setListBill(response.data.listBill);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Failed to fetch BillList:', error);
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

  const showConfirmModal = () => {
    setIsModalConfirmVisible(true);
  };
  const handleConfirmOk = () => {
    setIsModalConfirmVisible(false);
  };
  const handleConfirmCancel = () => {
    setIsModalConfirmVisible(false);
  };

  const showCancelModal = () => {
    setIsModalCancelVisible(true);
  };
  const handleCancelOk = () => {
    setIsModalCancelVisible(false);
  };
  const handleCancelCancel = () => {
    setIsModalCancelVisible(false);
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
      render: text => String(text),
      filterMode: 'tree',
    },
    {
      title: 'User id',
      dataIndex: 'userId',
      render: text => String(text),
      sorter: (a, b) => a.userId - b.userId,
    },
    {
      title: 'Total price',
      dataIndex: 'totalPrice',
      render: text => String(text),
      sorter: (a, b) => a.totalPrice - b.totalPrice,
    },
    {
      title:'Status',
      dataIndex: 'status',
      render: text => String(text),
      sorter: (a, b) => a.totalPrice - b.totalPrice,
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      sorter: (a, b) => moment(a.date).unix() - moment(b.date).unix(),
    },
    {
      title: 'Created At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
    },
    {
      title: 'Updated At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      sorter: (a, b) => moment(a.updatedAt).unix() - moment(b.updatedAt).unix(),
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
              showConfirmModal();
            }}
          >
            Confirm
          </button>
          <button
            type="button"
            class="btn btn-dark"
            onClick={() => {
              setModelCurrentAction(record);
              showCancelModal();
            }}
          >
            Cancel
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
    }

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
        <p>Model Show</p>
        {modelCurrentAction.date},
        {modelCurrentAction.totalPrice},
        {modelCurrentAction.status}
      </Modal>

      <Modal
        title="Confirm Modal"
        visible={isModalConfirmVisible}
        onOk={handleConfirmOk}
        onCancel={handleConfirmCancel}
      >
        <p>Model Confirm</p>
        <p>Are you sure to confirm this bill?</p>
        {modelCurrentAction.date},
        {modelCurrentAction.totalPrice},
        {modelCurrentAction.status}      
      </Modal>

      <Modal
        title="Cancel Modal"
        visible={isModalCancelVisible}
        onOk={handleCancelOk}
        onCancel={handleCancelCancel}
      >
        <p>Model Cancel</p>
        <p>Are you sure to confirm this bill?</p>
        {modelCurrentAction.date},
        {modelCurrentAction.totalPrice},
        {modelCurrentAction.status}  
      </Modal>

      <Modal
        title="Delete Modal"
        visible={isModalDeleteVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>Model Delete</p>
        {modelCurrentAction.date},
        {modelCurrentAction.totalPrice},
        {modelCurrentAction.status}
      </Modal>

      <div className="bill-utilities">
        <div className="btn-add-bill" onClick={showAddModal}>
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

      <div className="bill-table-container">
        <Table
          className="bill-table"
          scroll={{
            x: 1200,
          }}
          columns={columns}
          dataSource={listBill}
        />
      </div>
    </>
  )
};

export default BillManager;
