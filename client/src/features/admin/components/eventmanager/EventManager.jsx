import React, { useEffect, useState } from 'react';
import eventApi from '../../../../api/eventApi';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import './eventmanager.scss';
import { Table, Space, Input, Modal, Button } from 'antd';
import 'antd/dist/antd.css';
import moment from 'moment';
import UploadBox from '../../../../components/upload-box/upload-box'
const { Search } = Input;

const EventManager = () => {
  const [listEvent, setListEvent] = useState([]);
  const [isModalAddVisible, setIsModalAddVisible] = useState(false);
  const [isModalImageVisible, setIsModalImageVisible] = useState(false);
  const [isModalUpdateVisible, setIsModalUpdateVisible] = useState(false);
  const [isModalDeleteVisible, setIsModalDeleteVisible] = useState(false);
  const [modelCurrentAction, setModelCurrentAction] = useState(false);

  useEffect(() => {
    eventApi
      .getAll()
      .then(response => {
        setListEvent(response.data.eventList);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Failed to fetch EventList:',error);
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

  const showImageModal = () => {
    setIsModalImageVisible(true);
  };
  const handleImageOk = () => {
    setIsModalImageVisible(false);
  };
  const handleImageCancel = () => {
    setIsModalImageVisible(false);
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
      title: 'id',
      dataIndex: 'id',
      filterMode: 'tree',
      width: 200,
      fixed: 'left',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      width: 200,
      fixed: 'left',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      width: 550,
      sorter: (a, b) => a.description.length - b.description.length,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      width: 120,
    },
    {
      title: 'Is active',
      dataIndex: 'is_active',
      render: text => String(text),
      sorter: (a, b) => a.is_active - b.is_active,
      width: 100,
    },
    {
      title: 'Create At',
      dataIndex: 'createdAt',
      key: 'createdAt',
      sorter: (a, b) => moment(a.createdAt).unix() - moment(b.createdAt).unix(),
      width: 200,
    },
    {
      title: 'Update At',
      dataIndex: 'updatedAt',
      key: 'updatedAt',
      sorter: (a, b) => moment(a.updatedAt).unix() - moment(b.updatedAt).unix(),
      width: 200,
    },
    {
      title: 'Action',
      key: 'action',
      width: 280,
      fixed: 'right',
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
        title="Add new event"
        visible={isModalAddVisible}
        onOk={handleAddOk}
        onCancel={handleAddCancel}
      >               
        <div class="form-group">
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
          <input id="birthday" type="date"  name="birthday"></input>

      </Modal>
      <Modal
        title="Show user's informations" 
        visible={isModalImageVisible}
        onOk={handleImageOk}
        onCancel={handleImageCancel}
      >
        <p>Show {modelCurrentAction.name}'s informations</p>
        <div class="form-group">
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
          <input id="birthday" type="date"  name="birthday" value={modelCurrentAction.date}></input>
      </Modal>
      <Modal
        title="Update user's informations"
        visible={isModalUpdateVisible}
        onOk={handleUpdateOk}
        onCancel={handleUpdateCancel}
      >
        <p>Update {modelCurrentAction.name}'s informations</p>
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
          <input id="birthday" type="date"  name="birthday" value={modelCurrentAction.date}></input>

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
      <div className="event-utilities">
        <div className="btn-add-event" onClick={showAddModal}>
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
      <div className="event-table-container">
        <Table
          className="event-table"
          scroll={{
            x: 1200,
          }}
          columns={columns}
          dataSource={listEvent}
        />
      </div>
    </>
  );
};

export default EventManager;
