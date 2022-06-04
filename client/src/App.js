import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from './components/header/header.jsx';
import Footer from '../src/components/footer/footer.jsx';
import ButtonSrollTop from '../src/components/button-scroll-top.jsx';

import HomePage from './features/home/homepage.jsx';
import TourList from './features/tourlist/index.jsx';
import { Route, Routes } from 'react-router-dom';
import TourDetail from './features/tourdetail/tourdetail.jsx';
import AuthContextProvider from './contexts/AuthContext.js';
import Cart from './features/cart/cart.jsx';
import TourCard from './features/tourlist/tourcard.jsx';
import CartItem from './features/cart/cartitem.jsx';
import Profile from './features/profile/profile.jsx';
import Auth from './features/auth/auth';
import Admin from './features/admin/Admin';
// import Auth from './features/auth/auth';

function App() {
  return (
    <AuthContextProvider>
      <Box>
        <ButtonSrollTop />
        <Routes>
          <Route
            path="/admin/dashboard"
            exact
            element={<Admin adminRoute="dashboard" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/user"
            exact
            element={<Admin adminRoute="user" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/employee"
            exact
            element={<Admin adminRoute="employee" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/bill"
            exact
            element={<Admin adminRoute="bill" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/tour"
            exact
            element={<Admin adminRoute="tour" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/admin/hotel"
            exact
            element={<Admin adminRoute="hotel" />}
          />
        </Routes>
        <Routes>
          <Route path="/admin" exact element={<Admin adminRoute="" />} />
        </Routes>
        <Routes>
          <Route path="/admin/car" exact element={<Admin adminRoute="car" />} />
        </Routes>
        <Routes>
          <Route
            path="/admin/event"
            exact
            element={<Admin adminRoute="event" />}
          />
        </Routes>
        <Header />
        <Routes>
          <Route path="/sign-in" exact element={<Auth authRoute="login" />} />
        </Routes>
        <Routes>
          <Route
            path="/sign-up"
            exact
            element={<Auth authRoute="register" />}
          />
        </Routes>
        <Routes>
          <Route
            path="/forget-password"
            exact
            element={<Auth authRoute="forget-password" />}
          />
        </Routes>
        <Routes>
          <Route path="/logout" exact element={<Auth authRoute="logout" />} />
        </Routes>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/home" exact element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path="/tourList" exact element={<TourList />} />
        </Routes>
        <Routes>
          <Route path="/tourDetail/:slug" exact element={<TourDetail />} />
        </Routes>
        <Routes>
          <Route path="/profile" exact element={<Profile />} />
        </Routes>
        <Routes>
          <Route path="/cart" axact element={<Cart />} />
        </Routes>
        <Routes>
          <Route path="/cartItem" axact element={<CartItem />} />
        </Routes>
        <Footer />
      </Box>
    </AuthContextProvider>
  );
}

export default App;