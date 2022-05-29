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
<<<<<<< HEAD
import CartItem from './features/cart/cartitem.jsx';

function App() {
  return (
    <Box>
      <ButtonSrollTop/>
      <Header/>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
      </Routes>
      <Routes>
        <Route path="/tourList" exact element={<TourList />} />
      </Routes>
      <Routes>
        <Route path="/tourDetail/:slug" exact element={<TourDetail />} />
      </Routes>
      <Routes>
        <Route path="/user" exact element={<User/>} />
      </Routes>
      <Routes>
        <Route path="/cartitem"  element={<CartItem/>}></Route>
      </Routes>
      <Footer/>
    </Box>
=======
import AuthContextProvider from './contexts/AuthContext.js';
import Auth from './features/auth/auth';

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
        <Footer />
      </Box>
    </AuthContextProvider>
>>>>>>> 77ef3443de3667a2837d2111666a19e0831ae610
  );
}

export default App;
