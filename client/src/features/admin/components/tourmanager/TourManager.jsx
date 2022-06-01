import React from 'react';
import './tourmanager.scss';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import tourApi from '../../../../api/tourApi';
import { useState, useEffect } from 'react';

const TourManager = () => {
  const [tour, setTour] = useState();
  useEffect(() => {
    const tour = tourApi.getTourList();
    setTour(tour);
    console.log(tour);
  }, []);

  return (
    <>
      {tour}
      <div className="btn-add-tour">
        <div className="left">
          <span className="counter">ADD TOUR</span>
        </div>
        <div className="right">
          <div className="percentage positive">
            <KeyboardArrowUpIcon />
          </div>
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{
              color: 'green',
              backgroundColor: 'rgba(0, 128, 0, 0.2)',
            }}
          />
        </div>
      </div>
      <div className="tour-table"></div>
    </>
  );
};

export default TourManager;
