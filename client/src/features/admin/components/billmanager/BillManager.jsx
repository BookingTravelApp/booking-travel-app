import React from 'react';
import billApi from '../../../../api/billApi';
import { useState, useEffect } from 'react';

const BillManager = () => {
  const [listBill, setListBill] = useState([]);
  useEffect(() => {
    billApi
      .getAll()
      .then(response => {
        setListBill(response.data.billList);
        console.log(response.data);
      })
      .catch(error => {
        console.log('Failed to fetch BillList:', error);
      });
  }, []);
  return <div>BillManager</div>;
};

export default BillManager;
