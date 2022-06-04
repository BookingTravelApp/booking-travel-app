import React, { useEffect, useState } from 'react';
import eventApi from '../../../../api/eventApi';

const EventManager = () => {
  const [listEvent, setListEvent] = useState([]);

  useEffect(() => {
    eventApi
      .getAll()
      .then(response => {
        setListEvent(response.data.listEvent);
      })
      .catch(error => {
        console.log('Failed to fetch EventList:',error);
      });
  }, []);
  return <div>EventManager</div>;
};

export default EventManager;
