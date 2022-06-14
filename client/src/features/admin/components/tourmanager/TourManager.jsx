import React from 'react';
import './tourmanager.scss';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import serviceApi from '../../../../api/serviceApi';
import { useState, useEffect } from 'react';
import { Table, Space, Input, Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
const { Search } = Input;

const TourManager = () => {
  const [listTour, setListTour] = useState([]);
  const [listTourAll, setListTourAll] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalImageVisible, setIsModalImageVisible] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [modelCurrentAction, setModelCurrentAction] = useState(false);

  useEffect(() => {
    serviceApi
      .getTourList()
      .then(response => {
        setListTourAll(response.data.tourList);
        setListTour(response.data.tourList);
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
    const filteredData = listTourAll.filter(
      entry =>
        entry.id.includes(searchValue) ||
        entry.name.includes(searchValue) ||
        entry.price == searchValue
    );
    setListTour(filteredData);
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
        title="Add new tour"
        visible={isModalAddVisible}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >
        <div class="form-group">
          <label for="name">Name: </label>
          <input type="name" class="form-control" id="name" placeholder="Enter name"></input>
        </div>
        
        <div class="form-group">
          <label for="name">Description: </label>
          <input type="description" class="form-control" id="description" placeholder="Enter description"></input>
        </div>

        <div class="form-group">
          <label for="name">Price: </label>
          <input type="price" class="form-control" id="price" placeholder="Enter price (VND)"></input>
        </div>

        <label>Is active: </label>
        <select name="gender" id="gender">
          <option value="nam">True</option>
          <option value="nu">False</option>
        </select>

        <label for="date">Create at: </label>
          <input id="createat" type="date"  name="createat"></input>
        <label for="date">Update at: </label>
          <input id="updateat" type="date"  name="updateat"></input>
      </Modal>
      <Modal
        title="Image Modal"
        visible={isModalImageVisible}
        onOk={handleImageOk}
        onCancel={handleImageCancel}
      >
        <div class="form-group">
          <label for="name">Name: </label>
          <input type="name" class="form-control" id="name" value={modelCurrentAction.name} readonly></input>
        </div>

        <div class="form-group">
          <label for="name">Description: </label>
          <input type="description" class="form-control" id="description" placeholder="Enter description" value={modelCurrentAction.description} readonly></input>
        </div>

        <div class="form-group">
          <label for="name">Price: </label>
          <input type="price" class="form-control" id="price" placeholder="Enter price (VND)" value={modelCurrentAction.price}></input>
        </div>

        <label>Is active: </label>
        <select name="gender" id="gender" value={modelCurrentAction.gender}>
          <option value="nam">True</option>
          <option value="nu">False</option>
        </select>

        <label for="date">Create at: </label>
          <input id="createat" type="date"  name="createat" value={modelCurrentAction.createdAt}></input>
        <label for="date">Update at: </label>
          <input id="updateat" type="date"  name="updateat" value={modelCurrentAction.updatedAt}></input>
      </Modal>
      <Modal
        title="Update Modal"
        visible={isModalUpdateVisible}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
      >
        <div class="form-group">
          <label for="name">Name: </label>
          <input type="name" class="form-control" id="name" value={modelCurrentAction.name}></input>
        </div>
        
        <div class="form-group">
          <label for="name">Description: </label>
          <input type="description" class="form-control" id="description" placeholder="Enter description" value={modelCurrentAction.description}></input>
        </div>

        <div class="form-group">
          <label for="name">Price: </label>
          <input type="price" class="form-control" id="price" placeholder="Enter price (VND)" value={modelCurrentAction.price}></input>
        </div>

        <label>Is active: </label>
        <select name="gender" id="gender" value={modelCurrentAction.gender}>
          <option value="nam">True</option>
          <option value="nu">False</option>
        </select>

        <label for="date">Create at: </label>
          <input id="createat" type="date"  name="createat" value={modelCurrentAction.createdAt}></input>
        <label for="date">Update at: </label>
          <input id="updateat" type="date"  name="updateat" value={modelCurrentAction.updatedAt}></input>
        
      </Modal>
      <Modal
        title="Delete Modal"
        visible={isModalDeleteVisible}
        onOk={handleDeleteOk}
        onCancel={handleDeleteCancel}
      >
        <p>Are you sure to delete "{modelCurrentAction.name}"</p>
        
      </Modal>
      <div className="tour-utilities">
        <div className="btn-add-tour" onClick={showAddModal}>
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
      <div className="tour-table-container">
        <Table
          className="tour-table"
          scroll={{
            x: 1200,
          }}
          columns={columns}
          dataSource={listTour}
        />
      </div>
    </>
  );
};

export default TourManager;
