import React from 'react';
import { Box } from '@chakra-ui/react';

import Header from './components/header/header.jsx';
import Footer from '../src/components/footer/footer.jsx';
import ButtonSrollTop from '../src/components/button-scroll-top.jsx';

import HomePage from './features/home/homepage.jsx';
import TourList from './features/tourlist/index.jsx';
import User from './features/profile/user.jsx';
import { Route, Routes } from 'react-router-dom';
import TourDetail from './features/tourdetail/tourdetail.jsx';
import AuthContextProvider from './contexts/AuthContext.js';
import Cart from './features/cart/cart.jsx'
import TourCard from './features/tourlist/tourcard.jsx';
import CartItem from './features/cart/cartitem.jsx';
import Auth from './features/auth/auth.js'
// import Auth from './features/auth/auth';

function App() {
  return (
    <AuthContextProvider>
      <Box>
        <ButtonSrollTop />
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
          <Route path="/user" exact element={<User />} />
        </Routes>
        <Routes>
          <Route path="/cart" axact element={<Cart />}/>
        </Routes>
        <Routes>
          <Route path="/cartItem" axact element={<CartItem />}/>
        </Routes>
        <Footer />
      </Box>
    </AuthContextProvider>
  );
}

export default App;
