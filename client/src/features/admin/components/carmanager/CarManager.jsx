import React from 'react';
import './carmanager.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import serviceApi from '../../../../api/serviceApi';
import { useState, useEffect } from 'react';
import { Table, Space, Input, Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
const { Search } = Input;

const CarManager = () => {
  const [listCar, setListCar] = useState([]);
  const [listCarAll, setListCarAll] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalImageVisible, setIsModalImageVisible] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [modelCurrentAction, setModelCurrentAction] = useState(false);

  useEffect(() => {
    serviceApi
      .getCarList()
      .then(response => {
        setListCarAll(response.data.carRentalList);
        setListCar(response.data.carRentalList);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);
  const showAddModal = () => setIsModalAddVisible(true);
  const handleAddOk = () => setIsModalAddVisible(false);
  const handleAddCancel = () => setIsModalAddVisible(false);
  const showImageModal = () => setIsModalImageVisible(true);
  const handleImageOk = () => setIsModalImageVisible(false);
  const handleImageCancel = () => setIsModalImageVisible(false);
  const showUpdateModal = () => setIsModalUpdateVisible(true);
  const handleUpdateOk = () => setIsModalUpdateVisible(false);
  const handleUpdateCancel = () => setIsModalUpdateVisible(false);
  const showDeleteModal = () => setIsModalDeleteVisible(true);
  const handleDeleteOk = () => setIsModalDeleteVisible(false);
  const handleDeleteCancel = () => setIsModalDeleteVisible(false);

  const searchClick = () => {
    const filteredData = listCarAll.filter(
      entry =>
        entry.id.includes(searchValue) ||
        entry.name.includes(searchValue) ||
        entry.price == searchValue
    );
    setListCar(filteredData);
  };
  const searchChange = event => setSearchValue(event.target.value);

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      filterMode: 'tree',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 500,
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Is active',
      dataIndex: 'is_active',
      render: text => String(text),
      sorter: (a, b) => a.is_active - b.is_active,
    },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
    },
    {
      title: 'Update At',
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
              showImageModal();
            }}
          >
            Image
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
  ];
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
        title="Image Modal"
        visible={isModalImageVisible}
        onOk={handleImageOk}
        onCancel={handleImageCancel}
      >
        <p>Model Image</p>
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
      <div className="car-utilities">
        <div className="btn-add-car" onClick={showAddModal}>
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
          allowClear
          className="search"
          placeholder="input search text"
          enterButton
          onSearch={searchClick}
          value={searchValue}
          onChange={searchChange}
        />
      </div>
      <div className="car-table-container">
        <Table
          className="car-table"
          scroll={{
            x: 1200,
          }}
          columns={columns}
          dataSource={listCar}
        />
      </div>
    </>
  );
};

export default CarManager;
