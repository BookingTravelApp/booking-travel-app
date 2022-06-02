import React, { useEffect, useState } from 'react';
import billApi from '../../../../api/billApi';

const BillManager = () => {
  const [listBill, setListBill] = useState([]);
  useEffect(() => {
    billApi
      .getAll()
      .then(response => {
        setListBill(response.data.billList);
      })
      .catch(error => {
        console.log('Failed to fetch BillList:',error);
      });
  }, []);

  // const [BillList, setListBill] = useState([]); 

  // useEffect(() => {
  //   const BillList = async () => {
  //     try {
  //       const response = await billApi.getAll();
  //       console.log(response.data);
  //     }
  //     catch(error){
  //       console.log('Failed to fetch BillList:', error);
  //     }
  //   }
  //   BillList();
  // }, []);

  return (
    <div>Bill</div>
  )
  // <div className="list-user-container">
  /* <div className="title">
    Service
    { listServices }
  </div>
  <div className="list-user-content">
    {listServices && listServices.length > 0 && 
      listServices.map((item, index) => {
        return (
          <div className="child" key={item.id}>
            {index + 1} - {item.name} - {item.price}
          </div>
        )
      })
    }
  </div> */
// </div>);
};

export default BillManager;
