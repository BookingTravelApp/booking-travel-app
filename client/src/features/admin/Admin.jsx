import './home.scss';
import Sidebar from './components/sidebar/Sidebar';
import Navbar from './components/navbar/Navbar';
import Statistical from './components/statistical/Statistical';
import UserManager from './components/usermanager/UserManager';
import EmployeeManager from './components/employeemanager/EmployeeManager';
import BillManager from './components/billmanager/BillManager';
import TourManager from './components/tourmanager/TourManager';
import HotelManager from './components/hotelmanager/HotelManager';
import CarManager from './components/carmanager/CarManager';
import EventManager from './components/eventmanager/EventManager';

const Amin = ({ adminRoute }) => {
  var body = <></>;
  if (adminRoute == 'dashboard') body = <Statistical />;
  else if (adminRoute == 'user') body = <UserManager />;
  else if (adminRoute == 'employee') body = <EmployeeManager />;
  else if (adminRoute == 'bill') body = <BillManager />;
  else if (adminRoute == 'tour') body = <TourManager />;
  else if (adminRoute == 'hotel') body = <HotelManager />;
  else if (adminRoute == 'car') body = <CarManager />;
  else if (adminRoute == 'event') body = <EventManager />;
  else body = <Statistical />;
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        {body}
      </div>
    </div>
  );
};

export default Amin;
