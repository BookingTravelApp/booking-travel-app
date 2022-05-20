import React from 'react';
import {
  Box,
} from '@chakra-ui/react';

import Header from './components/header/header.jsx'
import Footer from '../src/components/footer/footer.jsx'
import ButtonSrollTop from '../src/components/button-scroll-top.jsx';

import HomePage from './features/home/homepage.jsx';
import TourList from './features/tourlist/index.jsx';
import User from './features/profile/user.jsx';
import { Route, Routes } from 'react-router-dom';
import TourDetail from './features/tourdetail/tourdetail.jsx';

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
      <Footer/>
    </Box>
  );
}

export default App;
