import React, { useEffect, useState } from 'react';
import categoryApi from '../../../../api/categoryApi';

const BillManager = () => {

  const [BillList, setListBill] = useState([]); 

  useEffect(() => {
    const BillList = async () => {
      try {
        const response = await categoryApi.getAll();
        console.log(response.data);
      }
      catch(error){
        console.log('Failed to fetch BillList:', error);
      }
    }
    BillList();
  }, [])

  return (<div className="list-user-container">
  {/* <div className="title">
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
  </div> */}
</div>);
};

export default BillManager;
