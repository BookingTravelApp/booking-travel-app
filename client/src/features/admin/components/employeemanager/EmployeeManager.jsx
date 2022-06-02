import React, { useEffect, useState } from 'react';
import categoryApi from '../../../../api/categoryApi';

const EmployeeManager = () => {

  const [CategoryList, setCategoryList] = useState([]); 

  useEffect(() => {
    const CategoryList = async () => {
      try {
        const response = await categoryApi.getAll();
        console.log(response.data);
      }
      catch(error){
        console.log('Failed to fetch CategoryList:', error);
      }
    }
    CategoryList();
  }, []);
  return <div>CategoryList</div>;
};

export default EmployeeManager;
