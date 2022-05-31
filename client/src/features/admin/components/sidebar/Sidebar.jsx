import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonIcon from '@mui/icons-material/Person';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Admin Panel</span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN MENU</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">LISTS MENU</p>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <Inventory2Icon className="icon" />
            <span>Employees</span>
          </li>
          <li>
            <ProductionQuantityLimitsIcon className="icon" />
            <span>Bills</span>
          </li>
          <p className="title">SERVICES</p>
          <li>
            <HealthAndSafetyIcon className="icon" />
            <span>Tour</span>
          </li>
          <li>
            <PsychologyIcon className="icon" />
            <span>Hotel</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Car</span>
          </li>
          <p className="title">Event</p>
          <li>
            <QueryStatsIcon className="icon" />
            <span>event</span>
          </li>
          <p className="title">ACCOUNT</p>
          <li>
            <PersonIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
