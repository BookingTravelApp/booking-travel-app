import React, { useEffect, useState } from 'react';
import userApi from '../../../../api/userApi';
const EmployeeManager = () => {

  const [listEmployee, setListEmployee] = useState([]); 

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
  return <div>EmployeeList</div>;
};

export default EmployeeManager;
