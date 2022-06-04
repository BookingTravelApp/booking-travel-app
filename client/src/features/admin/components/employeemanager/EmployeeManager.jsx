import React, { useEffect, useState } from 'react';
import employeeApi from '../../../../api/employeeApi';
const EmployeeManager = () => {

  const [EmployeeList, setEmployeeList] = useState([]); 

  useEffect(() => {
    employeeApi
      .getAll()
      .then(response => {
        setEmployeeList(response.data.EmployeeList);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Failed to fetch EmployeeList:', error);
      });
  }, []);
  return <div>EmployeeList</div>;
};

export default EmployeeManager;
