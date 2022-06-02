import React, { useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';

const UserManager = () => {
  const [listUser, setListUser] = useState([]);

  useEffect(() => {
    userApi
      .getUserList()
      .then(response => {
        setListUser(response.data.billList);
      })
      .catch(error => {
        console.log('Failed to fetch BillList:',error);
      });
  }, []);
  // const [UserList, setUserList] = useState([]); 

  // useEffect(() => {
  //   const UserList = async () => {
  //     try {
  //       const response = await userApi.getAll();
  //       console.log(response.data.users);
  //     }
  //     catch(error){
  //       console.log('Failed to fetch UserList:', error);
  //     }
  //   }
  //   UserList();
  // }, []);
  return <div>UserManager</div>;
};

export default UserManager;
